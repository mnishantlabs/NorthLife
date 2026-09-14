# NorthLife — Code Quality & Engineering Standards

> **Status:** Strictly Enforced for all AI Agents and Human Contributors.

---

## 1. JavaScript Standards

* **Native ES6+ Modules:** Always use `import` and `export`. Never use CommonJS (`require`) or global script leaks.
* **Variable Declaration:** Always use `const` by default. Use `let` only when re-assignment is required. Never use `var`.
* **Async Operations:** Always use `async`/`await` over raw promise `.then()/.catch()` chains for clean error stacks.
* **XSS Protection & HTML Injection:**
  * When injecting dynamic user text into innerHTML, always sanitize or use `textContent`:
  ```javascript
  // Safe helper
  export function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
  ```

---

## 2. CSS Standards

* **Pure Native CSS3:** No CSS preprocessors, no Tailwind classes, no utility class bloat.
* **BEM-like Class Naming:** Use readable semantic class names:
  * `.block-name` (e.g., `.water-card`)
  * `.block-name__element` (e.g., `.water-card__title`)
  * `.block-name--modifier` (e.g., `.water-card--completed`)
* **Design Token Usage:** Hardcoded hex values like `#388BFD` inside component CSS are strictly forbidden. Always use `var(--color-primary)`.

---

## 3. DOM & Performance Guidelines

* **Event Delegation:** Attach single event listeners on parent containers rather than attaching hundreds of listeners on repetitive list items.
* **Document Fragments:** When rendering multiple dynamic elements, use `document.createDocumentFragment()` or batch HTML template strings before inserting into the DOM to avoid multiple reflows.
