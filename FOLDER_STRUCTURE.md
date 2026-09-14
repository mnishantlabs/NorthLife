# NorthLife — Folder Architecture & File Organization

> **Architecture:** Clean Modular Vanilla ES6+ SPA  
> **Deployment Target:** GitHub Pages (`/` or `/NorthLife/`)

---

## 1. Complete Directory Tree

```
NorthLife/
├── index.html                      # Single Page Application HTML5 Shell
├── manifest.json                   # Progressive Web App (PWA) Manifest
├── sw.js                           # Service Worker (Offline Cache & Sync)
│
├── assets/
│   ├── css/
│   │   ├── reset.css               # Modern CSS Reset
│   │   ├── variables.css           # Design Tokens & Theme Variables
│   │   ├── layout.css              # App Shell, Header, Sidebar, Bottom Bar
│   │   ├── components.css          # Cards, Buttons, Inputs, Modals, Toasts
│   │   └── modules/                # Module-Specific CSS
│   │       ├── dashboard.css       # Dashboard widgets, metric cards
│   │       ├── bowel.css           # Bristol Stool Chart & trigger chips
│   │       ├── water.css           # Water animation & ring
│   │       ├── meds.css            # Medication checklist & pill badges
│   │       └── doctor-mode.css     # Clinical PDF export preview & print
│   │
│   ├── js/
│   │   ├── app.js                  # App Entrypoint & Bootstrap
│   │   ├── config.js               # Supabase URL/Anon Key & App Settings
│   │   │
│   │   ├── vendor/                 # 100% LOCAL LIBRARIES (Zero CDNs)
│   │   │   ├── supabase.js         # Vendored Supabase JS Client (v2.x)
│   │   │   ├── chart.min.js        # Vendored Chart.js (v4.x)
│   │   │   └── jspdf.min.js        # Vendored jsPDF (v2.x)
│   │   │
│   │   ├── core/                   # Core Operating System Engine
│   │   │   ├── state.js            # Reactive Central State & Pub/Sub
│   │   │   ├── idb.js              # IndexedDB Engine (12 Object Stores)
│   │   │   ├── sync.js             # Online/Offline Sync Manager
│   │   │   ├── auth.js             # Supabase Auth & Session Handling
│   │   │   ├── router.js           # Hash-based SPA View Router
│   │   │   ├── notifications.js    # Web Push, Audio Chimes & Alarms
│   │   │   ├── toast.js            # Reusable Toast Notification Broker
│   │   │   └── moduleRegistry.js   # LifeOS Dynamic Module Loader
│   │   │
│   │   └── modules/                # Pluggable Life Modules
│   │       ├── dashboard/          # Today's Overview Hub
│   │       │   └── dashboardModule.js
│   │       ├── bowel/              # Digestive & Bowel Health
│   │       │   └── bowelModule.js
│   │       ├── water/              # Hydration Tracker
│   │       │   └── waterModule.js
│   │       ├── diet/               # Nutrition & Fiber Planner
│   │       │   └── dietModule.js
│   │       ├── meds/               # Medications & Inventory
│   │       │   └── medsModule.js
│   │       ├── vitals/             # Vitals, Weight & BP
│   │       │   └── vitalsModule.js
│   │       ├── sleepMood/          # Sleep & Mood Journals
│   │       │   └── sleepMoodModule.js
│   │       ├── doctorMode/         # 30-90 Day PDF Exporter
│   │       │   └── doctorModeModule.js
│   │       └── settings/           # Theme, Backup, JSON Export/Import
│   │           └── settingsModule.js
│   │
│   ├── icons/                      # Local SVG Icon Sprites (No icon fonts)
│   │   └── sprite.svg
│   │
│   └── sounds/                     # Local Notification Sounds
│       └── chime.mp3
│
├── sql/
│   ├── 01_schema.sql               # Postgres Tables DDL
│   ├── 02_indices.sql              # Performance Indices
│   └── 03_rls_policies.sql         # Row Level Security Policies
│
├── docs/                           # Architecture & Design Documents
│   ├── PRD.md
│   ├── PROJECT_RULES.md
│   ├── UI_UX_DESIGN.md
│   ├── API_SYNC_SPEC.md
│   ├── TASKS.md
│   ├── DATABASE_SCHEMA.md
│   ├── DESIGN_SYSTEM.md
│   ├── COMPONENT_SPEC.md
│   ├── FOLDER_STRUCTURE.md
│   ├── STATE_MANAGEMENT.md
│   ├── ERROR_HANDLING.md
│   ├── CODING_STANDARDS.md
│   └── GIT_WORKFLOW.md
│
└── README.md                       # Repository Introduction & Setup Guide
```

---

## 2. Module Directory Convention

Every module in `assets/js/modules/[moduleName]/` must contain an exported module object adhering to the LifeOS contract:

```javascript
export const ModuleDefinition = {
  id: 'module_id',
  title: 'Module Display Title',
  icon: 'icon-name',
  category: 'health', // 'health' | 'life' | 'system'
  
  async init(context) { /* Initialize store / timers */ },
  async render(container, context) { /* Render DOM & attach listeners */ },
  async sync() { /* Sync module dirty records */ },
  destroy() { /* Teardown event listeners & intervals */ }
};
```
