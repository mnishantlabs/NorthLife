# NorthLife — UI/UX Design & Visual Architecture Specification

> **Version:** 2.0.0 (Visual Aesthetic Spec)  
> **Visual Identity:** Warm Alabaster Minimalist Luxury Health OS  
> **Typography:** **Strictly Manrope** (`font-family: 'Manrope', -apple-system, sans-serif !important;` with prominent Thin `300` / Regular `400` / Bold `700` / ExtraBold `800`).

---

## 1. Design Philosophy & Aesthetic Blueprint

* **Clean Warm Canvas:** Warm Alabaster (`#FBF9F5`) canvas with Crisp White (`#FFFFFF`) card containers, outlined by fine warm borders (`#ECE8E1`).
* **High Contrast Ink:** Headlines and key data figures rendered in Deep Ink (`#18181B`) with negative letter-spacing (`-0.03em`).
* **Signature Pastel Accent System:**
  * 💧 **Pastel Blue** (`#EBF5FE` / `#0284C7`): Hydration, Telemetry, Primary metrics
  * 🥗 **Pastel Butter** (`#FEF7DA` / `#B45309`): Nutrition, Energy (kcal), Diet planner
  * 🌿 **Pastel Mint** (`#E8F7F0` / `#059669`): Bowel Motility, Healthy vitals, Completed habits, Active sync
  * 💊 **Pastel Lavender** (`#F3E8FF` / `#7C3AED`): Bowel Movement logging, Medications, Doctor Mode
  * 🌙 **Pastel Indigo** (`#EEF2FF` / `#4F46E5`): Sleep, Recovery, HRV, Mood tracking
  * ⚡ **Pastel Coral** (`#FFECE5` / `#C04624`): Quick Health Entry, Pain & Discomfort alerts, Due medications
* **Organic Elevation:** Ultra-soft, lightweight shadows (`shadow-soft`: `0 2px 8px -2px rgba(24, 24, 27, 0.04)`).

---

## 2. Global Layout Structure

```
+-----------------------------------------------------------------------------------------------+
| SIDEBAR (240px Desktop / Hidden Mobile)   | TOP HEADER (Height 64px, Sticky Backdrop Blur)    |
| - Brand: [NL] NorthLife [v2.4 pill]       | - Breadcrumbs: Overview / Cycle 14                |
| - Navigation Links:                       | - [🟢 Local Sync Active] Pill                      |
|   • Today Overview (Active Ink Card)      | - Today, 14 September 2026 Pill                   |
|   • Hydration                             | - Notification Bell (Coral alert dot)             |
|   • Nutrition & Energy                    | - Doctor / Patient Profile Badge                  |
|   • Digestive Health                      +---------------------------------------------------+
|   • Habit Routine                         | MAIN CONTENT CONTAINER (Max Width 1280px)         |
|   • Medications                           |                                                   |
|   • Sleep & Mood                          | 1. Top Section: Greeting & Telemetry Action Bar   |
|   • Doctor Mode                           | 2. Quick Action Pills Ribbon (Horizontal Scroll)  |
|                                           | 3. Primary Metrics Grid (3 Columns)               |
| - Bottom Sidebar:                         |    [ Card 1: Hydration Donut (73%) ]              |
|   • [ Quick Health Entry (Coral Pill) ]   |    [ Card 2: Energy & Macro Segmented Bar ]       |
|   • [ 🟢 Encrypted Offline Vault Badge ]  |    [ Card 3: Bowel Motility & Bristol Tabs ]      |
|                                           | 4. Secondary Habits & Meds Grid (3 Columns)       |
|                                           |    [ Card 4: Daily Habit Loop (4/6 Done) ]        |
|                                           |    [ Card 5: Medication Protocol (Psyllium Husk) ]|
|                                           |    [ Card 6: Sleep & Mood 5-Emoji Selector ]      |
|                                           | 5. Bottom Trend & Clinical Export (8 + 4 Cols)    |
|                                           |    [ 30-Day Weight & Motility SVG Curve (8 cols)] |
|                                           |    [ Doctor Mode PDF Preview Card (4 cols) ]      |
+-------------------------------------------+---------------------------------------------------+
```

---

## 3. Screen Specifications & Card Architectures

### 3.1 Card 1: Hydration Donut & Telemetry
* **Header:** Icon in Pastel Blue square + "Telemetry / Hydration" + `73% Goal` blue pill badge.
* **Metric Display:** `2,350` (32px Ink ExtraBold) `/ 3,200 ml` (12px Muted).
* **Pace Indicator:** Green trend icon + `On pace — 450ml before 18:00`.
* **Visual Donut Indicator:** Minimalist SVG circular progress donut (`stroke-dasharray="73, 100"`, Blue accent stroke on `#F1EFEA` track).
* **Quick Log Strip:** 3-grid buttons: `+150ml`, `+250ml`, `+500ml` in `#F8F6F2` rounded buttons.

---

### 3.2 Card 2: Energy & Dietary Macro Loop
* **Header:** Icon in Pastel Butter square + "Dietary Loop / Energy & Macros" + `470 kcal left` butter pill badge.
* **Metric Display:** `1,780` `/ 2,250 kcal` + `29g / 35g Fiber` Mint pill badge.
* **Segmented Pill Macro Bar:** Continuous rounded-full bar with 3 segments:
  * Carbs: 46% (Blue) — `185g / 230g`
  * Protein: 34% (Mint) — `112g / 140g`
  * Fats: 20% (Coral) — `54g / 65g`
* **Footer Action:** `+ Add Meal / Snack` full-width button.

---

### 3.3 Card 3: Bowel Motility & Gut State
* **Header:** Icon in Pastel Mint square + "Gut Motility / Bowel & Gut State" + `Type 4 Ideal` mint pill badge.
* **Last Logged Banner:** `#F8F6F2` rounded box:
  * `Last Logged: 09:40 AM` | `✓ Smooth Form`
  * `Pain / Discomfort: 0/10` | `Blood: None (0)`
* **Bristol Stool Scale 7-Grid Selector:**
  * Seven clean pill tabs (`T1` through `T7`).
  * `T4` active state: Deep Ink (`#18181B`) with White text & soft shadow.
* **Footer Action:** `+ Quick Motility Entry` button.

---

### 3.4 Card 4: Daily Habit Loop
* **Header:** Icon in Pastel Coral square + "Adherence / Daily Habit Loop" + `4 of 6 Done` pill badge.
* **Item States:**
  * **Done Items:** Dark circle with checkmark, struck-through muted text, logged timestamp (e.g. `Morning Sunlight & Walk (20 min)`, `35g Dietary Fiber Target`, `Standing Desk (3 hrs+)`).
  * **Pending Items:** Crisp white card with subtle border, circle outline, colored schedule time (e.g. `Evening Screen Off — Scheduled 21:30`, `10-Min Breathwork / Vagus`).
* **Footer Action:** `+ Add Custom Routine` button.

---

### 3.5 Card 5: Medication Protocol
* **Header:** Icon in Pastel Lavender square + "Prescription / Medication Protocol" + `98% 30D Score` mint pill badge.
* **Item States:**
  * **Taken Item:** `#F8F6F2` background, check icon, struck-through text (e.g., *Probiotic Complex + D3 - 08:30 AM*).
  * **Action Due Item:** Pastel Coral highlighted container (`bg-pastel-coral/35`), exclamation pill, *"Due at 02:00 PM"*, with dark `Take Now` button.
  * **Upcoming Item:** Lavender icon, scheduled time, *"In 5 hrs"*.
* **Footer:** `Full Clinical Rx Schedule` link + `Rx Refill: 19d` alert.

---

### 3.6 Card 6: Sleep, Recovery & Mood
* **Header:** Icon in Pastel Indigo square + "Recovery / Sleep & Mood" + `Sleep 88` mint pill badge.
* **Duration Display:** `7h 42m` (32px ExtraBold) + `Deep: 1h 45m • REM: 2h 05m`.
* **Mood 5-Emoji Selector:**
  * `😫 Stressed` | `😐 Neutral` | `🙂 Good` | `😄 Great` | `🧘 Serene` (Active ink pill).
* **Footer:** `HRV: 64 ms (Optimal)` | `Sleep Latency: 12 min`.

---

### 3.7 30-Day Biometric Trend Curve & Doctor Mode (Bottom Grid)
* **Left Container (8 columns):**
  * Switcher Tabs: `[ Weight (kg) ]` (Active white pill), `[ Bristol Score ]`, `[ Hydration ]`.
  * SVG Smooth Aesthetic Curved Line Chart with subtle area gradient (`url(#warmCleanGrad)`), dashed horizontal guide grids, and active data point tooltip (`12 Sep 2026: 71.9 kg (-2.3 kg net)`).
  * Bottom Metrics: Current BMI `22.4 Healthy`, 30-Day Change `-2.4 kg`, Rolling Avg `72.0 kg`.
* **Right Container (4 columns) — Doctor Mode:**
  * PDF preview card: `NorthLife_30D_Executive.pdf` with clinical summary items:
    * *Bristol Stool Regularity: 92% Optimal*
    * *Fiber Target Adherence: 85% of Days*
    * *Reported Flare-ups: 0 (Remission)*
  * Actions: `Download Clinical PDF` (Dark Ink button) + `Configure Report Data`.
  * Status: `🔒 Vault Encrypted • Audit Log: #8201`.
