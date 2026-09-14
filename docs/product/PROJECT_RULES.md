# NorthLife — Project Rules & AI Coding Guidelines

> **Status:** Active & Enforced  
> **Target Scope:** All Core Systems, Modules, Services, Styles, and Database Interactions.

---

## 1. Absolute Golden Rules (Zero Tolerance Violations)

1. **Pure Vanilla Web Tech Only:**
   * **HTML5:** Semantic, accessible markup (`<main>`, `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`).
   * **CSS3:** Native Custom Properties (CSS Variables), Flexbox, CSS Grid, Media Queries. **STRICTLY NO Tailwind CSS, Bootstrap, SASS, or CSS-in-JS.**
   * **JavaScript:** Native Vanilla ES6+ Modules (`import`/`export`), standard DOM APIs, async/await. **STRICTLY NO React, Vue, Angular, Svelte, or runtime frameworks.**
2. **Zero External CDNs (100% Self-Contained):**
   * All vendor libraries (Supabase JS, Chart.js, jsPDF), fonts, SVG icon sets, and sound files **MUST** be committed locally in the `assets/` folder.
   * Never inject external `<script src="https://cdn...">` or `<link href="https://fonts.googleapis.com...">`.
3. **Offline-First via IndexedDB:**
   * Any data write operation **MUST** write to local IndexedDB first for instant UI response (`< 5ms`), then queue for background sync with Supabase.
   * The app **MUST** open, navigate, log data, and display history even when completely disconnected from the internet.
4. **Strict AI Agent Boundaries (Scope Lock & Safety):**
   * **Never Rename Existing APIs:** Do NOT rename functions, exported module methods, database columns, or event names once defined.
   * **Touch Only Assigned Scope:** Never edit, reformat, or "refactor" unrelated files or modules outside the current task scope.
   * **One Focused Micro-Task:** Each change must implement exactly one feature or fix from `TASKS.md`. No spontaneous feature additions.
   * **No Placeholder Code:** Never replace functioning code with `// TODO` or simplified dummy mocks.
5. **Standard Record Metadata (Sync & Soft Delete):**
   * Every IndexedDB and Supabase table record **MUST** include:
     * `created_at` (ISO timestamp)
     * `updated_at` (ISO timestamp)
     * `deleted_at` (ISO timestamp or null — soft delete support)
     * `sync_status` (`'synced'` | `'pending'` | `'failed'`)
6. **Privacy & Security First:**
   * Supabase Row Level Security (RLS) enabled on 100% of tables (`auth.uid() = user_id`).
   * No hardcoded API secret keys in client-side code (only the public Supabase Anon Key).

---

## 2. Design System & Styling Rules

* **Typography (Strictly Manrope):**
  * The entire UI **MUST** use `font-family: 'Manrope', -apple-system, sans-serif !important;`.
  * Emphasize **Manrope Thin (`font-weight: 300`)**, Regular (`400`), and Medium (`500`) for body and descriptive text, with ExtraBold (`800`) with negative letter-spacing (`-0.03em`) for high-impact metric numbers.
* **Warm Alabaster & Pastel Palette:**
  * Background canvas: Warm Alabaster (`#FBF9F5`) with crisp white (`#FFFFFF`) card surfaces and fine warm borders (`#ECE8E1`).
  * Text: High-contrast Deep Ink (`#18181B`) and Slate Muted (`#71717A`).
  * Signature Pastel Accents: Blue (Hydration), Butter (Nutrition/Energy), Mint (Gut/Motility/Done), Lavender (Meds/Sleep), Indigo (HRV/Recovery), Coral (Alerts/Discomfort).
* **Design Tokens:** All colors, radiuses, shadows, transitions, and typography **MUST** be defined in `assets/css/variables.css` as CSS Custom Properties.
* **Themes:** Full Dark Mode and Light Mode support out-of-the-box using `data-theme="dark"` and `data-theme="light"` on the root `<html>` element.
* **Mobile-First & Responsive:**
  * Base styling targets mobile screens (`320px` to `480px`).
  * Progressive enhancement via media queries: Tablet (`768px+`), Desktop (`1024px+`), Large Displays (`1440px+`).
* **Touch Targets & Ergonomics:**
  * Minimum touch target size: `44px x 44px` for all interactive buttons, inputs, and chips.
  * Bottom navigation / thumb-zone friendly quick action bar on mobile screens.
* **Accessibility (a11y):**
  * Proper ARIA labels (`aria-expanded`, `aria-hidden`, `aria-label`, `role`).
  * Keyboard navigation support (visible `:focus-visible` rings, `Tab`/`Escape`/`Enter` keyboard traps on modals).
  * Minimum color contrast ratio: 4.5:1 (WCAG AA compliance).

---

## 3. JavaScript & Code Quality Rules

* **Strict Mode & ES Modules:** All JavaScript files must use native ES modules (`<script type="module">`).
* **Single Responsibility:** Keep functions small (`< 40 lines` where feasible), pure when possible, and well-named.
* **State Management:**
  * Centralized App State in `assets/js/core/state.js` using a simple Pub/Sub / EventTarget listener pattern.
  * No global variable pollution on `window.*` (except debugging tools in dev mode).
* **DOM Manipulation:**
  * Use semantic DOM creation or clean Template Literals with proper XSS sanitization (never inject unsanitized user HTML).
  * Use Event Delegation on parent containers instead of attaching hundreds of separate listeners.
* **Error Handling:**
  * Wrap all async I/O and IndexedDB / Supabase network calls in `try...catch` blocks.
  * Display user-friendly Toast notifications via `assets/js/core/toast.js` instead of browser `alert()`.

---

## 4. Medical Tracking & Legal Integrity

* **Tracking & Trends Only:** Never use diagnostic claims, medical prescriptions, or algorithmic medical advice in UI copy.
* **Doctor Mode Disclaimer:** Every generated clinical PDF or export summary **MUST** include the explicit medical disclaimer:
  > *"This report is a patient self-reported behavioral and symptom log for clinical discussion with a licensed healthcare provider only. It does not provide medical diagnosis or therapeutic claims."*
* **Bristol Stool Chart:** Use standardized Type 1 through Type 7 clinical definitions with supportive visual indicators.

---

## 5. File & Directory Naming Standards

* **File Extensions:** Lowercase with standard extensions (`.js`, `.css`, `.html`, `.svg`, `.sql`, `.md`).
* **Naming Conventions:**
  * CSS files: `kebab-case.css` (e.g., `variables.css`, `doctor-mode.css`).
  * JS Modules & Core Services: `camelCase.js` (e.g., `bowelHealth.js`, `syncEngine.js`, `authManager.js`).
  * Documentation & SQL: `UPPERCASE.md` or `snake_case.sql`.
