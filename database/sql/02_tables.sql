-- 02 TABLES + INDEXES
-- Run after 01. Safe to re-run (IF NOT EXISTS).

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  name_urdu TEXT,
  phone TEXT,
  role public.user_role NOT NULL DEFAULT 'viewer',
  role_label TEXT,
  language public.preferred_language NOT NULL DEFAULT 'en',
  theme TEXT NOT NULL DEFAULT 'dark' CHECK (theme IN ('light', 'dark')),
  volunteer_code TEXT,
  sector TEXT,
  avatar_url TEXT,
  active BOOLEAN NOT NULL DEFAULT true,
  last_seen_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_active ON public.profiles(active);
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);

CREATE TABLE IF NOT EXISTS public.cases (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  name_urdu TEXT,
  gender TEXT CHECK (gender IN ('female', 'male', 'other', 'unknown')),
  age INTEGER,
  phone TEXT,
  phone_type public.phone_type NOT NULL DEFAULT 'none',
  preferred_language public.preferred_language NOT NULL DEFAULT 'ur',
  location GEOMETRY(Point, 4326),
  location_text TEXT NOT NULL,
  location_text_urdu TEXT,
  area public.geographic_area NOT NULL DEFAULT 'lyari',
  landmark TEXT,
  landmark_urdu TEXT,
  hide_exact_location BOOLEAN NOT NULL DEFAULT false,
  tier SMALLINT NOT NULL DEFAULT 3 CHECK (tier IN (1, 2, 3)),
  risk NUMERIC(5,2) NOT NULL DEFAULT 0 CHECK (risk >= 0 AND risk <= 100),
  status public.case_status NOT NULL DEFAULT 'pending',
  vulnerability TEXT,
  vulnerability_urdu TEXT,
  vulnerability_flags JSONB NOT NULL DEFAULT '[]'::JSONB,
  exposure_score NUMERIC(5,2),
  vulnerability_score NUMERIC(5,2),
  time_urgency_score NUMERIC(5,2),
  confidence_score NUMERIC(5,2),
  household_size INTEGER NOT NULL DEFAULT 1,
  last_contact_at TIMESTAMPTZ,
  last_contact_channel public.communication_channel,
  unknown_data BOOLEAN NOT NULL DEFAULT false,
  duplicate_of TEXT REFERENCES public.cases(id),
  registered_by UUID REFERENCES public.profiles(id),
  assigned_volunteer_id UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_cases_status ON public.cases(status);
CREATE INDEX IF NOT EXISTS idx_cases_tier ON public.cases(tier);
CREATE INDEX IF NOT EXISTS idx_cases_area ON public.cases(area);
CREATE INDEX IF NOT EXISTS idx_cases_risk ON public.cases(risk DESC);
CREATE INDEX IF NOT EXISTS idx_cases_tier_risk ON public.cases(tier, risk DESC);
CREATE INDEX IF NOT EXISTS idx_cases_status_area ON public.cases(status, area);
CREATE INDEX IF NOT EXISTS idx_cases_location ON public.cases USING GIST(location);
CREATE INDEX IF NOT EXISTS idx_cases_registered_by ON public.cases(registered_by);
CREATE INDEX IF NOT EXISTS idx_cases_assigned_vol ON public.cases(assigned_volunteer_id);
CREATE INDEX IF NOT EXISTS idx_cases_duplicate ON public.cases(duplicate_of) WHERE duplicate_of IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_cases_vulnerability ON public.cases USING GIN(vulnerability_flags);
CREATE INDEX IF NOT EXISTS idx_cases_unknown ON public.cases(unknown_data) WHERE unknown_data;
CREATE INDEX IF NOT EXISTS idx_cases_search ON public.cases USING GIN(
  to_tsvector('simple', COALESCE(name, '') || ' ' || COALESCE(location_text, '') || ' ' || COALESCE(id, ''))
);

CREATE TABLE IF NOT EXISTS public.assets (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  name_urdu TEXT,
  type public.asset_type NOT NULL,
  capacity INTEGER,
  special_equipment JSONB NOT NULL DEFAULT '[]'::JSONB,
  available BOOLEAN NOT NULL DEFAULT true,
  current_case_id TEXT REFERENCES public.cases(id),
  current_location GEOMETRY(Point, 4326),
  fuel_percentage INTEGER CHECK (fuel_percentage >= 0 AND fuel_percentage <= 100),
  crew_size INTEGER,
  crew_composition TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_assets_type ON public.assets(type);
CREATE INDEX IF NOT EXISTS idx_assets_available ON public.assets(available);
CREATE INDEX IF NOT EXISTS idx_assets_location ON public.assets USING GIST(current_location);

CREATE TABLE IF NOT EXISTS public.assignments (
  id TEXT PRIMARY KEY DEFAULT ('asg-' || floor(extract(epoch from now()) * 1000)::BIGINT::TEXT),
  case_id TEXT NOT NULL REFERENCES public.cases(id) ON DELETE CASCADE,
  case_name TEXT,
  asset_id TEXT REFERENCES public.assets(id),
  asset public.asset_type NOT NULL,
  asset_label TEXT NOT NULL,
  status public.assignment_status NOT NULL DEFAULT 'queued',
  pinned BOOLEAN NOT NULL DEFAULT false,
  eta_minutes INTEGER,
  volunteer_id UUID REFERENCES public.profiles(id),
  algorithm_rationale TEXT,
  algorithm_rationale_urdu TEXT,
  trade_off_notes TEXT,
  approved_by UUID REFERENCES public.profiles(id),
  approved_at TIMESTAMPTZ,
  dispatched_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_assignments_case ON public.assignments(case_id);
CREATE INDEX IF NOT EXISTS idx_assignments_asset ON public.assignments(asset_id);
CREATE INDEX IF NOT EXISTS idx_assignments_status ON public.assignments(status);
CREATE INDEX IF NOT EXISTS idx_assignments_volunteer ON public.assignments(volunteer_id);
CREATE INDEX IF NOT EXISTS idx_assignments_pinned ON public.assignments(pinned) WHERE pinned;
CREATE INDEX IF NOT EXISTS idx_assignments_case_status ON public.assignments(case_id, status);

CREATE TABLE IF NOT EXISTS public.audit_log (
  id TEXT PRIMARY KEY DEFAULT ('a' || floor(extract(epoch from now()) * 1000)::BIGINT::TEXT),
  action_type public.audit_action_type NOT NULL,
  action_text TEXT NOT NULL,
  action_text_urdu TEXT,
  user_id UUID REFERENCES public.profiles(id),
  user_name TEXT NOT NULL,
  user_role public.user_role,
  case_id TEXT,
  case_name TEXT,
  before_state JSONB,
  after_state JSONB,
  reason TEXT,
  reason_urdu TEXT,
  attached_evidence TEXT[],
  previous_hash TEXT,
  entry_hash TEXT NOT NULL DEFAULT 'pending',
  block_height BIGINT GENERATED ALWAYS AS IDENTITY,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audit_log_case ON public.audit_log(case_id);
CREATE INDEX IF NOT EXISTS idx_audit_log_user ON public.audit_log(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_log_action_type ON public.audit_log(action_type);
CREATE INDEX IF NOT EXISTS idx_audit_log_timestamp ON public.audit_log(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_audit_log_block ON public.audit_log(block_height);
CREATE INDEX IF NOT EXISTS idx_audit_log_search ON public.audit_log USING GIN(
  to_tsvector('simple', COALESCE(action_text, '') || ' ' || COALESCE(reason, ''))
);

CREATE TABLE IF NOT EXISTS public.timeline (
  id TEXT PRIMARY KEY DEFAULT ('t' || floor(extract(epoch from now()) * 1000)::BIGINT::TEXT),
  case_id TEXT NOT NULL REFERENCES public.cases(id) ON DELETE CASCADE,
  event_text TEXT NOT NULL,
  event_text_urdu TEXT,
  event_type TEXT,
  created_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_timeline_case ON public.timeline(case_id);
CREATE INDEX IF NOT EXISTS idx_timeline_created_at ON public.timeline(created_at DESC);

CREATE TABLE IF NOT EXISTS public.shelters (
  id TEXT PRIMARY KEY,
  kind public.shelter_kind NOT NULL DEFAULT 'community',
  name TEXT NOT NULL,
  name_urdu TEXT,
  host TEXT NOT NULL,
  host_urdu TEXT,
  type public.shelter_type NOT NULL,
  location GEOMETRY(Point, 4326),
  area TEXT NOT NULL,
  area_urdu TEXT,
  capacity INTEGER NOT NULL CHECK (capacity > 0),
  occupied INTEGER NOT NULL DEFAULT 0 CHECK (occupied >= 0),
  free INTEGER GENERATED ALWAYS AS (GREATEST(capacity - occupied, 0)) STORED,
  amenities JSONB NOT NULL DEFAULT '[]'::JSONB,
  phone TEXT,
  verified BOOLEAN NOT NULL DEFAULT false,
  note TEXT,
  note_urdu TEXT,
  elevation_m NUMERIC(6,2),
  zone TEXT,
  facility_status TEXT NOT NULL DEFAULT 'active',
  beds_capacity INTEGER,
  beds_occupied INTEGER,
  women_capacity INTEGER,
  women_occupied INTEGER,
  medical_capacity INTEGER,
  medical_occupied INTEGER,
  oxygen_units INTEGER,
  supplies JSONB NOT NULL DEFAULT '{}'::JSONB,
  registered_by UUID REFERENCES public.profiles(id),
  last_updated_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_shelters_kind ON public.shelters(kind);
CREATE INDEX IF NOT EXISTS idx_shelters_type ON public.shelters(type);
CREATE INDEX IF NOT EXISTS idx_shelters_free ON public.shelters(free) WHERE free > 0;
CREATE INDEX IF NOT EXISTS idx_shelters_location ON public.shelters USING GIST(location);
CREATE INDEX IF NOT EXISTS idx_shelters_amenities ON public.shelters USING GIN(amenities);
CREATE INDEX IF NOT EXISTS idx_shelters_verified ON public.shelters(verified);

CREATE TABLE IF NOT EXISTS public.shelter_arrivals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  shelter_id TEXT NOT NULL REFERENCES public.shelters(id) ON DELETE CASCADE,
  case_id TEXT REFERENCES public.cases(id),
  arrived_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  party_size INTEGER NOT NULL DEFAULT 1 CHECK (party_size > 0),
  special_needs JSONB NOT NULL DEFAULT '[]'::JSONB,
  recorded_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_arrivals_shelter ON public.shelter_arrivals(shelter_id);
CREATE INDEX IF NOT EXISTS idx_arrivals_case ON public.shelter_arrivals(case_id);
CREATE INDEX IF NOT EXISTS idx_arrivals_time ON public.shelter_arrivals(arrived_at DESC);

CREATE TABLE IF NOT EXISTS public.shelter_waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  shelter_id TEXT NOT NULL REFERENCES public.shelters(id) ON DELETE CASCADE,
  requested_by UUID REFERENCES public.profiles(id),
  party_size INTEGER NOT NULL DEFAULT 1,
  note TEXT,
  status TEXT NOT NULL DEFAULT 'waiting',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.intake_queue (
  id TEXT PRIMARY KEY,
  channel public.communication_channel NOT NULL,
  channel_label TEXT,
  phone_number TEXT,
  message_id TEXT,
  raw_message TEXT NOT NULL,
  snippet TEXT,
  audio_url TEXT,
  audio_duration_seconds INTEGER,
  extracted_name TEXT,
  extracted_location TEXT,
  extracted_location_coords GEOMETRY(Point, 4326),
  extracted_needs JSONB,
  extraction_confidence NUMERIC(5,2),
  risk NUMERIC(5,2),
  priority_tier SMALLINT CHECK (priority_tier IN (1, 2, 3)),
  processed BOOLEAN NOT NULL DEFAULT false,
  processed_at TIMESTAMPTZ,
  processed_by UUID REFERENCES public.profiles(id),
  created_case_id TEXT REFERENCES public.cases(id),
  duplicate_of TEXT REFERENCES public.intake_queue(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_intake_processed ON public.intake_queue(processed, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_intake_risk ON public.intake_queue(risk DESC) WHERE NOT processed;
CREATE INDEX IF NOT EXISTS idx_intake_channel ON public.intake_queue(channel);
CREATE INDEX IF NOT EXISTS idx_intake_location ON public.intake_queue USING GIST(extracted_location_coords);

CREATE TABLE IF NOT EXISTS public.sync_queue (
  id TEXT PRIMARY KEY DEFAULT ('s' || floor(extract(epoch from now()) * 1000)::BIGINT::TEXT),
  volunteer_id UUID REFERENCES public.profiles(id),
  title TEXT NOT NULL,
  description TEXT,
  operation_type TEXT NOT NULL DEFAULT 'case_update',
  payload JSONB NOT NULL DEFAULT '{}'::JSONB,
  status public.sync_status NOT NULL DEFAULT 'queued',
  progress INTEGER NOT NULL DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  priority INTEGER NOT NULL DEFAULT 3,
  local_time TEXT,
  conflict_detected BOOLEAN NOT NULL DEFAULT false,
  conflict_resolution TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  synced_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_sync_volunteer ON public.sync_queue(volunteer_id);
CREATE INDEX IF NOT EXISTS idx_sync_status ON public.sync_queue(status, priority, created_at);

CREATE TABLE IF NOT EXISTS public.registrations (
  id TEXT PRIMARY KEY DEFAULT ('reg-' || floor(extract(epoch from now()) * 1000)::BIGINT::TEXT),
  registrar_id UUID REFERENCES public.profiles(id),
  name TEXT NOT NULL,
  name_urdu TEXT,
  age INTEGER,
  phone TEXT,
  location GEOMETRY(Point, 4326),
  location_text TEXT,
  area TEXT,
  household_size INTEGER NOT NULL DEFAULT 1,
  vulnerability_flags JSONB NOT NULL DEFAULT '[]'::JSONB,
  preferred_language public.preferred_language NOT NULL DEFAULT 'ur',
  hide_exact_location BOOLEAN NOT NULL DEFAULT false,
  approved BOOLEAN NOT NULL DEFAULT false,
  converted_to_case_id TEXT REFERENCES public.cases(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  approved_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_registrations_registrar ON public.registrations(registrar_id);
CREATE INDEX IF NOT EXISTS idx_registrations_approved ON public.registrations(approved);
CREATE INDEX IF NOT EXISTS idx_registrations_location ON public.registrations USING GIST(location);

CREATE TABLE IF NOT EXISTS public.notifications (
  id TEXT PRIMARY KEY DEFAULT ('n' || floor(extract(epoch from now()) * 1000)::BIGINT::TEXT),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  audience_role public.user_role,
  text TEXT NOT NULL,
  text_urdu TEXT,
  type TEXT NOT NULL DEFAULT 'info',
  related_case_id TEXT REFERENCES public.cases(id),
  related_assignment_id TEXT REFERENCES public.assignments(id),
  read BOOLEAN NOT NULL DEFAULT false,
  read_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_notifications_user ON public.notifications(user_id, read, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_notifications_unread ON public.notifications(user_id) WHERE NOT read;
CREATE INDEX IF NOT EXISTS idx_notifications_role ON public.notifications(audience_role) WHERE user_id IS NULL;

CREATE TABLE IF NOT EXISTS public.system_config (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_by UUID REFERENCES public.profiles(id),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.communication_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id TEXT REFERENCES public.cases(id),
  channel public.communication_channel NOT NULL,
  direction TEXT NOT NULL CHECK (direction IN ('inbound', 'outbound')),
  message_text TEXT,
  message_text_urdu TEXT,
  audio_url TEXT,
  response_code TEXT,
  sentiment_score NUMERIC(3,2),
  delivered BOOLEAN NOT NULL DEFAULT false,
  delivered_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_communication_case ON public.communication_log(case_id);
CREATE INDEX IF NOT EXISTS idx_communication_channel ON public.communication_log(channel);
CREATE INDEX IF NOT EXISTS idx_communication_created ON public.communication_log(created_at DESC);

CREATE TABLE IF NOT EXISTS public.field_tasks (
  id TEXT PRIMARY KEY DEFAULT ('ft-' || floor(extract(epoch from now()) * 1000)::BIGINT::TEXT),
  volunteer_id UUID REFERENCES public.profiles(id),
  case_id TEXT REFERENCES public.cases(id),
  assignment_id TEXT REFERENCES public.assignments(id),
  title TEXT,
  status public.field_task_status NOT NULL DEFAULT 'queued',
  eta_minutes INTEGER,
  sort_order INTEGER NOT NULL DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_field_tasks_volunteer ON public.field_tasks(volunteer_id, status);
CREATE INDEX IF NOT EXISTS idx_field_tasks_case ON public.field_tasks(case_id);

CREATE TABLE IF NOT EXISTS public.buddy_households (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  name_urdu TEXT,
  volunteer_id UUID REFERENCES public.profiles(id),
  location_text TEXT,
  location_text_urdu TEXT,
  flags TEXT[],
  phone_type public.phone_type NOT NULL DEFAULT 'none',
  notes TEXT,
  notes_urdu TEXT,
  last_outcome public.buddy_outcome NOT NULL DEFAULT 'pending',
  last_checked_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.buddy_checkins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  household_id TEXT NOT NULL REFERENCES public.buddy_households(id) ON DELETE CASCADE,
  volunteer_id UUID REFERENCES public.profiles(id),
  outcome public.buddy_outcome NOT NULL,
  notes TEXT,
  photo_path TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_buddy_volunteer ON public.buddy_households(volunteer_id);
CREATE INDEX IF NOT EXISTS idx_buddy_checkins_hh ON public.buddy_checkins(household_id, created_at DESC);

CREATE TABLE IF NOT EXISTS public.hazard_sensors (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  area public.geographic_area,
  location GEOMETRY(Point, 4326),
  metric TEXT NOT NULL DEFAULT 'water_level_m',
  reading NUMERIC(8,2),
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
