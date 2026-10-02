-- ============================================================================
-- ScrubIn US — Supabase PostgreSQL Schema (Idea A: Cloud Auth + Hours Sync)
-- ============================================================================
-- Run this in your Supabase SQL Editor if you connect an external Supabase DB:

CREATE TABLE IF NOT EXISTS public.student_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  pre_health_track TEXT DEFAULT 'Pre-Med (MD / DO)',
  target_cycle TEXT DEFAULT '2028',
  saved_ids JSONB DEFAULT '[]'::jsonb,
  pipeline_status JSONB DEFAULT '{}'::jsonb,
  checklist_done JSONB DEFAULT '[]'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.clinical_hours_log (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  shift_date DATE NOT NULL,
  organization TEXT NOT NULL,
  category TEXT NOT NULL,
  hours NUMERIC(5,1) NOT NULL,
  supervisor TEXT,
  reflection TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.student_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.clinical_hours_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can manage own profile"
  ON public.student_profiles
  FOR ALL
  USING (auth.uid() = id);

CREATE POLICY "Students can manage own clinical hours"
  ON public.clinical_hours_log
  FOR ALL
  USING (auth.uid() = user_id);
