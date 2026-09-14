# 📋 NorthLife — Missing UX & Polish Checklist

> **Core Philosophy:** "Design consistency over novelty. Focus 90% on polish, safety nets, and seamless CRUD, not weekly redesigns."

---

## 🎯 The 8 Golden Questions for Every Module

Before marking any module or feature as "Done", test it against these 8 core principles:

| # | Principle | Core Question | UX Expectation / Implementation |
|---|---|---|---|
| **1** | **Create** | *नया डाटा ऐड कर सकता हूँ?* | Fast inline entry form or modal with clear default values and autofocus. |
| **2** | **Read** | *बाद में देख सकता हूँ?* | Clean list/card view, formatted timestamps, human-readable units. |
| **3** | **Edit / Update** | *गलती हुई तो सुधार सकता हूँ?* | Inline edit or prefilled modal; update reflected instantly without full page reload. |
| **4** | **Delete** | *हटा सकता हूँ?* | Clear delete action with non-destructive confirmation or instant undo snackbar. |
| **5** | **Undo** | *गलती से डिलीट हुआ तो वापस ला सकता हूँ?* | 6-second toast notification with `[ Undo ]` action restoring the item to IndexedDB. |
| **6** | **History / Audit** | *कब क्या चेंज हुआ, दिखेगा?* | Log timestamp (`created_at`, `updated_at`), daily timeline, or log stream. |
| **7** | **Validation** | *गलत value एंटर तो नहीं हो सकती?* | Positive numbers only for water/grams, time constraints, required fields, sanitization. |
| **8** | **Empty State** | *डेटा ही नहीं है तो UI कैसा दिखेगा?* | Calm, helpful illustration or icon + 1-sentence prompt + 1 primary CTA button. |

---

## 🔍 Module-by-Module UX Audit & Polish Matrix

### 1. 💧 Water Tracker (`#water`)
- [x] **Create:** Quick increment buttons (`+250ml`, `+500ml`, `+750ml`) + custom input.
- [x] **Read:** Daily progress bar, percentage towards goal, today's log list.
- [ ] **Edit:** Ability to tap a logged glass/cup to edit the volume or time.
- [x] **Delete:** Single click delete per log entry.
- [ ] **Undo:** Toast with `[ Undo ]` action to restore accidentally deleted water logs.
- [x] **Validation:** Max limit safeguard (e.g., alert if single entry > 3000ml or negative value).
- [x] **Empty State:** "No water logged today. Tap a quick-add button to start."

---

### 2. 🥗 Nutrition & Diet (`#diet`)
- [x] **Create:** Log meal (Meal type: Breakfast/Lunch/Dinner/Snack, Meal name, Fiber in grams).
- [x] **Read:** Daily total fiber count vs recommended target (e.g., 30g/day), meal breakdown.
- [ ] **Edit:** Tap meal item to edit description, meal type, or fiber amount.
- [x] **Delete:** Trash icon with instant state removal.
- [ ] **Undo:** Quick recovery of deleted meal logs.
- [ ] **Search / Filter:** Filter logs by meal type or search meal name.
- [x] **Validation:** Non-empty meal title, fiber >= 0g.
- [x] **Empty State:** "No meals logged today. Log breakfast or fiber to start tracking."

---

### 3. 🩺 Bowel & Digestive Care (`#bowel`)
- [x] **Create:** Bristol Stool Chart picker (Types 1–7), pain scale slider (0–10), straining toggle, blood toggle, notes.
- [x] **Read:** Visual Bristol score card, timestamp, warning tags if blood/severe pain.
- [ ] **Edit:** Edit an existing bowel log entry to update Bristol type or notes.
- [x] **Delete:** Delete faulty or test entries.
- [ ] **Undo:** Undo bowel entry deletion.
- [x] **Validation:** Bristol type (1–7 required), valid timestamp.
- [x] **Empty State:** "No bowel logs for today. Record daily movement for digestive health insights."

---

### 4. ⚡ Habit Routine (`#habits`)
- [x] **Create:** Add new habit (Title, Frequency, Category/Icon).
- [x] **Read:** Toggle completion checkboxes, streak counter.
- [ ] **Edit:** Edit habit title, archive habit, or reorder habits.
- [x] **Delete:** Delete obsolete habit.
- [ ] **Undo:** Undo habit deletion.
- [ ] **History:** 7-day completion heat strip or calendar dots per habit.
- [x] **Empty State:** "No habits active. Create your first daily habit to build consistency."

---

### 5. 💊 Medications (`#meds`)
- [x] **Create:** Add medication (Name, Dosage, Timing: Morning/Afternoon/Night, Instructions).
- [x] **Read:** Today's dose schedule cards with 1-click "Mark as Taken".
- [ ] **Edit:** Update dosage or schedule when prescription changes.
- [x] **Delete:** Remove finished prescription.
- [ ] **Refill Reminder / Stock:** Low stock counter or refill alerts.
- [x] **Empty State:** "No active medicines. Add your daily vitamins or prescriptions."

---

### 6. 👨‍⚕️ Doctor Mode (`#doctor-mode`)
- [x] **Clinical Summary:** Aggregated view for physician review (Bowel summary, fiber averages, water intake, med compliance).
- [ ] **Date Range Filter:** 7 Days / 14 Days / 30 Days / Custom selector.
- [ ] **Print / PDF Export:** Clean, black-and-white high-contrast printable clinical report with no sidebar or buttons (`@media print`).
- [x] **Privacy Safeguard:** One-click clear or mask sensitive notes before showing screen.

---

### 7. ⚙️ Settings & Data Vault (`#settings`)
- [x] **Theme Switcher:** Light / Dark / System mode toggle.
- [x] **Data Export:** Full JSON backup download.
- [x] **Data Import:** JSON backup restore with validation.
- [x] **Reset / Wipe Vault:** Hard reset with confirmation dialog.
- [ ] **Storage Status:** Approximate storage usage in KB/MB.

---

## 🛠️ Global UX Polish Roadmap

### 1. 🛡️ Safety & Confirmations
- [ ] **Global Undo Toast:** Central notification system that captures `deletedItem` and provides a 5-second `Undo` button.
- [ ] **Destructive Confirmation Modal:** Replace native `confirm()` with a clean, branded modal for sensitive actions (e.g., "Clear all data").
- [ ] **Duplicate Entry Warning:** Warn if user logs the same medication dose twice within 2 hours.

### 2. ⚡ Interactions & Ergonomics
- [ ] **Keyboard Shortcuts:**
  - `Esc`: Close any open modal / quick entry drawer.
  - `Ctrl + K` / `Cmd + K`: Global quick action menu (Quick Water, Quick Log).
  - `1-7`: Select Bristol type when Bowel modal is open.
- [ ] **Optimistic UI Updates:** Instant DOM updates before async storage write with rollback on error.
- [ ] **Auto-focus:** Focus the primary input field whenever a modal or inline form opens.

### 3. ♿ Accessibility (a11y) & Microcopy
- [ ] **Screen Reader Labels:** `aria-label` on all icon-only buttons (theme toggle, delete buttons, close buttons).
- [ ] **Color Contrast:** Ensure WCAG AA compliance (4.5:1 ratio minimum) across both Light and Dark themes.
- [ ] **Human Microcopy:** Calm, clinical yet friendly language. Avoid technical jargon like "IndexedDB transaction aborted".

---

## 📐 Design System Freeze (No Ghost Designers)

```
Typography:     Manrope strictly (600/700 for Headings/Numbers, 400 for Body)
Palette:        Monochromatic Ink (#111827) + Neutral Grays (#F3F4F6, #E5E7EB, #9CA3AF)
Icons:          Tabler SVG Icons exclusively (Stroke-width: 1.75 - 2.0px)
Border Radius:  --radius-sm: 6px, --radius-md: 10px, --radius-lg: 14px
Line Height:    1.60 - 1.65 (Generous, readable, breathable)
```
