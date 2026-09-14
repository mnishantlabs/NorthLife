# NorthLife — Design System & Style Tokens Specification

> **Version:** 2.0.0 (Aesthetic Update)  
> **Visual Identity:** Warm Alabaster Minimalist Clinical Luxury  
> **Typography Requirement:** **Strictly Manrope** (utilizing Manrope Thin `font-weight: 300`, Light `300`, Regular `400`, Medium `500`, SemiBold `600`, Bold `700`, ExtraBold `800`).  
> **Rule:** Pure Native CSS3. No preprocessors, no Tailwind, no CSS-in-JS.

---

## 1. CSS Custom Properties (`assets/css/variables.css`)

```css
:root {
  /* =========================================================================
     TYPOGRAPHY TOKENS (Strictly Manrope)
     ========================================================================= */
  --font-family: 'Manrope', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;

  /* Font Weights (Focus on Thin & Light elegance) */
  --font-weight-thin: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;

  /* Typography Scale */
  --font-size-2xs: 0.625rem;  /* 10px */
  --font-size-xs: 0.6875rem;  /* 11px */
  --font-size-sm: 0.75rem;    /* 12px */
  --font-size-base: 0.8438rem;/* 13.5px */
  --font-size-md: 0.9375rem;  /* 15px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.625rem;  /* 26px */
  --font-size-3xl: 2rem;      /* 32px */

  --letter-spacing-tight: -0.025em;
  --letter-spacing-ultratight: -0.035em;
  --letter-spacing-wide: 0.05em;

  /* =========================================================================
     WARM ALABASTER & INK PALETTE (Light / Day Mode)
     ========================================================================= */
  --bg-app: #FBF9F5;               /* Warm Alabaster */
  --bg-surface: #FFFFFF;           /* Crisp Pure White Surface */
  --bg-surface-subtle: #F8F6F2;    /* Warm Tinted Card Elements */
  --bg-surface-elevated: #F1EFEA;  /* Hover / Pill Background */
  --bg-overlay: rgba(24, 24, 27, 0.45);

  --border-subtle: #ECE8E1;        /* Warm Brand Border */
  --border-dark: #DDD7CC;          /* Active / Hover Border */
  --border-focus: #18181B;

  --text-ink: #18181B;             /* Primary Ink Black */
  --text-muted: #71717A;           /* Secondary Slate */
  --text-subtle: #A1A1AA;          /* Light Slate Metadata */
  --text-disabled: #D4D4D8;
  --text-inverse: #FFFFFF;

  /* =========================================================================
     SIGNATURE PASTEL ACCENT PALETTE (High-Contrast Readable Accents)
     ========================================================================= */
  /* Blue (Hydration, Info, Telemetry) */
  --pastel-blue-bg: #EBF5FE;
  --pastel-blue-accent: #0284C7;
  --pastel-blue-border: rgba(2, 132, 199, 0.15);

  /* Butter (Nutrition, Calories, Energy) */
  --pastel-butter-bg: #FEF7DA;
  --pastel-butter-accent: #B45309;
  --pastel-butter-border: rgba(180, 83, 9, 0.15);

  /* Mint (Digestive Motility, Done States, Healthy Vitals) */
  --pastel-mint-bg: #E8F7F0;
  --pastel-mint-accent: #059669;
  --pastel-mint-border: rgba(5, 150, 105, 0.15);

  /* Lavender (Bowel Movement, Medications, Doctor Mode) */
  --pastel-lavender-bg: #F3E8FF;
  --pastel-lavender-accent: #7C3AED;
  --pastel-lavender-border: rgba(124, 58, 237, 0.15);

  /* Indigo (Sleep, Recovery, HRV) */
  --pastel-indigo-bg: #EEF2FF;
  --pastel-indigo-accent: #4F46E5;
  --pastel-indigo-border: rgba(79, 70, 229, 0.15);

  /* Coral (Quick Action, Flare-ups, Discomfort, Urgent Reminders) */
  --pastel-coral-bg: #FFECE5;
  --pastel-coral-accent: #C04624;
  --pastel-coral-border: rgba(192, 70, 36, 0.15);

  /* =========================================================================
     SPACING & RADIUS
     ========================================================================= */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-2-5: 0.625rem;/* 10px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-7: 1.75rem;   /* 28px */
  --space-8: 2rem;      /* 32px */

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* =========================================================================
     ELEVATION & SHADOWS (Soft Organic Shadows)
     ========================================================================= */
  --shadow-soft: 0 2px 8px -2px rgba(24, 24, 27, 0.04), 0 1px 3px rgba(24, 24, 27, 0.02);
  --shadow-soft-hover: 0 6px 16px -4px rgba(24, 24, 27, 0.07), 0 2px 5px -2px rgba(24, 24, 27, 0.03);
  --shadow-modal: 0 20px 30px -10px rgba(24, 24, 27, 0.12);

  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-smooth: 250ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* =========================================================================
   DARK THEME PALETTE OVERRIDES
   ========================================================================= */
[data-theme="dark"] {
  --bg-app: #0D1117;
  --bg-surface: #161B22;
  --bg-surface-subtle: #21262D;
  --bg-surface-elevated: #282E36;
  --bg-overlay: rgba(0, 0, 0, 0.8);

  --border-subtle: #30363D;
  --border-dark: #484F58;
  --border-focus: #F0F6FC;

  --text-ink: #F0F6FC;
  --text-muted: #8B949E;
  --text-subtle: #6E7681;
  --text-disabled: #484F58;
  --text-inverse: #0D1117;

  --pastel-blue-bg: rgba(2, 132, 199, 0.18);
  --pastel-blue-accent: #38BDF8;
  --pastel-blue-border: rgba(56, 189, 248, 0.25);

  --pastel-butter-bg: rgba(180, 83, 9, 0.18);
  --pastel-butter-accent: #FBBF24;
  --pastel-butter-border: rgba(251, 191, 36, 0.25);

  --pastel-mint-bg: rgba(5, 150, 105, 0.18);
  --pastel-mint-accent: #34D399;
  --pastel-mint-border: rgba(52, 211, 153, 0.25);

  --pastel-lavender-bg: rgba(124, 58, 237, 0.18);
  --pastel-lavender-accent: #C084FC;
  --pastel-lavender-border: rgba(192, 132, 252, 0.25);

  --pastel-indigo-bg: rgba(79, 70, 229, 0.18);
  --pastel-indigo-accent: #818CF8;
  --pastel-indigo-border: rgba(129, 140, 248, 0.25);

  --pastel-coral-bg: rgba(192, 70, 36, 0.18);
  --pastel-coral-accent: #FB7185;
  --pastel-coral-border: rgba(251, 113, 133, 0.25);

  --shadow-soft: 0 2px 8px -2px rgba(0, 0, 0, 0.4);
  --shadow-soft-hover: 0 6px 16px -4px rgba(0, 0, 0, 0.6);
}
```

---

## 2. Global Typography Rules (Manrope Thin Spec)

* **Primary Font:** Every text element inherits `font-family: 'Manrope', -apple-system, sans-serif !important;`.
* **Headings:**
  * Large Title (`H1`): `font-size: 1.75rem (28px)`, `font-weight: 800 (ExtraBold)`, `letter-spacing: -0.03em`.
  * Card Section Title (`H3`): `font-size: 1rem (16px)`, `font-weight: 700 (Bold)`.
  * Sub-headers / Telemetry tags: `font-size: 11px`, `font-weight: 600 (SemiBold)`, `text-transform: uppercase`, `letter-spacing: 0.05em`, `color: var(--text-subtle)`.
* **Body Text & Numbers:**
  * Metric Figures (e.g. `2,350`, `1,780`): `font-weight: 800`, `letter-spacing: -0.035em`.
  * Body Descriptions: `font-weight: 400 (Regular)` or `300 (Manrope Thin)` for ultra-clean, elegant medical clarity.
  * Meta pills / status: `font-size: 11px`, `font-weight: 600`.

---

## 3. Signature UI Components Pattern Guide

### 3.1 Pastel Pill Badges
```html
<span class="pill-badge pill-badge--mint">
  <span class="pill-dot pill-dot--mint"></span>
  Type 4 Ideal
</span>
```
```css
.pill-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 10px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-tight);
}
.pill-badge--blue {
  background-color: var(--pastel-blue-bg);
  color: var(--pastel-blue-accent);
  border: 1px solid var(--pastel-blue-border);
}
.pill-badge--mint {
  background-color: var(--pastel-mint-bg);
  color: var(--pastel-mint-accent);
  border: 1px solid var(--pastel-mint-border);
}
.pill-badge--coral {
  background-color: var(--pastel-coral-bg);
  color: var(--pastel-coral-accent);
  border: 1px solid var(--pastel-coral-border);
}
```

### 3.2 Quick Action Pills Ribbon
Horizontal scrollable list of rounded-full action pills with subtle hover lift (`transform: translateY(-2px)`).
