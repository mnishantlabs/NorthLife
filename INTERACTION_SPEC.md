# NorthLife — UI Interaction & Motion Specification

> **Target:** State transitions, hover feedback, loading skeletons, and interactive micro-animations.

---

## 1. Timing & Easing Curves

```css
:root {
  --ease-instant: cubic-bezier(0, 0, 0.2, 1);
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  --duration-fast: 150ms;   /* Button clicks, tab toggles, badge pop */
  --duration-normal: 250ms; /* Card hover, dropdowns, drawer slide */
  --duration-slow: 400ms;   /* Modal backdrop fade, view switch */
}
```

---

## 2. Interactive Element States

### 2.1 Buttons & Interactive Pills (`.quick-action-pill`, `.btn`)
* **Default State:** Clean background, subtle border (`#ECE8E1`), `shadow-soft`.
* **Hover State:**
  ```css
  transform: translateY(-2px);
  border-color: var(--border-dark);
  box-shadow: var(--shadow-soft-hover);
  transition: all var(--duration-fast) var(--ease-smooth);
  ```
* **Active / Click State:**
  ```css
  transform: translateY(0px) scale(0.98);
  transition: transform 50ms var(--ease-instant);
  ```
* **Focus Visible State:**
  ```css
  outline: 2px solid var(--text-ink);
  outline-offset: 2px;
  ```
* **Disabled State:**
  ```css
  opacity: 0.45;
  cursor: not-allowed;
  pointer-events: none;
  filter: grayscale(0.5);
  ```

---

### 2.2 Loading & Skeleton State (Zero Layout Shift)
When loading data from IndexedDB or remote sync:
```css
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton-loading {
  background: linear-gradient(
    90deg,
    var(--bg-surface-subtle) 25%,
    var(--bg-surface-elevated) 50%,
    var(--bg-surface-subtle) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out;
  border-radius: var(--radius-sm);
  color: transparent !important;
  pointer-events: none;
}
```

---

### 2.3 Toast Notification Motion
* **Enter:** Slide up from bottom with spring curve (`transform: translateY(0)`, `opacity: 1`, `300ms var(--ease-spring)`).
* **Exit:** Fade out (`transform: translateY(8px)`, `opacity: 0`, `200ms var(--ease-smooth)`).
