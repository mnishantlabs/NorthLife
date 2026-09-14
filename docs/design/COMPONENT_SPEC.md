# NorthLife — UI Component Specification

> **Version:** 2.0.0 (Visual Component Spec)  
> **Typography:** **Strictly Manrope** (`font-family: 'Manrope', -apple-system, sans-serif !important;`)  
> **Rule:** Every component must be accessible (a11y), responsive, and self-contained with pure CSS/JS.

---

## 1. Component Index

1. **Hydration Donut SVG Widget** (`.widget-hydration`)
2. **Segmented Macro Pill Bar** (`.macro-segmented-bar`)
3. **Bristol Stool Scale 7-Tab Selector** (`.bristol-tab-strip`)
4. **Habit Loop Checklist Rows** (`.habit-item`)
5. **Medication State Cards (Taken, Due, Upcoming)** (`.med-card`)
6. **Mood 5-Emoji State Selector** (`.mood-selector-strip`)
7. **Smooth SVG Biometric Trend Line Chart** (`.telemetry-chart-svg`)
8. **Doctor Mode PDF Preview Box** (`.doctor-pdf-card`)
9. **Quick-Action Ribbon Pills** (`.quick-action-pill`)

---

## 2. Component Markup & Styling Specifications

### 2.1 Hydration Donut SVG Widget
```html
<div class="hydration-donut-container">
  <div class="hydration-numbers">
    <div class="metric-value-row">
      <span class="metric-large">2,350</span>
      <span class="metric-unit">/ 3,200 ml</span>
    </div>
    <p class="pace-indicator">
      <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
      <span>On pace — 450ml before 18:00</span>
    </p>
  </div>
  
  <!-- Donut Ring SVG -->
  <div class="donut-svg-wrapper">
    <svg class="donut-svg" viewBox="0 0 36 36">
      <path class="donut-track" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F1EFEA" stroke-width="3.5"></path>
      <path class="donut-progress" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#0284C7" stroke-dasharray="73, 100" stroke-linecap="round" stroke-width="3.5"></path>
    </svg>
    <span class="donut-center-text">73%</span>
  </div>
</div>
```

---

### 2.2 Segmented Macro Pill Bar
```html
<div class="macro-bar-widget">
  <div class="macro-track">
    <div class="macro-segment macro-segment--carbs" style="width: 46%;"></div>
    <div class="macro-segment macro-segment--protein" style="width: 34%;"></div>
    <div class="macro-segment macro-segment--fats" style="width: 20%;"></div>
  </div>
  <div class="macro-legend-grid">
    <div class="macro-legend-col">
      <span class="macro-label">Carbs</span>
      <span class="macro-stat">185g <span class="macro-stat-total">/230g</span></span>
    </div>
    <div class="macro-legend-col">
      <span class="macro-label">Protein</span>
      <span class="macro-stat">112g <span class="macro-stat-total">/140g</span></span>
    </div>
    <div class="macro-legend-col">
      <span class="macro-label">Fats</span>
      <span class="macro-stat">54g <span class="macro-stat-total">/65g</span></span>
    </div>
  </div>
</div>
```

---

### 2.3 Bristol Stool Scale 7-Tab Selector
```html
<div class="bristol-strip-wrapper">
  <span class="field-label-tag">Bristol Stool Scale</span>
  <div class="bristol-pill-grid" role="radiogroup" aria-label="Bristol Stool Scale">
    <button type="button" role="radio" aria-checked="false" class="bristol-tab">T1</button>
    <button type="button" role="radio" aria-checked="false" class="bristol-tab">T2</button>
    <button type="button" role="radio" aria-checked="false" class="bristol-tab">T3</button>
    <button type="button" role="radio" aria-checked="true" class="bristol-tab bristol-tab--active">T4</button>
    <button type="button" role="radio" aria-checked="false" class="bristol-tab">T5</button>
    <button type="button" role="radio" aria-checked="false" class="bristol-tab">T6</button>
    <button type="button" role="radio" aria-checked="false" class="bristol-tab">T7</button>
  </div>
</div>
```

---

### 2.4 Medication State Cards
```html
<!-- 1. Done State -->
<div class="med-item med-item--done">
  <div class="med-item-left">
    <span class="med-check-badge">✓</span>
    <div class="med-text-stack">
      <span class="med-name med-name--struck">Probiotic Complex + D3</span>
      <span class="med-meta">Taken with breakfast • 08:30 AM</span>
    </div>
  </div>
  <span class="med-status-tag">Done</span>
</div>

<!-- 2. Action Due State (Pastel Coral highlight) -->
<div class="med-item med-item--due">
  <div class="med-item-left">
    <span class="med-alert-badge">!</span>
    <div class="med-text-stack">
      <span class="med-name">Soluble Psyllium Husk</span>
      <span class="med-meta med-meta--alert">Due at 02:00 PM</span>
    </div>
  </div>
  <button class="btn-take-now">Take Now</button>
</div>
```

---

### 2.5 Mood 5-Emoji Selector
```html
<div class="mood-selector-container">
  <div class="mood-selector-grid" role="radiogroup" aria-label="Mood State">
    <button class="mood-tile" type="button" aria-checked="false">
      <span class="mood-emoji">😫</span>
      <span class="mood-name">Stressed</span>
    </button>
    <button class="mood-tile" type="button" aria-checked="false">
      <span class="mood-emoji">😐</span>
      <span class="mood-name">Neutral</span>
    </button>
    <button class="mood-tile" type="button" aria-checked="false">
      <span class="mood-emoji">🙂</span>
      <span class="mood-name">Good</span>
    </button>
    <button class="mood-tile" type="button" aria-checked="false">
      <span class="mood-emoji">😄</span>
      <span class="mood-name">Great</span>
    </button>
    <button class="mood-tile mood-tile--active" type="button" aria-checked="true">
      <span class="mood-emoji">🧘</span>
      <span class="mood-name">Serene</span>
    </button>
  </div>
</div>
```
