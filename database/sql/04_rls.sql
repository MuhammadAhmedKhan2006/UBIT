-- 04 ROW LEVEL SECURITY
-- Run after 03 (needs current_profile_role).

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.timeline ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shelters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shelter_arrivals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shelter_waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.intake_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sync_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.communication_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.field_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.buddy_households ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.buddy_checkins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hazard_sensors ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS profiles_self_select ON public.profiles;
CREATE POLICY profiles_self_select ON public.profiles FOR SELECT
  USING (auth.uid() = id);

DROP POLICY IF EXISTS profiles_self_update ON public.profiles;
CREATE POLICY profiles_self_update ON public.profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id AND role = public.current_profile_role());

DROP POLICY IF EXISTS profiles_coordinator_select ON public.profiles;
CREATE POLICY profiles_coordinator_select ON public.profiles FOR SELECT
  USING (public.current_profile_role() = 'coordinator');

DROP POLICY IF EXISTS cases_coordinator_all ON public.cases;
CREATE POLICY cases_coordinator_all ON public.cases FOR ALL
  USING (public.current_profile_role() = 'coordinator')
  WITH CHECK (public.current_profile_role() = 'coordinator');

DROP POLICY IF EXISTS cases_volunteer_select ON public.cases;
CREATE POLICY cases_volunteer_select ON public.cases FOR SELECT
  USING (
    public.current_profile_role() = 'volunteer'
    AND (
      assigned_volunteer_id = auth.uid()
      OR id IN (SELECT case_id FROM public.assignments WHERE volunteer_id = auth.uid())
      OR id IN (SELECT case_id FROM public.field_tasks WHERE volunteer_id = auth.uid())
    )
  );

DROP POLICY IF EXISTS cases_volunteer_update ON public.cases;
CREATE POLICY cases_volunteer_update ON public.cases FOR UPDATE
  USING (
    public.current_profile_role() = 'volunteer'
    AND (
      assigned_volunteer_id = auth.uid()
      OR id IN (SELECT case_id FROM public.field_tasks WHERE volunteer_id = auth.uid())
    )
  );

DROP POLICY IF EXISTS cases_registrar_select ON public.cases;
CREATE POLICY cases_registrar_select ON public.cases FOR SELECT
  USING (public.current_profile_role() = 'registrar' AND registered_by = auth.uid());

DROP POLICY IF EXISTS cases_registrar_insert ON public.cases;
CREATE POLICY cases_registrar_insert ON public.cases FOR INSERT
  WITH CHECK (public.current_profile_role() = 'registrar' AND registered_by = auth.uid());

DROP POLICY IF EXISTS cases_shelter_select ON public.cases;
CREATE POLICY cases_shelter_select ON public.cases FOR SELECT
  USING (
    public.current_profile_role() = 'shelter'
    AND status IN ('dispatched', 'sheltered', 'rescued', 'safe')
  );

DROP POLICY IF EXISTS cases_viewer_select ON public.cases;
CREATE POLICY cases_viewer_select ON public.cases FOR SELECT
  USING (public.current_profile_role() = 'viewer');

DROP POLICY IF EXISTS assets_read ON public.assets;
CREATE POLICY assets_read ON public.assets FOR SELECT
  USING (public.current_profile_role() IN ('coordinator', 'volunteer', 'viewer', 'shelter'));

DROP POLICY IF EXISTS assets_coord_write ON public.assets;
CREATE POLICY assets_coord_write ON public.assets FOR ALL
  USING (public.current_profile_role() = 'coordinator')
  WITH CHECK (public.current_profile_role() = 'coordinator');

DROP POLICY IF EXISTS assignments_coord ON public.assignments;
CREATE POLICY assignments_coord ON public.assignments FOR ALL
  USING (public.current_profile_role() = 'coordinator')
  WITH CHECK (public.current_profile_role() = 'coordinator');

DROP POLICY IF EXISTS assignments_vol_select ON public.assignments;
CREATE POLICY assignments_vol_select ON public.assignments FOR SELECT
  USING (public.current_profile_role() = 'volunteer' AND volunteer_id = auth.uid());

DROP POLICY IF EXISTS assignments_viewer_select ON public.assignments;
CREATE POLICY assignments_viewer_select ON public.assignments FOR SELECT
  USING (public.current_profile_role() IN ('viewer', 'shelter'));

DROP POLICY IF EXISTS audit_read ON public.audit_log;
CREATE POLICY audit_read ON public.audit_log FOR SELECT
  USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS audit_insert ON public.audit_log;
CREATE POLICY audit_insert ON public.audit_log FOR INSERT
  WITH CHECK (public.current_profile_role() IN ('coordinator', 'volunteer', 'registrar', 'shelter'));

DROP POLICY IF EXISTS timeline_read ON public.timeline;
CREATE POLICY timeline_read ON public.timeline FOR SELECT
  USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS timeline_write ON public.timeline;
CREATE POLICY timeline_write ON public.timeline FOR INSERT
  WITH CHECK (public.current_profile_role() IN ('coordinator', 'volunteer', 'registrar'));

DROP POLICY IF EXISTS shelters_read ON public.shelters;
CREATE POLICY shelters_read ON public.shelters FOR SELECT
  USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS shelters_insert ON public.shelters;
CREATE POLICY shelters_insert ON public.shelters FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

DROP POLICY IF EXISTS shelters_shelter_update ON public.shelters;
CREATE POLICY shelters_shelter_update ON public.shelters FOR UPDATE
  USING (public.current_profile_role() = 'shelter');

DROP POLICY IF EXISTS shelters_coord_all ON public.shelters;
CREATE POLICY shelters_coord_all ON public.shelters FOR ALL
  USING (public.current_profile_role() = 'coordinator')
  WITH CHECK (public.current_profile_role() = 'coordinator');

DROP POLICY IF EXISTS arrivals_read ON public.shelter_arrivals;
CREATE POLICY arrivals_read ON public.shelter_arrivals FOR SELECT
  USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS arrivals_write ON public.shelter_arrivals;
CREATE POLICY arrivals_write ON public.shelter_arrivals FOR INSERT
  WITH CHECK (public.current_profile_role() IN ('shelter', 'coordinator'));

DROP POLICY IF EXISTS waitlist_auth ON public.shelter_waitlist;
CREATE POLICY waitlist_auth ON public.shelter_waitlist FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

DROP POLICY IF EXISTS intake_coord ON public.intake_queue;
CREATE POLICY intake_coord ON public.intake_queue FOR ALL
  USING (public.current_profile_role() IN ('coordinator', 'registrar'))
  WITH CHECK (public.current_profile_role() IN ('coordinator', 'registrar'));

DROP POLICY IF EXISTS intake_viewer ON public.intake_queue;
CREATE POLICY intake_viewer ON public.intake_queue FOR SELECT
  USING (public.current_profile_role() = 'viewer');

DROP POLICY IF EXISTS sync_own ON public.sync_queue;
CREATE POLICY sync_own ON public.sync_queue FOR ALL
  USING (
    public.current_profile_role() = 'volunteer'
    AND (volunteer_id = auth.uid() OR volunteer_id IS NULL)
  );

DROP POLICY IF EXISTS sync_coord ON public.sync_queue;
CREATE POLICY sync_coord ON public.sync_queue FOR SELECT
  USING (public.current_profile_role() = 'coordinator');

DROP POLICY IF EXISTS registrations_own ON public.registrations;
CREATE POLICY registrations_own ON public.registrations FOR ALL
  USING (
    public.current_profile_role() = 'registrar'
    AND (registrar_id = auth.uid() OR registrar_id IS NULL)
  );

DROP POLICY IF EXISTS registrations_coord ON public.registrations;
CREATE POLICY registrations_coord ON public.registrations FOR ALL
  USING (public.current_profile_role() = 'coordinator')
  WITH CHECK (public.current_profile_role() = 'coordinator');

DROP POLICY IF EXISTS notifications_own ON public.notifications;
CREATE POLICY notifications_own ON public.notifications FOR SELECT
  USING (user_id = auth.uid() OR (user_id IS NULL AND audience_role = public.current_profile_role()));

DROP POLICY IF EXISTS notifications_update_own ON public.notifications;
CREATE POLICY notifications_update_own ON public.notifications FOR UPDATE
  USING (user_id = auth.uid());

DROP POLICY IF EXISTS notifications_coord_insert ON public.notifications;
CREATE POLICY notifications_coord_insert ON public.notifications FOR INSERT
  WITH CHECK (public.current_profile_role() IN ('coordinator', 'volunteer'));

DROP POLICY IF EXISTS config_read ON public.system_config;
CREATE POLICY config_read ON public.system_config FOR SELECT
  USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS config_coord ON public.system_config;
CREATE POLICY config_coord ON public.system_config FOR ALL
  USING (public.current_profile_role() = 'coordinator')
  WITH CHECK (public.current_profile_role() = 'coordinator');

DROP POLICY IF EXISTS comms_read ON public.communication_log;
CREATE POLICY comms_read ON public.communication_log FOR SELECT
  USING (public.current_profile_role() IN ('coordinator', 'volunteer', 'viewer'));

DROP POLICY IF EXISTS comms_write ON public.communication_log;
CREATE POLICY comms_write ON public.communication_log FOR INSERT
  WITH CHECK (public.current_profile_role() IN ('coordinator', 'volunteer'));

DROP POLICY IF EXISTS field_tasks_vol ON public.field_tasks;
CREATE POLICY field_tasks_vol ON public.field_tasks FOR ALL
  USING (public.current_profile_role() = 'volunteer' AND volunteer_id = auth.uid());

DROP POLICY IF EXISTS field_tasks_coord ON public.field_tasks;
CREATE POLICY field_tasks_coord ON public.field_tasks FOR ALL
  USING (public.current_profile_role() = 'coordinator')
  WITH CHECK (public.current_profile_role() = 'coordinator');

DROP POLICY IF EXISTS buddy_vol ON public.buddy_households;
CREATE POLICY buddy_vol ON public.buddy_households FOR ALL
  USING (public.current_profile_role() = 'volunteer' AND (volunteer_id = auth.uid() OR volunteer_id IS NULL));

DROP POLICY IF EXISTS buddy_coord ON public.buddy_households;
CREATE POLICY buddy_coord ON public.buddy_households FOR SELECT
  USING (public.current_profile_role() = 'coordinator');

DROP POLICY IF EXISTS buddy_checkins_vol ON public.buddy_checkins;
CREATE POLICY buddy_checkins_vol ON public.buddy_checkins FOR ALL
  USING (public.current_profile_role() IN ('volunteer', 'coordinator'));

DROP POLICY IF EXISTS sensors_read ON public.hazard_sensors;
CREATE POLICY sensors_read ON public.hazard_sensors FOR SELECT
  USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS sensors_coord ON public.hazard_sensors;
CREATE POLICY sensors_coord ON public.hazard_sensors FOR ALL
  USING (public.current_profile_role() = 'coordinator')
  WITH CHECK (public.current_profile_role() = 'coordinator');
