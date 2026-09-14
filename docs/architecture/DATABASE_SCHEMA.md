# NorthLife — Database Schema & Security Specification (v1.0 Core)

> **Target:** Supabase PostgreSQL 15+  
> **Security:** Strict Row Level Security (RLS) with Single-Tenant Isolation (`auth.uid() = user_id`)  
> **Standard Record Rule:** Every table contains `created_at`, `updated_at`, `deleted_at` (soft delete), and `sync_status`.

---

## 1. Schema Entity Relationship Diagram (v1.0 Frozen Scope)

```
+---------------------------------------------------------------------------------+
|                                 auth.users (Supabase)                           |
+----------------------------------------+----------------------------------------+
                                         | 1:1
+----------------------------------------v----------------------------------------+
|                                      profiles                                   |
| (id [PK/FK], full_name, goals, theme_preference, created_at, updated_at)       |
+----+-------------+--------------+--------------+---------------+---------------+
     | 1:N         | 1:N          | 1:N          | 1:N           | 1:N
     v             v              v              v               v
+------------+ +------------+ +------------+ +-------------+ +---------------+
| bowel_logs | | water_logs | | diet_logs  | | medications | | habits & logs |
+------------+ +------------+ +------------+ +------+------+ +---------------+
                                                    | 1:N
                                                    v
                                             +------------------+
                                             | medication_logs  |
                                             +------------------+
```

---

## 2. Production SQL DDL Definitions

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =========================================================================
-- 1. PROFILES & USER PREFERENCES
-- =========================================================================
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT,
    date_of_birth DATE,
    gender TEXT,
    height_cm NUMERIC(5,2),
    target_weight_kg NUMERIC(5,2),
    daily_water_goal_ml INT DEFAULT 3000 CHECK (daily_water_goal_ml > 0),
    daily_calorie_goal INT DEFAULT 2000 CHECK (daily_calorie_goal > 0),
    daily_fiber_goal_g INT DEFAULT 35 CHECK (daily_fiber_goal_g > 0),
    theme_preference TEXT DEFAULT 'light' CHECK (theme_preference IN ('dark', 'light', 'system')),
    notification_settings JSONB DEFAULT '{"water_interval_mins": 60, "sound_enabled": true}'::JSONB,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    deleted_at TIMESTAMPTZ DEFAULT NULL,
    sync_status TEXT DEFAULT 'synced' CHECK (sync_status IN ('synced', 'pending', 'failed'))
);

-- =========================================================================
-- 2. DIGESTIVE & BOWEL HEALTH LOGS (Bristol Scale, Pain, Triggers)
-- =========================================================================
CREATE TABLE IF NOT EXISTS public.bowel_health_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    log_time TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    duration_minutes INT DEFAULT 5 CHECK (duration_minutes >= 0 AND duration_minutes <= 120),
    is_completed BOOLEAN DEFAULT TRUE,
    bristol_type INT NOT NULL CHECK (bristol_type BETWEEN 1 AND 7),
    pain_level INT NOT NULL DEFAULT 0 CHECK (pain_level BETWEEN 0 AND 10),
    pain_type TEXT CHECK (pain_type IN ('none', 'cramping', 'burning', 'sharp', 'rectal_pressure', 'bloating')),
    bleeding_observed BOOLEAN DEFAULT FALSE,
    bleeding_severity TEXT DEFAULT 'none' CHECK (bleeding_severity IN ('none', 'streaks', 'in_bowl', 'heavy')),
    triggers TEXT[] DEFAULT ARRAY[]::TEXT[],
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    deleted_at TIMESTAMPTZ DEFAULT NULL,
    sync_status TEXT DEFAULT 'synced' CHECK (sync_status IN ('synced', 'pending', 'failed'))
);

-- =========================================================================
-- 3. HYDRATION / WATER LOGS
-- =========================================================================
CREATE TABLE IF NOT EXISTS public.water_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    amount_ml INT NOT NULL CHECK (amount_ml > 0 AND amount_ml <= 5000),
    logged_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    deleted_at TIMESTAMPTZ DEFAULT NULL,
    sync_status TEXT DEFAULT 'synced' CHECK (sync_status IN ('synced', 'pending', 'failed'))
);

-- =========================================================================
-- 4. DIET & NUTRITION LOGS (With Fiber Focus)
-- =========================================================================
CREATE TABLE IF NOT EXISTS public.diet_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    meal_type TEXT NOT NULL CHECK (meal_type IN ('breakfast', 'lunch', 'dinner', 'snack')),
    food_items TEXT NOT NULL,
    calories INT DEFAULT 0 CHECK (calories >= 0),
    protein_g NUMERIC(5,1) DEFAULT 0 CHECK (protein_g >= 0),
    carbs_g NUMERIC(5,1) DEFAULT 0 CHECK (carbs_g >= 0),
    fats_g NUMERIC(5,1) DEFAULT 0 CHECK (fats_g >= 0),
    fiber_g NUMERIC(5,1) DEFAULT 0 CHECK (fiber_g >= 0),
    is_spicy BOOLEAN DEFAULT FALSE,
    notes TEXT,
    logged_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    deleted_at TIMESTAMPTZ DEFAULT NULL,
    sync_status TEXT DEFAULT 'synced' CHECK (sync_status IN ('synced', 'pending', 'failed'))
);

-- =========================================================================
-- 5. MEDICATIONS & ADHERENCE LOGS
-- =========================================================================
CREATE TABLE IF NOT EXISTS public.medications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    dosage TEXT NOT NULL,
    frequency TEXT NOT NULL CHECK (frequency IN ('once_daily', 'twice_daily', 'thrice_daily', 'as_needed', 'weekly')),
    scheduled_times TIME[] DEFAULT ARRAY[]::TIME[],
    stock_count INT DEFAULT 0 CHECK (stock_count >= 0),
    low_stock_threshold INT DEFAULT 5 CHECK (low_stock_threshold >= 0),
    instructions TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    deleted_at TIMESTAMPTZ DEFAULT NULL,
    sync_status TEXT DEFAULT 'synced' CHECK (sync_status IN ('synced', 'pending', 'failed'))
);

CREATE TABLE IF NOT EXISTS public.medication_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    medication_id UUID NOT NULL REFERENCES public.medications(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    scheduled_time TIME,
    taken_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    status TEXT NOT NULL DEFAULT 'taken' CHECK (status IN ('taken', 'skipped', 'delayed')),
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    deleted_at TIMESTAMPTZ DEFAULT NULL,
    sync_status TEXT DEFAULT 'synced' CHECK (sync_status IN ('synced', 'pending', 'failed'))
);

-- =========================================================================
-- 6. HABITS & DAILY ROUTINES
-- =========================================================================
CREATE TABLE IF NOT EXISTS public.habits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    category TEXT DEFAULT 'general',
    target_days_per_week INT DEFAULT 7 CHECK (target_days_per_week BETWEEN 1 AND 7),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    deleted_at TIMESTAMPTZ DEFAULT NULL,
    sync_status TEXT DEFAULT 'synced' CHECK (sync_status IN ('synced', 'pending', 'failed'))
);

CREATE TABLE IF NOT EXISTS public.habit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    habit_id UUID NOT NULL REFERENCES public.habits(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    completed_date DATE NOT NULL DEFAULT CURRENT_DATE,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    deleted_at TIMESTAMPTZ DEFAULT NULL,
    sync_status TEXT DEFAULT 'synced' CHECK (sync_status IN ('synced', 'pending', 'failed')),
    CONSTRAINT unique_habit_day UNIQUE (habit_id, completed_date)
);

-- =========================================================================
-- 7. VITALS & WEIGHT TRENDS (For Doctor Mode & Charts)
-- =========================================================================
CREATE TABLE IF NOT EXISTS public.vitals_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    weight_kg NUMERIC(5,2) CHECK (weight_kg > 0 AND weight_kg < 500),
    systolic_bp INT CHECK (systolic_bp BETWEEN 50 AND 300),
    diastolic_bp INT CHECK (diastolic_bp BETWEEN 30 AND 200),
    pulse_bpm INT CHECK (pulse_bpm BETWEEN 30 AND 250),
    notes TEXT,
    logged_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    deleted_at TIMESTAMPTZ DEFAULT NULL,
    sync_status TEXT DEFAULT 'synced' CHECK (sync_status IN ('synced', 'pending', 'failed'))
);
```

---

## 3. Row Level Security (RLS) Policies

```sql
-- 1. Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bowel_health_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.water_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.diet_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medication_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.habits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.habit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vitals_logs ENABLE ROW LEVEL SECURITY;

-- 2. Define Granular Policies (Users access only their own rows)
DO $$
DECLARE
    tbl text;
    tables text[] := ARRAY[
        'bowel_health_logs', 'water_logs', 'diet_logs',
        'medications', 'medication_logs', 'habits', 'habit_logs', 'vitals_logs'
    ];
BEGIN
    EXECUTE 'CREATE POLICY "Users can manage own profile" ON public.profiles FOR ALL USING (auth.uid() = id) WITH CHECK (auth.uid() = id);';
    
    FOREACH tbl IN ARRAY tables LOOP
        EXECUTE format('CREATE POLICY "Users can manage own %I" ON public.%I FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);', tbl, tbl);
    END LOOP;
END $$;
```
