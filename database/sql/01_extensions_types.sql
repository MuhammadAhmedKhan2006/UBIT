-- 01 EXTENSIONS + ENUMS
-- Safe to re-run. Duplicate types are ignored.

CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS pgcrypto;

DO $$ BEGIN CREATE TYPE public.user_role AS ENUM (
  'coordinator', 'volunteer', 'registrar', 'shelter', 'viewer'
); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN CREATE TYPE public.case_status AS ENUM (
  'pending', 'accepted', 'dispatched', 'overridden', 'safe', 'rescued', 'sheltered'
); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN CREATE TYPE public.priority_tier AS ENUM (
  'tier_1', 'tier_2', 'tier_3'
); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN CREATE TYPE public.alert_level AS ENUM (
  'advisory', 'warning', 'evacuation'
); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN CREATE TYPE public.asset_type AS ENUM (
  'boat', 'ambulance', 'team'
); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN CREATE TYPE public.assignment_status AS ENUM (
  'queued', 'approved', 'dispatched', 'completed', 'cancelled'
); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN CREATE TYPE public.shelter_type AS ENUM (
  'mosque', 'school', 'home', 'hall', 'madrassa'
); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN CREATE TYPE public.shelter_kind AS ENUM (
  'community', 'official'
); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN CREATE TYPE public.communication_channel AS ENUM (
  'sms', 'whatsapp', 'voice', 'telegram', 'mesh', 'pdma_1129'
); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN CREATE TYPE public.phone_type AS ENUM (
  'smartphone', 'basic', 'none'
); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN CREATE TYPE public.geographic_area AS ENUM (
  'lyari', 'malir', 'korangi', 'keamari', 'gulshan', 'other'
); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN CREATE TYPE public.audit_action_type AS ENUM (
  'accept', 'override', 'safe', 'dispatch', 'assign',
  'elevation', 'reassignment', 'registration', 'sync', 'fairness'
); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN CREATE TYPE public.sync_status AS ENUM (
  'queued', 'syncing', 'synced', 'failed'
); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN CREATE TYPE public.field_task_status AS ENUM (
  'queued', 'in_progress', 'completed', 'blocked'
); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN CREATE TYPE public.buddy_outcome AS ENUM (
  'safe', 'needs_help', 'evacuate', 'not_home', 'pending'
); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN CREATE TYPE public.preferred_language AS ENUM (
  'en', 'ur'
); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
