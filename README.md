# 🌿 NorthLife

> **Privacy-First, Offline-Capable Modular Personal Health & Life Operating System**

[![Native Web Standards](https://img.shields.io/badge/Native%20JS-Zero%20Dependencies-black.svg)](#architecture)
[![Storage](https://img.shields.io/badge/Storage-IndexedDB%20%2B%20Offline-black.svg)](#local-data-vault)
[![Design System](https://img.shields.io/badge/Design-Manrope%20%2B%20Tabler%20SVG-black.svg)](#design-system)

---

## 📖 Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Core Health Modules](#core-health-modules)
- [Documentation Directory](#documentation-directory)
  - [1. Product Specs](#1-product-specs)
  - [2. System Architecture](#2-system-architecture)
  - [3. Design System & UI/UX](#3-design-system--uiux)
  - [4. Development & Workflow](#4-development--workflow)
- [Keyboard Shortcuts (Power Users)](#keyboard-shortcuts-power-users)
- [Project Structure](#project-structure)
- [License](#license)

---

## 🔭 Overview

**NorthLife** is a personal health manager and daily living operating system designed for maximum privacy, speed, and clinical utility. It requires zero cloud accounts, zero build steps, and zero external npm dependencies—everything runs locally in your browser with persistent **IndexedDB** storage.

### 🌟 Key Highlights
- **100% Offline-First:** Double-click `index.html` to launch immediately.
- **Hero Metrics & Alive Dashboard:** Instant visibility over hydration, gut fiber, digestion, habit streaks, and medications.
- **Global Undo System:** Non-destructive 6-second undo toast for all deleted records.
- **Clinical Doctor Mode:** High-contrast A4 summary printable directly for physician consultations.
- **Global Search (`Ctrl+K`):** Instant search across meals, medicines, habits, bowel logs, and pages.

---

## 🚀 Quick Start

No installation or node setup required:

1. Clone the repository:
   ```bash
   git clone https://github.com/mnishantlabs/NorthLife.git
   ```
2. Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari, Arc, Brave):
   ```bash
   start index.html  # Windows
   open index.html   # macOS
   ```

---

## 🩺 Core Health Modules

| Module | Route | Highlights |
|---|---|---|
| **Overview** | `#dashboard` | Hero metrics (34px bold), daily holistic status chips, clickable navigation cards. |
| **Hydration** | `#water` | Presets (+200ml, +250ml, +500ml, +750ml), running totals, time-stamped timeline, inline edit & undo. |
| **Nutrition & Fiber** | `#diet` | Dietary fiber tracking, custom user-defined meal templates (1-click re-log), real-time search. |
| **Bowel Health** | `#bowel` | Clinical Bristol Stool Scale (Types 1–7), dynamic pain slider (0–10), straining & blood tags. |
| **Daily Habits** | `#habits` | Current & longest streaks (`🔥 Xd`), 7-day completion dot matrix, consistency analysis. |
| **Medications** | `#meds` | Daily schedule, dosage tracking, 'Due Today' and 'Taken Today ✓' toggles. |
| **Doctor Mode** | `#doctor-mode` | Date range selector (7/14/30 days/All), printable A4 report (`@media print`) with timestamped filename. |
| **Data Vault** | `#settings` | IndexedDB storage stats, last backup timestamp, full JSON backup export & restore. |

---

## 📚 Documentation Directory

All technical architecture, product specifications, and design guidelines are organized in the [`docs/`](docs/) folder:

### 1. Product Specs
- 📄 [**PRD.md**](docs/product/PRD.md) — Product Requirements Document, user persona, and feature roadmap.
- 📄 [**PROJECT_RULES.md**](docs/product/PROJECT_RULES.md) — 8 core product rules and UX constraints.
- 📄 [**TASKS.md**](docs/product/TASKS.md) — Development task breakdown and milestone matrix.
- 📄 [**MISSING_UX_CHECKLIST.md**](docs/product/MISSING_UX_CHECKLIST.md) — 8-point module CRUD & polish checklist.

### 2. System Architecture
- 📄 [**DATABASE_SCHEMA.md**](docs/architecture/DATABASE_SCHEMA.md) — IndexedDB object stores, keypaths, and data structures.
- 📄 [**STATE_MANAGEMENT.md**](docs/architecture/STATE_MANAGEMENT.md) — Reactive event cycle, optimistic UI updates, and undo manager.
- 📄 [**API_SYNC_SPEC.md**](docs/architecture/API_SYNC_SPEC.md) — Optional future cloud sync protocol (Supabase/REST).
- 📄 [**FOLDER_STRUCTURE.md**](docs/architecture/FOLDER_STRUCTURE.md) — Clean directory layout and file responsibilities.
- 📄 [**ERROR_HANDLING.md**](docs/architecture/ERROR_HANDLING.md) — Validation rules, boundary fallbacks, and recovery patterns.

### 3. Design System & UI/UX
- 📄 [**DESIGN_SYSTEM.md**](docs/design/DESIGN_SYSTEM.md) — Monochromatic ink palette, Manrope typography scale, and spacing tokens.
- 📄 [**UI_UX_DESIGN.md**](docs/design/UI_UX_DESIGN.md) — Layout hierarchy, accessibility (WCAG AA), and micro-interactions.
- 📄 [**COMPONENT_SPEC.md**](docs/design/COMPONENT_SPEC.md) — UI components: hero metrics, Bristol cards, habit dots, undo toasts.
- 📄 [**INTERACTION_SPEC.md**](docs/design/INTERACTION_SPEC.md) — State transitions, modal lifecycle, and drawer animations.

### 4. Development & Workflow
- 📄 [**CODING_STANDARDS.md**](docs/development/CODING_STANDARDS.md) — Zero-dependency native JS standards, performance, and naming conventions.
- 📄 [**GIT_WORKFLOW.md**](docs/development/GIT_WORKFLOW.md) — Semantic commit guidelines and branch management.

---

## ⌨️ Keyboard Shortcuts (Power Users)

| Shortcut | Action |
|---|---|
| <kbd>Ctrl</kbd> + <kbd>K</kbd> / <kbd>Cmd</kbd> + <kbd>K</kbd> | **Global Search:** Search meals, medicines, habits, bowel notes, and pages |
| <kbd>L</kbd> | **Quick Log Modal:** 1-click health logger |
| <kbd>W</kbd> | Navigate to **Hydration** Tracker |
| <kbd>M</kbd> | Navigate to **Nutrition & Meals** |
| <kbd>B</kbd> | Navigate to **Digestive Health (Bowel)** |
| <kbd>H</kbd> | Navigate to **Daily Habits** |
| <kbd>Esc</kbd> | Close active modal, search box, or drawer |

---

## 📁 Project Structure

```
NorthLife/
├── .gitignore
├── README.md                  # Project overview, TOC & guide
├── index.html                 # Root single-page application shell
├── assets/
│   ├── css/
│   │   ├── reset.css          # CSS reset & box sizing
│   │   ├── variables.css      # Design tokens (colors, typography, spacing)
│   │   ├── layout.css         # Sidebar, viewport, grid, mobile nav
│   │   └── components.css     # Hero metrics, Bristol cards, habit dots, toasts
│   └── js/
│       └── app.js             # Pure native JS engine (IndexedDB, Undo, Router, Views)
└── docs/
    ├── architecture/          # Database schema, state management, API sync
    ├── design/                # Design system, component specs, UI/UX specs
    ├── development/           # Coding standards, git workflow
    └── product/               # PRD, project rules, tasks, UX checklist
```

---

## 📄 License
MIT © 2026 NorthLife. Built for personal health autonomy.
