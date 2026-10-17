-- 05 VIEWS, GEO HELPERS, REALTIME, STORAGE, GRANTS
-- Run after 04.

CREATE OR REPLACE VIEW public.community_shelters
WITH (security_invoker = true)
AS
SELECT * FROM public.shelters WHERE kind = 'community';

CREATE OR REPLACE VIEW public.cases_with_status
WITH (security_invoker = true)
AS
SELECT
  c.*,
  public.get_silent_duration_minutes(c.last_contact_at) AS silent_duration_minutes
FROM public.cases c;

CREATE OR REPLACE VIEW public.cases_public
WITH (security_invoker = true)
AS
SELECT
  c.id, c.name, c.name_urdu, c.age, c.tier, c.risk, c.status, c.area,
  c.vulnerability, c.unknown_data, c.household_size,
  c.location_text, c.location_text_urdu,
  CASE
    WHEN c.hide_exact_location OR public.current_profile_role() = 'viewer'
    THEN NULL
    ELSE c.location
  END AS location
FROM public.cases c;

CREATE OR REPLACE VIEW public.cases_with_nearest_shelter
WITH (security_invoker = true)
AS
SELECT
  c.*,
  s.id AS nearest_shelter_id,
  s.name AS nearest_shelter_name,
  s.free AS nearest_shelter_free_capacity,
  ST_Distance(c.location::geography, s.location::geography) / 1000 AS distance_km
FROM public.cases c
CROSS JOIN LATERAL (
  SELECT id, name, free, location
  FROM public.shelters
  WHERE free > 0 AND location IS NOT NULL
  ORDER BY c.location <-> location
  LIMIT 1
) s
WHERE c.location IS NOT NULL;

CREATE OR REPLACE VIEW public.active_assignments_view
WITH (security_invoker = true)
AS
SELECT
  a.id AS assignment_id,
  a.status,
  a.eta_minutes,
  a.pinned,
  a.asset,
  a.asset_label,
  c.id AS case_id,
  c.name AS case_name,
  c.name_urdu AS case_name_urdu,
  c.tier,
  c.risk,
  c.location_text,
  c.area,
  ast.name AS asset_name,
  ast.type AS asset_type,
  a.created_at AS assigned_at
FROM public.assignments a
JOIN public.cases c ON a.case_id = c.id
LEFT JOIN public.assets ast ON a.asset_id = ast.id
WHERE a.status IN ('queued', 'approved', 'dispatched')
ORDER BY c.tier, c.risk DESC;

CREATE OR REPLACE FUNCTION public.cases_within_radius(
  center_lat DOUBLE PRECISION,
  center_lng DOUBLE PRECISION,
  radius_km DOUBLE PRECISION
)
RETURNS TABLE (
  case_id TEXT,
  name TEXT,
  distance_km DOUBLE PRECISION,
  tier SMALLINT,
  risk NUMERIC
)
LANGUAGE plpgsql
STABLE
SECURITY INVOKER
AS $$
BEGIN
  RETURN QUERY
  SELECT
    c.id,
    c.name,
    ST_Distance(
      c.location::geography,
      ST_SetSRID(ST_MakePoint(center_lng, center_lat), 4326)::geography
    ) / 1000 AS distance,
    c.tier,
    c.risk
  FROM public.cases c
  WHERE c.location IS NOT NULL
    AND ST_DWithin(
      c.location::geography,
      ST_SetSRID(ST_MakePoint(center_lng, center_lat), 4326)::geography,
      radius_km * 1000
    )
  ORDER BY distance;
END;
$$;

CREATE OR REPLACE FUNCTION public.calculate_priority_score(
  p_tier SMALLINT,
  p_risk NUMERIC,
  p_silent_minutes INTEGER,
  p_vulnerability_count INTEGER
)
RETURNS NUMERIC
LANGUAGE plpgsql
IMMUTABLE
AS $$
DECLARE
  tier_weight NUMERIC;
  time_weight NUMERIC;
BEGIN
  tier_weight := CASE p_tier WHEN 1 THEN 100 WHEN 2 THEN 50 ELSE 25 END;
  time_weight := LEAST(COALESCE(p_silent_minutes, 0) / 10.0, 50);
  RETURN tier_weight + COALESCE(p_risk, 0) + time_weight + (COALESCE(p_vulnerability_count, 0) * 5);
END;
$$;

DO $$ BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.cases; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.assignments; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.shelters; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.notifications; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.sync_queue; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.intake_queue; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.audit_log; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.system_config; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.field_tasks; EXCEPTION WHEN duplicate_object THEN NULL; END $$;

INSERT INTO storage.buckets (id, name, public)
VALUES ('field-photos', 'field-photos', false)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS field_photos_read ON storage.objects;
CREATE POLICY field_photos_read ON storage.objects FOR SELECT
  USING (bucket_id = 'field-photos' AND auth.role() = 'authenticated');

DROP POLICY IF EXISTS field_photos_write ON storage.objects;
CREATE POLICY field_photos_write ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'field-photos' AND auth.role() = 'authenticated');

GRANT USAGE ON SCHEMA public TO authenticated, anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO anon;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO authenticated;

REVOKE UPDATE, DELETE ON public.audit_log FROM authenticated;

COMMENT ON TABLE public.cases IS 'Maps to src/store Case (id, name, nameUrdu, tier 1-3, risk, location, age, status, vulnerability, area, unknown).';
COMMENT ON TABLE public.assignments IS 'Maps to src/store Assignment (id, caseId, caseName, asset, assetLabel, status, pinned, etaMin).';
COMMENT ON TABLE public.shelters IS 'Community (cs-*) and official (sh-khi-04) facilities.';
COMMENT ON TABLE public.audit_log IS 'Immutable append-only ledger with SHA-256 chain.';
COMMENT ON TABLE public.sync_queue IS 'Offline outbox. Maps to SyncItem.';
