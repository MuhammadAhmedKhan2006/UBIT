-- 09 REGISTRATIONS BECOME CASES
-- Run after 08. Safe to re-run.
-- A registrar saves a household; this trigger turns it into a case the scoring engine can rank.
-- Missing location/vulnerability data is flagged unknown_data = true ("high exposure, welfare check").

CREATE OR REPLACE FUNCTION public.registration_to_case()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  cid TEXT;
  a public.geographic_area;
  flags JSONB := COALESCE(NEW.vulnerability_flags, '[]'::JSONB);
  rname TEXT;
BEGIN
  IF NEW.converted_to_case_id IS NOT NULL THEN RETURN NEW; END IF;

  cid := 'PK-KHI-R' || upper(substr(md5(NEW.id || clock_timestamp()::TEXT), 1, 6));
  a := CASE
    WHEN lower(COALESCE(NEW.area, '')) LIKE '%lyari%' THEN 'lyari'
    WHEN lower(COALESCE(NEW.area, '')) LIKE '%malir%' THEN 'malir'
    WHEN lower(COALESCE(NEW.area, '')) LIKE '%korangi%' THEN 'korangi'
    WHEN lower(COALESCE(NEW.area, '')) LIKE '%keamari%' THEN 'keamari'
    WHEN lower(COALESCE(NEW.area, '')) LIKE '%gulshan%' THEN 'gulshan'
    ELSE 'other' END;

  INSERT INTO public.cases (
    id, name, name_urdu, age, phone, phone_type, preferred_language, location, location_text, area,
    hide_exact_location, tier, risk, status, vulnerability, vulnerability_flags, household_size,
    unknown_data, confidence_score, registered_by
  ) VALUES (
    cid, NEW.name, NEW.name_urdu, NEW.age, NEW.phone,
    CASE WHEN NEW.phone IS NULL OR NEW.phone = '' THEN 'none'::public.phone_type ELSE 'basic'::public.phone_type END,
    NEW.preferred_language, NEW.location, COALESCE(NULLIF(NEW.location_text, ''), NULLIF(NEW.area, ''), 'Location not given'), a,
    COALESCE(NEW.hide_exact_location, false), 3, 0, 'pending',
    CASE WHEN jsonb_array_length(flags) = 0 THEN 'Registered household' ELSE replace(flags::TEXT, '"', '') END,
    flags, NEW.household_size,
    (NEW.location IS NULL OR jsonb_array_length(flags) = 0),
    CASE WHEN NEW.location IS NULL THEN 45 ELSE 70 END,
    NEW.registrar_id
  );

  SELECT name INTO rname FROM public.profiles WHERE id = NEW.registrar_id;

  UPDATE public.registrations SET converted_to_case_id = cid WHERE id = NEW.id;

  INSERT INTO public.timeline (case_id, event_text, event_text_urdu, event_type, created_by)
  VALUES (cid, 'Registered by ' || COALESCE(rname, 'a registrar'), 'اندراج: ' || COALESCE(rname, 'رجسٹرار'), 'registration', NEW.registrar_id);

  INSERT INTO public.audit_log (action_type, action_text, user_id, user_name, user_role, case_id, case_name, reason)
  VALUES ('registration', 'Household registered: ' || NEW.name, NEW.registrar_id, COALESCE(rname, 'registrar'), 'registrar', cid, NEW.name,
          'Created from registrar form');

  INSERT INTO public.notifications (audience_role, type, text, text_urdu, related_case_id)
  VALUES ('coordinator', 'registration', 'New registration: ' || NEW.name, 'نیا اندراج: ' || NEW.name, cid);

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS registration_to_case_trigger ON public.registrations;
CREATE TRIGGER registration_to_case_trigger
  AFTER INSERT ON public.registrations
  FOR EACH ROW EXECUTE FUNCTION public.registration_to_case();
