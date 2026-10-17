-- 08 BACKEND ADDITIONS FROM THE PROJECT BREAKDOWN
-- Run after 07. Safe to re-run.
--   * check-ins + escalation ladder (silence is a signal)
--   * telegram links, invite codes, demo clock, rules config
--   * viewer role becomes aggregated / anonymised only
--   * sign-up can no longer self-assign coordinator / viewer without an invite code
--   * demo snapshot / restore helpers (service role only)

-- ---------------------------------------------------------------- profiles
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS organisation TEXT;

-- ---------------------------------------------------------------- check-ins
CREATE TABLE IF NOT EXISTS public.checkins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id TEXT NOT NULL REFERENCES public.cases(id) ON DELETE CASCADE,
  channel public.communication_channel NOT NULL DEFAULT 'telegram',
  prompt_text TEXT,
  sent_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  due_at TIMESTAMPTZ NOT NULL DEFAULT NOW() + INTERVAL '10 minutes',
  reply_code SMALLINT CHECK (reply_code IN (1, 2, 3)), -- 1 safe, 2 need help, 3 evacuate now
  replied_at TIMESTAMPTZ,
  -- 0 prompt sent, 1 reminder, 2 voice call, 3 buddy volunteer, 4 dispatch
  escalation_stage SMALLINT NOT NULL DEFAULT 0 CHECK (escalation_stage BETWEEN 0 AND 4),
  last_escalated_at TIMESTAMPTZ,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'replied', 'escalated', 'closed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_checkins_case ON public.checkins(case_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_checkins_open ON public.checkins(status, due_at) WHERE status IN ('pending', 'escalated');

CREATE TABLE IF NOT EXISTS public.telegram_links (
  chat_id BIGINT PRIMARY KEY,
  case_id TEXT REFERENCES public.cases(id) ON DELETE CASCADE,
  phone TEXT,
  language public.preferred_language NOT NULL DEFAULT 'ur',
  linked_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telegram_case ON public.telegram_links(case_id);

-- Invite codes are never readable by clients (RLS on, no policies => service role only).
CREATE TABLE IF NOT EXISTS public.invite_codes (
  code TEXT PRIMARY KEY,
  role public.user_role NOT NULL,
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.demo_snapshot (
  table_name TEXT PRIMARY KEY,
  rows JSONB NOT NULL,
  taken_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.checkins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.telegram_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invite_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.demo_snapshot ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS checkins_coord ON public.checkins;
CREATE POLICY checkins_coord ON public.checkins FOR ALL
  USING (public.current_profile_role() = 'coordinator')
  WITH CHECK (public.current_profile_role() = 'coordinator');

DROP POLICY IF EXISTS checkins_vol_select ON public.checkins;
CREATE POLICY checkins_vol_select ON public.checkins FOR SELECT
  USING (
    public.current_profile_role() = 'volunteer'
    AND case_id IN (SELECT id FROM public.cases WHERE assigned_volunteer_id = auth.uid())
  );

DROP POLICY IF EXISTS telegram_links_coord ON public.telegram_links;
CREATE POLICY telegram_links_coord ON public.telegram_links FOR SELECT
  USING (public.current_profile_role() = 'coordinator');

REVOKE ALL ON public.invite_codes, public.demo_snapshot FROM anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.checkins TO authenticated;
GRANT SELECT ON public.telegram_links TO authenticated;

DO $$ BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.checkins; EXCEPTION WHEN duplicate_object THEN NULL; END $$;

INSERT INTO public.invite_codes (code, role) VALUES
  ('SINDH-2026', 'coordinator'),
  ('SINDH-2026', 'viewer')
ON CONFLICT (code) DO NOTHING;

-- ---------------------------------------------------------------- config
INSERT INTO public.system_config (key, value) VALUES
  ('demo_clock', '{"offset_seconds": 0}'::JSONB),
  ('hazard_state', '{"hazard": "flood", "mode": "flood", "eta_at": null, "peak_m": 4.3}'::JSONB),
  ('alert_thresholds', '{"warning_seconds": 14400, "evacuation_seconds": 3600}'::JSONB),
  ('escalation_rules', '{"reminder_min": 10, "call_min": 20, "buddy_min": 30, "dispatch_min": 45, "silence_min": 60}'::JSONB),
  ('rules_config', '{
    "lead_time_base_min": 120,
    "lead_time_extra_min": {"elderly": 60, "bedridden": 120, "oxygen_dependent": 120, "mobility_impaired": 90, "visually_impaired": 60, "no_phone": 60, "pregnant": 60, "child_alone": 60, "woman_alone": 30},
    "power_dependent_flags": ["oxygen_dependent", "dialysis"],
    "life_threat_flags": ["oxygen_dependent", "bedridden", "dialysis", "child_alone"],
    "weights": {"flood": {"exposure": 1.0, "vulnerability": 1.0, "time": 1.0}, "heatwave": {"exposure": 0.7, "vulnerability": 1.3, "time": 1.0}}
  }'::JSONB)
ON CONFLICT (key) DO NOTHING;

CREATE OR REPLACE FUNCTION public.demo_now()
RETURNS TIMESTAMPTZ
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE off INTEGER;
BEGIN
  SELECT COALESCE((value->>'offset_seconds')::INTEGER, 0) INTO off FROM public.system_config WHERE key = 'demo_clock';
  RETURN NOW() + make_interval(secs => COALESCE(off, 0));
END;
$$;

-- ---------------------------------------------------------------- viewer = anonymised
DROP POLICY IF EXISTS cases_viewer_select ON public.cases;
DROP POLICY IF EXISTS intake_viewer ON public.intake_queue;

DROP POLICY IF EXISTS comms_read ON public.communication_log;
CREATE POLICY comms_read ON public.communication_log FOR SELECT
  USING (public.current_profile_role() IN ('coordinator', 'volunteer'));

-- Column names mirror public.cases so the front end can map rows unchanged.
-- Owner-rights view: viewers can read it without any access to the cases table.
CREATE OR REPLACE VIEW public.cases_anonymised AS
SELECT
  c.id,
  'Case ' || RIGHT(c.id, 4) AS name,
  NULL::TEXT AS name_urdu,
  (c.age / 10) * 10 AS age,
  c.tier, c.risk, c.status, c.area, c.vulnerability, c.vulnerability_flags,
  c.unknown_data, c.confidence_score, c.household_size,
  INITCAP(c.area::TEXT) AS location_text,
  NULL::TEXT AS location_text_urdu,
  ST_SnapToGrid(c.location, 0.01) AS location
FROM public.cases c;

REVOKE ALL ON public.cases_anonymised FROM anon;
GRANT SELECT ON public.cases_anonymised TO authenticated;

-- ---------------------------------------------------------------- safer sign-up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  r public.user_role := 'viewer';
  n TEXT; nu TEXT; rl TEXT; ph TEXT; org TEXT; req TEXT;
BEGIN
  ph := COALESCE(NEW.raw_user_meta_data->>'phone', NEW.phone);
  org := NEW.raw_user_meta_data->>'organisation';

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
      req := NEW.raw_user_meta_data->>'role';
      IF req IN ('volunteer', 'registrar', 'shelter') THEN
        r := req::public.user_role;
      ELSIF req IN ('coordinator', 'viewer') AND EXISTS (
        SELECT 1 FROM public.invite_codes ic
        WHERE ic.active
          AND ic.role = req::public.user_role
          AND upper(ic.code) = upper(COALESCE(NEW.raw_user_meta_data->>'invite_code', ''))
      ) THEN
        r := req::public.user_role;
      ELSE
        r := 'viewer'; -- read-only fallback
      END IF;
      rl := CASE r
        WHEN 'coordinator' THEN 'Coordinator / کوآرڈینیٹر'
        WHEN 'volunteer' THEN 'Field Volunteer / فیلڈ رضاکار'
        WHEN 'registrar' THEN 'Registrar / رجسٹرار'
        WHEN 'shelter' THEN 'Shelter Manager / شیلٹر مینیجر'
        ELSE 'Viewer / مبصر' END;
  END CASE;

  INSERT INTO public.profiles (id, email, name, name_urdu, phone, role, role_label, organisation)
  VALUES (NEW.id, NEW.email, n, nu, ph, r, rl, org)
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

-- ---------------------------------------------------------------- demo snapshot / restore
CREATE OR REPLACE FUNCTION public.snapshot_demo_state(force BOOLEAN DEFAULT false)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE t TEXT;
BEGIN
  IF NOT force AND EXISTS (SELECT 1 FROM public.demo_snapshot) THEN RETURN; END IF;
  DELETE FROM public.demo_snapshot;
  FOREACH t IN ARRAY ARRAY['cases','assets','assignments','field_tasks','timeline','intake_queue','registrations','buddy_households','shelters','notifications','sync_queue'] LOOP
    EXECUTE format(
      'INSERT INTO public.demo_snapshot (table_name, rows) SELECT %L, COALESCE(jsonb_agg(to_jsonb(x) - ''free''), ''[]''::jsonb) FROM public.%I x',
      t, t);
  END LOOP;
END;
$$;

CREATE OR REPLACE FUNCTION public.restore_demo_state()
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE t TEXT; r JSONB; cols TEXT;
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.demo_snapshot) THEN
    RAISE EXCEPTION 'No demo snapshot yet. Call snapshot_demo_state() first.';
  END IF;

  -- children first
  DELETE FROM public.shelter_arrivals;
  DELETE FROM public.shelter_waitlist;
  DELETE FROM public.communication_log;
  DELETE FROM public.checkins;
  DELETE FROM public.buddy_checkins;
  DELETE FROM public.field_tasks;
  DELETE FROM public.notifications;
  DELETE FROM public.assignments;
  DELETE FROM public.timeline;
  DELETE FROM public.intake_queue;
  DELETE FROM public.registrations;
  DELETE FROM public.sync_queue;
  DELETE FROM public.assets;
  DELETE FROM public.cases;
  DELETE FROM public.buddy_households;
  DELETE FROM public.shelters;

  -- parents first
  FOREACH t IN ARRAY ARRAY['cases','assets','assignments','field_tasks','timeline','intake_queue','registrations','buddy_households','shelters','notifications','sync_queue'] LOOP
    SELECT rows INTO r FROM public.demo_snapshot WHERE table_name = t;
    IF r IS NOT NULL AND jsonb_array_length(r) > 0 THEN
      SELECT string_agg(quote_ident(column_name), ', ' ORDER BY ordinal_position) INTO cols
      FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = t AND is_generated = 'NEVER' AND (is_identity = 'NO');
      EXECUTE format('INSERT INTO public.%I (%s) SELECT %s FROM jsonb_populate_recordset(NULL::public.%I, $1)', t, cols, cols, t) USING r;
    END IF;
  END LOOP;

  UPDATE public.system_config SET value = '{"offset_seconds": 0}'::JSONB WHERE key = 'demo_clock';
  UPDATE public.system_config SET value = '"warning"'::JSONB WHERE key = 'alert_level';
  UPDATE public.system_config SET value = '13330'::JSONB WHERE key = 'hazard_countdown_seconds';
  UPDATE public.system_config SET value = (value || '{"eta_at": null}'::JSONB) WHERE key = 'hazard_state';
  UPDATE public.system_config SET value = '{"boatsDown":3,"trucksDown":1,"heatwave":true,"meshDown":true,"noise":true,"roadClosed":false,"boatBroken":false,"rainMm":140,"ran":false,"comparing":false}'::JSONB WHERE key = 'simulation_state';

  INSERT INTO public.audit_log (action_type, action_text, user_name, reason)
  VALUES ('sync', 'Demo state reset to snapshot', 'system', 'Admin demo control');
END;
$$;

REVOKE ALL ON FUNCTION public.snapshot_demo_state(BOOLEAN), public.restore_demo_state() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.snapshot_demo_state(BOOLEAN), public.restore_demo_state() TO service_role;
