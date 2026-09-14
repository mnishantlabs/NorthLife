# NorthLife — Sequential Development Roadmap (v1.0 Core Frozen Scope)

> **Scope Lock:** v1.0 implements ONLY: Dashboard, Bowel Health, Water, Diet (Fiber), Habits, Medications, Doctor Mode, Settings. Future modules are parked.

---

## Phase 1: Architecture & Engineering Blueprints (COMPLETED ✓)
- [x] **Task 1.1:** Finalize Product Requirements Document (`PRD.md`) with v1.0 focused scope.
- [x] **Task 1.2:** Establish Strict AI Guidelines & Safety Boundaries (`PROJECT_RULES.md`).
- [x] **Task 1.3:** Define UI/UX Design System & Layout (`UI_UX_DESIGN.md`).
- [x] **Task 1.4:** Define Design System & Manrope Thin Tokens (`DESIGN_SYSTEM.md`).
- [x] **Task 1.5:** Define Interaction & State Motion Spec (`INTERACTION_SPEC.md`).
- [x] **Task 1.6:** Define Database Schema with Standard Timestamp/Sync Fields (`DATABASE_SCHEMA.md`).
- [x] **Task 1.7:** Define Component Specifications (`COMPONENT_SPEC.md`).
- [x] **Task 1.8:** Define API Sync & State Management (`API_SYNC_SPEC.md`, `STATE_MANAGEMENT.md`).

---

## Phase 2: Core Shell & Offline PWA Engine (In Progress)
- [x] **Task 2.1:** Create `index.html` semantic app shell, sidebar navigation, header, and main container.
- [x] **Task 2.2:** Implement Pure CSS3 styling:
  - `assets/css/reset.css` (Clean reset)
  - `assets/css/variables.css` (Warm Alabaster, Ink, Pastels, Manrope Thin tokens)
  - `assets/css/layout.css` (240px sidebar, header, responsive grid)
  - `assets/css/components.css` (Pills, cards, buttons, modals, toasts, skeletons)
- [ ] **Task 2.3:** Vendor local standalone JS libraries (`assets/js/vendor/`):
  - `supabase.js` (v2 standalone bundle)
  - `chart.min.js` (Chart.js standalone)
  - `jspdf.min.js` (jsPDF standalone)
- [ ] **Task 2.4:** Build Local IndexedDB Engine (`assets/js/core/idb.js`) with 8 core stores and standard metadata fields (`created_at`, `updated_at`, `deleted_at`, `sync_status`).
- [ ] **Task 2.5:** Implement PWA Service Worker & Manifest (`sw.js`, `manifest.json`) for 100% offline static caching.
- [x] **Task 2.6:** Implement SPA Hash Router & Module Registry (`assets/js/core/router.js`).
- [ ] **Task 2.7:** Implement Supabase Auth & Session Manager (`assets/js/core/auth.js`).

---

## Phase 3: v1.0 Core Feature Modules Implementation (COMPLETED ✓)
- [x] **Task 3.1:** Implement **Executive Dashboard** (`dashboard.js`):
  - Hydration Donut SVG ring widget (73%).
  - Segmented Macro Pill bar (Carbs/Protein/Fats/Fiber).
  - Bowel quick status pill.
  - Medication checklist.
  - Quick action ribbon (`+250ml Water`, `+Bowel`, `+Meal`, `✓Meds`).
- [x] **Task 3.2:** Implement **Bowel & Digestive Health Module** (`bowel.js`):
  - Bristol Stool Chart visual selector (`T1` to `T7`).
  - Pain & Discomfort slider (0-10) with dynamic severity coloring.
  - Bleeding toggle & severity picker.
  - Lifestyle triggers multi-select chips (Spicy, sitting >2h, heavy lifting, low water).
- [x] **Task 3.3:** Implement **Hydration & Smart Reminders Module** (`water.js`):
  - Quick log buttons (`+150ml`, `+250ml`, `+500ml`, `+1000ml`).
  - Web Audio synthesized chime and timer broker.
- [x] **Task 3.4:** Implement **Diet & Fiber Planner Module** (`diet.js`):
  - Meal entries (Breakfast/Lunch/Dinner/Snack) with special focus on daily fiber target.
- [x] **Task 3.5:** Implement **Habits & Routine Tracker** (`habits.js`):
  - Daily checklist, streaks calculation, completion stats.
- [x] **Task 3.6:** Implement **Medication & Adherence Protocol** (`meds.js`):
  - Timed morning/noon/night slots, "Action Due" highlight, low-stock warnings.
- [x] **Task 3.7:** Implement **"Doctor Mode" & Clinical PDF Exporter** (`doctorMode.js`):
  - 30 / 60 / 90-day clinical report compiler.
  - Bristol distribution, pain/bleeding frequency, trigger correlations, medication adherence.
  - One-click printable PDF generation with legal medical disclaimer.
- [x] **Task 3.8:** Implement **Settings & Data Vault** (`settings.js`):
  - Theme switcher (Dark/Light).
  - Full JSON export and restore.
  - One-click PDF generation with legal medical disclaimer.
- [ ] **Task 3.8:** Implement **Settings & Data Vault** (`settingsModule.js`):
  - Theme switcher (Dark/Light).
  - Full JSON export and restore.

---

## Phase 4: Verification, Sync Testing & Deployment
- [ ] **Task 4.1:** Verify Offline-First Functionality (Log offline -> Check IndexedDB -> Reconnect -> Check Supabase sync).
- [ ] **Task 4.2:** Run UI Accessibility & Responsiveness audit across mobile and desktop.
- [ ] **Task 4.3:** Prepare `README.md` and deploy to GitHub Pages.
