-- 03 FUNCTIONS + TRIGGERS
-- Run after 02. profiles (and the rest) already exist.
-- plpgsql bodies are not parsed at CREATE time, so table refs are safe.

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Must be plpgsql (not LANGUAGE sql): SQL functions resolve tables at CREATE time.
CREATE OR REPLACE FUNCTION public.current_profile_role()
RETURNS public.user_role
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  r public.user_role;
BEGIN
  SELECT p.role INTO r FROM public.profiles p WHERE p.id = auth.uid();
  RETURN r;
END;
$$;

CREATE OR REPLACE FUNCTION public.get_silent_duration_minutes(last_contact TIMESTAMPTZ)
RETURNS INTEGER
LANGUAGE plpgsql
STABLE
AS $$
BEGIN
  IF last_contact IS NULL THEN
    RETURN NULL;
  END IF;
  RETURN EXTRACT(EPOCH FROM (NOW() - last_contact))::INTEGER / 60;
END;
$$;

CREATE OR REPLACE FUNCTION public.tier_to_int(t public.priority_tier)
RETURNS SMALLINT
LANGUAGE plpgsql
IMMUTABLE
AS $$
BEGIN
  RETURN CASE t
    WHEN 'tier_1' THEN 1
    WHEN 'tier_2' THEN 2
    ELSE 3
  END;
END;
$$;

CREATE OR REPLACE FUNCTION public.int_to_tier(n INTEGER)
RETURNS public.priority_tier
LANGUAGE plpgsql
IMMUTABLE
AS $$
BEGIN
  RETURN CASE
    WHEN n <= 1 THEN 'tier_1'::public.priority_tier
    WHEN n = 2 THEN 'tier_2'::public.priority_tier
    ELSE 'tier_3'::public.priority_tier
  END;
END;
$$;

CREATE OR REPLACE FUNCTION public.compute_audit_hash()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
DECLARE
  prev_hash TEXT;
  content TEXT;
BEGIN
  SELECT al.entry_hash INTO prev_hash
  FROM public.audit_log al
  ORDER BY al.block_height DESC
  LIMIT 1;

  IF prev_hash IS NULL THEN
    prev_hash := 'GENESIS_BLOCK_NOBODY_LEFT_BEHIND';
  END IF;

  NEW.previous_hash := prev_hash;
  content := COALESCE(NEW.id, '') ||
             NEW.action_type::TEXT ||
             COALESCE(NEW.action_text, '') ||
             COALESCE(NEW.case_id, '') ||
             COALESCE(NEW.user_id::TEXT, 'system') ||
             NEW.timestamp::TEXT ||
             prev_hash;
  NEW.entry_hash := encode(digest(content, 'sha256'), 'hex');
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.prevent_audit_modification()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  RAISE EXCEPTION 'Audit log is immutable.';
  RETURN NULL;
END;
$$;

CREATE OR REPLACE FUNCTION public.update_shelter_occupancy()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.shelters
    SET occupied = occupied + NEW.party_size
    WHERE id = NEW.shelter_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.shelters
    SET occupied = GREATEST(occupied - OLD.party_size, 0)
    WHERE id = OLD.shelter_id;
  END IF;
  RETURN COALESCE(NEW, OLD);
END;
$$;

CREATE OR REPLACE FUNCTION public.touch_buddy_household()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE public.buddy_households
  SET last_outcome = NEW.outcome, last_checked_at = NEW.created_at
  WHERE id = NEW.household_id;
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  r public.user_role := 'viewer';
  n TEXT;
  nu TEXT;
  rl TEXT;
  ph TEXT;
BEGIN
  ph := COALESCE(NEW.raw_user_meta_data->>'phone', NEW.phone);

  CASE lower(NEW.email)
    WHEN 'zara.khan@emergency.sindh.gov.pk' THEN
      r := 'coordinator'; n := 'Zara Khan'; nu := 'زارا خان';
      rl := 'Coordinator / کوآرڈینیٹر'; ph := COALESCE(ph, '+92 300 1112233');
    WHEN 'bilal.field@volunteer.sindh.org' THEN
      r := 'volunteer'; n := 'Bilal Ahmed'; nu := 'بلال احمد';
      rl := 'Field Volunteer / فیلڈ رضاکار'; ph := COALESCE(ph, '+92 321 4455667');
    WHEN 'amina.b@community.sindh.gov.pk' THEN
      r := 'registrar'; n := 'Amina Baloch'; nu := 'آمنہ بلوچ';
      rl := 'Registrar / رجسٹرار'; ph := COALESCE(ph, '+92 333 7788990');
    WHEN 'tariq.shelter@relief.sindh.gov.pk' THEN
      r := 'shelter'; n := 'Tariq Mansoor'; nu := 'طارق منصور';
      rl := 'Shelter Manager / شیلٹر مینیجر'; ph := COALESCE(ph, '+92 345 2200114');
    WHEN 'f.malik@audit.un-relief.org' THEN
      r := 'viewer'; n := 'Dr. Farooq Malik'; nu := 'ڈاکٹر فاروق ملک';
      rl := 'Viewer / غیر جانبدار مبصر'; ph := COALESCE(ph, '+92 301 5566778');
    ELSE
      n := COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1));
      nu := NEW.raw_user_meta_data->>'name_urdu';
      rl := COALESCE(NEW.raw_user_meta_data->>'role_label', 'Viewer');
      IF NEW.raw_user_meta_data->>'role' IS NOT NULL THEN
        r := (NEW.raw_user_meta_data->>'role')::public.user_role;
      END IF;
  END CASE;

  INSERT INTO public.profiles (id, email, name, name_urdu, phone, role, role_label)
  VALUES (NEW.id, NEW.email, n, nu, ph, r, rl)
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS update_profiles_updated_at ON public.profiles;
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS update_cases_updated_at ON public.cases;
CREATE TRIGGER update_cases_updated_at BEFORE UPDATE ON public.cases
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS update_assets_updated_at ON public.assets;
CREATE TRIGGER update_assets_updated_at BEFORE UPDATE ON public.assets
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS update_assignments_updated_at ON public.assignments;
CREATE TRIGGER update_assignments_updated_at BEFORE UPDATE ON public.assignments
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS update_shelters_updated_at ON public.shelters;
CREATE TRIGGER update_shelters_updated_at BEFORE UPDATE ON public.shelters
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS update_field_tasks_updated_at ON public.field_tasks;
CREATE TRIGGER update_field_tasks_updated_at BEFORE UPDATE ON public.field_tasks
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS update_system_config_updated_at ON public.system_config;
CREATE TRIGGER update_system_config_updated_at BEFORE UPDATE ON public.system_config
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS audit_log_hash_trigger ON public.audit_log;
CREATE TRIGGER audit_log_hash_trigger
  BEFORE INSERT ON public.audit_log
  FOR EACH ROW EXECUTE FUNCTION public.compute_audit_hash();

DROP TRIGGER IF EXISTS prevent_audit_update ON public.audit_log;
CREATE TRIGGER prevent_audit_update
  BEFORE UPDATE ON public.audit_log
  FOR EACH ROW EXECUTE FUNCTION public.prevent_audit_modification();

DROP TRIGGER IF EXISTS prevent_audit_delete ON public.audit_log;
CREATE TRIGGER prevent_audit_delete
  BEFORE DELETE ON public.audit_log
  FOR EACH ROW EXECUTE FUNCTION public.prevent_audit_modification();

DROP TRIGGER IF EXISTS shelter_arrival_occupancy_trigger ON public.shelter_arrivals;
CREATE TRIGGER shelter_arrival_occupancy_trigger
  AFTER INSERT OR DELETE ON public.shelter_arrivals
  FOR EACH ROW EXECUTE FUNCTION public.update_shelter_occupancy();

DROP TRIGGER IF EXISTS buddy_checkin_touch ON public.buddy_checkins;
CREATE TRIGGER buddy_checkin_touch
  AFTER INSERT ON public.buddy_checkins
  FOR EACH ROW EXECUTE FUNCTION public.touch_buddy_household();

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
