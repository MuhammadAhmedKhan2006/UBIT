-- 07 Demo reads for all signed-in roles
-- Volunteer / registrar / shelter RLS otherwise hides seeded rows
-- (cases have no assigned_volunteer_id / registered_by).
-- Run once after 01–06 if Field / Register / Shelter screens are empty.

DROP POLICY IF EXISTS cases_authenticated_read ON public.cases;
CREATE POLICY cases_authenticated_read ON public.cases FOR SELECT
  USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS assignments_authenticated_read ON public.assignments;
CREATE POLICY assignments_authenticated_read ON public.assignments FOR SELECT
  USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS assets_authenticated_read ON public.assets;
CREATE POLICY assets_authenticated_read ON public.assets FOR SELECT
  USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS intake_authenticated_read ON public.intake_queue;
CREATE POLICY intake_authenticated_read ON public.intake_queue FOR SELECT
  USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS sync_authenticated_read ON public.sync_queue;
CREATE POLICY sync_authenticated_read ON public.sync_queue FOR SELECT
  USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS field_tasks_authenticated_read ON public.field_tasks;
CREATE POLICY field_tasks_authenticated_read ON public.field_tasks FOR SELECT
  USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS buddy_authenticated_read ON public.buddy_households;
CREATE POLICY buddy_authenticated_read ON public.buddy_households FOR SELECT
  USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS timeline_authenticated_read ON public.timeline;
CREATE POLICY timeline_authenticated_read ON public.timeline FOR SELECT
  USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS registrations_authenticated_read ON public.registrations;
CREATE POLICY registrations_authenticated_read ON public.registrations FOR SELECT
  USING (auth.role() = 'authenticated');
