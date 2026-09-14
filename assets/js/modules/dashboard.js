/* =========================================================================
   NorthLife — Dashboard Module (Today Overview Hub)
   ========================================================================= */

import { AppState } from '../core/state.js';
import { Toast } from '../core/toast.js';

export const DashboardModule = {
  render(container) {
    const state = AppState.getState();
    const today = state.today;
    const waterPercent = Math.min(100, Math.round((today.waterMl / today.waterTargetMl) * 100));
    const fiberPercent = Math.min(100, Math.round((today.fiberG / today.fiberTargetG) * 100));
    const kcalLeft = Math.max(0, today.calorieTarget - today.calories);

    container.innerHTML = `
      <!-- Top Section: Greeting & Telemetry Header -->
      <section style="display: flex; flex-direction: column; gap: var(--space-4);">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: var(--space-3);">
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
              <h1 style="font-size: 26px; font-weight: 800; letter-spacing: -0.03em; color: var(--text-ink);">Good morning, Alex</h1>
              <span class="pill-badge pill-badge--coral" id="dash-tasks-badge">${today.habitsTotal - today.habitsDone} Tasks Remaining</span>
              <span class="pill-badge pill-badge--butter">Consultation in 4 Days</span>
            </div>
            <p style="font-size: 13.5px; font-weight: 400; color: var(--text-muted);">
              All clinical telemetry, bowel motility logs, and daily biometric markers are synchronized.
            </p>
          </div>
          <div style="display: flex; gap: 10px;">
            <button class="btn btn--subtle" id="btn-sync-wearable">
              <svg style="width: 14px; height: 14px; stroke: var(--text-muted);" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
              <span>Sync Wearable</span>
            </button>
            <button class="btn btn--ink" id="btn-live-telemetry">
              <svg style="width: 14px; height: 14px; stroke: #FFFFFF;" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              <span>Live Telemetry</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Quick Action Pills Ribbon -->
      <section class="quick-action-ribbon" aria-label="Quick Action Logs">
        <button class="quick-action-pill" id="action-add-water">
          <span class="quick-pill-icon" style="background-color: var(--pastel-blue-bg); color: var(--pastel-blue-accent);">+</span>
          <span>250ml Water</span>
        </button>
        <button class="quick-action-pill" id="action-add-meal">
          <span class="quick-pill-icon" style="background-color: var(--pastel-butter-bg); color: var(--pastel-butter-accent);">+</span>
          <span>Log Meal & Fiber</span>
        </button>
        <button class="quick-action-pill" id="action-add-bowel">
          <span class="quick-pill-icon" style="background-color: var(--pastel-lavender-bg); color: var(--pastel-lavender-accent);">+</span>
          <span>Bowel Movement</span>
        </button>
        <button class="quick-action-pill" id="action-mark-meds">
          <span class="quick-pill-icon" style="background-color: var(--pastel-mint-bg); color: var(--pastel-mint-accent);">✓</span>
          <span>Mark Meds Taken</span>
        </button>
        <button class="quick-action-pill" id="action-log-mood">
          <span class="quick-pill-icon" style="background-color: var(--pastel-coral-bg); color: var(--pastel-coral-accent);">☺</span>
          <span>Log Mood & Stress</span>
        </button>
        <button class="quick-action-pill" id="action-record-weight">
          <span class="quick-pill-icon" style="background-color: var(--bg-surface-elevated); color: var(--text-ink);">⚖</span>
          <span>Record Weight</span>
        </button>
      </section>

      <!-- Primary 3-Column Metrics Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--space-6);">
        <!-- Card 1: Hydration -->
        <div class="card-nl">
          <div>
            <div class="card-header-nl">
              <div class="card-title-group">
                <div class="card-icon-badge" style="background-color: var(--pastel-blue-bg); color: var(--pastel-blue-accent);">
                  <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                  </svg>
                </div>
                <div>
                  <span class="card-tag">Telemetry</span>
                  <h3 class="card-heading">Hydration</h3>
                </div>
              </div>
              <span class="pill-badge pill-badge--blue" id="dash-water-percent-badge">${waterPercent}% Goal</span>
            </div>

            <div style="display: flex; align-items: baseline; justify-content: space-between; padding: 8px 0;">
              <div>
                <div style="display: flex; align-items: baseline; gap: 6px;">
                  <span class="metric-large" id="dash-water-curr">${today.waterMl.toLocaleString()}</span>
                  <span class="metric-unit">/ ${today.waterTargetMl.toLocaleString()} ml</span>
                </div>
                <p style="font-size: 12px; font-weight: 500; color: var(--pastel-mint-accent); display: flex; align-items: center; gap: 6px; margin-top: 6px;">
                  <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                  <span>On pace — 450ml before 18:00</span>
                </p>
              </div>
              <!-- Circular Donut Progress Ring -->
              <div class="donut-wrapper">
                <svg class="donut-svg" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F1EFEA" stroke-width="3.5"></path>
                  <path id="dash-water-donut-bar" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--pastel-blue-accent)" stroke-dasharray="${waterPercent}, 100" stroke-linecap="round" stroke-width="3.5"></path>
                </svg>
                <span class="donut-center-text" id="dash-water-donut-text">${waterPercent}%</span>
              </div>
            </div>
          </div>

          <!-- Quick Water Increments -->
          <div class="card-footer-nl">
            <span class="card-tag" style="margin-bottom: 8px;">Quick Log</span>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
              <button class="btn btn--subtle btn-add-water-quick" data-amount="150" style="padding: 6px 0; font-size: 12px;">+150ml</button>
              <button class="btn btn--subtle btn-add-water-quick" data-amount="250" style="padding: 6px 0; font-size: 12px;">+250ml</button>
              <button class="btn btn--subtle btn-add-water-quick" data-amount="500" style="padding: 6px 0; font-size: 12px;">+500ml</button>
            </div>
          </div>
        </div>

        <!-- Card 2: Nutrition & Macros -->
        <div class="card-nl">
          <div>
            <div class="card-header-nl">
              <div class="card-title-group">
                <div class="card-icon-badge" style="background-color: var(--pastel-butter-bg); color: var(--pastel-butter-accent);">
                  <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <div>
                  <span class="card-tag">Dietary Loop</span>
                  <h3 class="card-heading">Energy & Macros</h3>
                </div>
              </div>
              <span class="pill-badge pill-badge--butter">${kcalLeft} kcal left</span>
            </div>

            <div style="display: flex; align-items: baseline; justify-content: space-between; padding: 4px 0;">
              <div style="display: flex; align-items: baseline; gap: 6px;">
                <span class="metric-large">${today.calories.toLocaleString()}</span>
                <span class="metric-unit">/ ${today.calorieTarget.toLocaleString()} kcal</span>
              </div>
              <span class="pill-badge pill-badge--mint">${today.fiberG}g / ${today.fiberTargetG}g Fiber (${fiberPercent}%)</span>
            </div>

            <!-- Segmented Macro Bar -->
            <div class="macro-track">
              <div class="macro-segment--carbs" style="width: 46%;"></div>
              <div class="macro-segment--protein" style="width: 34%;"></div>
              <div class="macro-segment--fats" style="width: 20%;"></div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); font-size: 12px; padding-top: 8px;">
              <div>
                <span style="font-size: 10px; font-weight: 600; color: var(--text-subtle); display: block;">Carbs</span>
                <span style="font-weight: 700; color: var(--text-ink);">${today.carbsG}g <span style="font-weight: 400; color: var(--text-muted);">/230g</span></span>
              </div>
              <div>
                <span style="font-size: 10px; font-weight: 600; color: var(--text-subtle); display: block;">Protein</span>
                <span style="font-weight: 700; color: var(--text-ink);">${today.proteinG}g <span style="font-weight: 400; color: var(--text-muted);">/140g</span></span>
              </div>
              <div>
                <span style="font-size: 10px; font-weight: 600; color: var(--text-subtle); display: block;">Fats</span>
                <span style="font-weight: 700; color: var(--text-ink);">${today.fatsG}g <span style="font-weight: 400; color: var(--text-muted);">/65g</span></span>
              </div>
            </div>
          </div>

          <div class="card-footer-nl">
            <a href="#diet" class="btn btn--subtle" style="width: 100%; text-align: center;">
              <svg style="width: 14px; height: 14px; stroke: var(--pastel-butter-accent);" viewBox="0 0 24 24" fill="none" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              <span>Manage Diet & Fiber Plan</span>
            </a>
          </div>
        </div>

        <!-- Card 3: Bowel & Gut Motility -->
        <div class="card-nl">
          <div>
            <div class="card-header-nl">
              <div class="card-title-group">
                <div class="card-icon-badge" style="background-color: var(--pastel-mint-bg); color: var(--pastel-mint-accent);">
                  <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div>
                  <span class="card-tag">Gut Motility</span>
                  <h3 class="card-heading">Bowel & Gut State</h3>
                </div>
              </div>
              <span class="pill-badge pill-badge--mint" id="dash-bristol-badge">Type ${today.lastBowelLog?.bristolType || 4} Ideal</span>
            </div>

            <!-- Motility Snapshot Box -->
            <div style="padding: 12px; border-radius: var(--radius-md); background-color: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 6px;">
              <div style="display: flex; justify-content: space-between; font-size: 12px;">
                <span style="font-weight: 700; color: var(--text-ink);">Last Logged: ${today.lastBowelLog?.time || '09:40 AM'}</span>
                <span style="font-weight: 600; color: var(--pastel-mint-accent); display: flex; align-items: center; gap: 4px;">
                  <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Smooth Form
                </span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--text-muted); font-weight: 500;">
                <span>Pain / Discomfort: <strong style="color: var(--text-ink); font-weight: 700;">${today.lastBowelLog?.painLevel || 0}/10</strong></span>
                <span>Blood: <strong style="color: var(--pastel-mint-accent); font-weight: 700;">None (0)</strong></span>
              </div>
            </div>

            <!-- Bristol Stool 7-Tab Strip -->
            <div style="margin-top: 12px;">
              <span class="card-tag">Bristol Stool Scale</span>
              <div class="bristol-tab-strip">
                <button class="bristol-tab" data-type="1">T1</button>
                <button class="bristol-tab" data-type="2">T2</button>
                <button class="bristol-tab" data-type="3">T3</button>
                <button class="bristol-tab bristol-tab--active" data-type="4">T4</button>
                <button class="bristol-tab" data-type="5">T5</button>
                <button class="bristol-tab" data-type="6">T6</button>
                <button class="bristol-tab" data-type="7">T7</button>
              </div>
            </div>
          </div>

          <div class="card-footer-nl">
            <a href="#bowel" class="btn btn--subtle" style="width: 100%; text-align: center;">
              <svg style="width: 14px; height: 14px; stroke: var(--pastel-mint-accent);" viewBox="0 0 24 24" fill="none" stroke-width="2">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              <span>Full Digestive Tracker</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Secondary 3-Column Grid (Habits, Meds, Sleep/Mood) -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--space-6);">
        <!-- Card 4: Daily Habits -->
        <div class="card-nl">
          <div>
            <div class="card-header-nl">
              <div class="card-title-group">
                <div class="card-icon-badge" style="background-color: var(--pastel-coral-bg); color: var(--pastel-coral-accent);">
                  <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <span class="card-tag">Adherence</span>
                  <h3 class="card-heading">Daily Habit Loop</h3>
                </div>
              </div>
              <span class="pill-badge pill-badge--neutral" id="dash-habits-score">${today.habitsDone} of ${today.habitsTotal} Done</span>
            </div>

            <!-- Habit Checklist -->
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <!-- Item 1 -->
              <div class="habit-item habit-item--done habit-toggle" data-id="h1">
                <div class="habit-check-circle">✓</div>
                <div style="display: flex; flex-direction: column; min-width: 0;">
                  <span class="habit-text-struck">Morning Sunlight & Walk (20 min)</span>
                  <span style="font-size: 10px; color: var(--text-muted);">07:45 AM • Auto-logged</span>
                </div>
              </div>

              <!-- Item 2 -->
              <div class="habit-item habit-item--done habit-toggle" data-id="h2">
                <div class="habit-check-circle">✓</div>
                <div style="display: flex; flex-direction: column; min-width: 0;">
                  <span class="habit-text-struck">35g Dietary Fiber Target</span>
                  <span style="font-size: 10px; color: var(--text-muted);">13:15 Lunch completed</span>
                </div>
              </div>

              <!-- Item 3 -->
              <div class="habit-item habit-toggle" data-id="h3">
                <div style="width: 16px; height: 16px; border-radius: 50%; border: 2px solid var(--border-dark); flex-shrink: 0;" class="habit-radio-circle"></div>
                <div style="display: flex; flex-direction: column; min-width: 0;">
                  <span style="font-size: 12px; font-weight: 700; color: var(--text-ink);" class="habit-title-text">Evening Screen Off</span>
                  <span style="font-size: 10px; font-weight: 600; color: var(--pastel-coral-accent);">Scheduled 21:30</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card-footer-nl">
            <a href="#habits" class="btn btn--subtle" style="width: 100%; text-align: center;">
              <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Manage Habits</span>
            </a>
          </div>
        </div>

        <!-- Card 5: Medication Protocol -->
        <div class="card-nl">
          <div>
            <div class="card-header-nl">
              <div class="card-title-group">
                <div class="card-icon-badge" style="background-color: var(--pastel-lavender-bg); color: var(--pastel-lavender-accent);">
                  <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="7" width="18" height="13" rx="2"></rect>
                    <path d="M16 3v4"></path>
                    <path d="M8 3v4"></path>
                    <line x1="9" y1="13" x2="15" y2="13"></line>
                    <line x1="12" y1="10" x2="12" y2="16"></line>
                  </svg>
                </div>
                <div>
                  <span class="card-tag">Prescription</span>
                  <h3 class="card-heading">Medication Protocol</h3>
                </div>
              </div>
              <span class="pill-badge pill-badge--mint">98% 30D Score</span>
            </div>

            <!-- Medication Items -->
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <!-- Done Item -->
              <div class="med-item" style="background-color: var(--bg-surface-subtle);">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span class="pill-badge pill-badge--mint" style="padding: 2px 6px;">✓</span>
                  <div style="display: flex; flex-direction: column;">
                    <span class="habit-text-struck">Probiotic Complex + D3</span>
                    <span style="font-size: 10px; color: var(--text-muted);">Taken with breakfast • 08:30 AM</span>
                  </div>
                </div>
                <span style="font-size: 10px; font-weight: 700; color: var(--text-muted);">Done</span>
              </div>

              <!-- Action Due Item (Coral Highlight) -->
              <div class="med-item med-item--due" id="due-med-psyllium">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span class="pill-badge pill-badge--coral" style="padding: 2px 6px;">!</span>
                  <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 12px; font-weight: 700; color: var(--text-ink);">Soluble Psyllium Husk</span>
                    <span style="font-size: 10px; font-weight: 600; color: var(--pastel-coral-accent);">Due at 02:00 PM</span>
                  </div>
                </div>
                <button class="btn btn--ink" id="btn-take-psyllium" style="padding: 4px 10px; font-size: 11px;">Take Now</button>
              </div>
            </div>
          </div>

          <div class="card-footer-nl" style="display: flex; align-items: center; justify-content: space-between; font-size: 12px; font-weight: 700;">
            <a href="#meds" style="color: var(--text-ink); display: flex; align-items: center; gap: 4px;">
              <span>Full Rx Schedule</span>
              <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <span style="font-size: 11px; font-weight: 400; color: var(--text-muted);">Rx Refill: 19d</span>
          </div>
        </div>

        <!-- Card 6: Sleep & Mood -->
        <div class="card-nl">
          <div>
            <div class="card-header-nl">
              <div class="card-title-group">
                <div class="card-icon-badge" style="background-color: var(--pastel-indigo-bg); color: var(--pastel-indigo-accent);">
                  <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </div>
                <div>
                  <span class="card-tag">Recovery</span>
                  <h3 class="card-heading">Sleep & Mood</h3>
                </div>
              </div>
              <span class="pill-badge pill-badge--mint">Sleep 88</span>
            </div>

            <!-- Sleep stats -->
            <div style="display: flex; align-items: baseline; justify-content: space-between; padding: 4px 0;">
              <span class="metric-large">7<span style="font-size: 14px; font-weight: 400; color: var(--text-muted);">h</span> 42<span style="font-size: 14px; font-weight: 400; color: var(--text-muted);">m</span></span>
              <div style="font-size: 12px; font-weight: 600; color: var(--text-muted);">
                <span>Deep: <strong style="color: var(--text-ink);">1h 45m</strong></span>
              </div>
            </div>

            <!-- 5-Emoji Mood Selector -->
            <div style="margin-top: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="card-tag">Mood & Stress State</span>
                <span style="font-size: 11px; font-weight: 700; color: var(--pastel-mint-accent);">Low Stress • 8/10</span>
              </div>
              <div class="mood-strip">
                <button class="mood-tile" data-mood="Stressed"><span style="font-size: 13px;">😫</span><span style="font-size: 9px; font-weight: 700; color: var(--text-muted);">Stressed</span></button>
                <button class="mood-tile" data-mood="Neutral"><span style="font-size: 13px;">😐</span><span style="font-size: 9px; font-weight: 700; color: var(--text-muted);">Neutral</span></button>
                <button class="mood-tile" data-mood="Good"><span style="font-size: 13px;">🙂</span><span style="font-size: 9px; font-weight: 700; color: var(--text-muted);">Good</span></button>
                <button class="mood-tile" data-mood="Great"><span style="font-size: 13px;">😄</span><span style="font-size: 9px; font-weight: 700; color: var(--text-muted);">Great</span></button>
                <button class="mood-tile mood-tile--active" data-mood="Serene"><span style="font-size: 13px;">🧘</span><span style="font-size: 9px; font-weight: 800; color: var(--text-inverse);">Serene</span></button>
              </div>
            </div>
          </div>

          <div class="card-footer-nl" style="display: flex; justify-content: space-between; font-size: 12px; color: var(--text-muted);">
            <span>HRV: <strong style="color: var(--text-ink);">64 ms</strong> (Optimal)</span>
            <span>Latency: <strong style="color: var(--text-ink);">12 min</strong></span>
          </div>
        </div>
      </div>

      <!-- Bottom Row: 30-Day Biometric Curve & Doctor Mode -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--space-6);">
        <!-- 30-Day Weight & Motility Curve (Wide) -->
        <div class="card-nl">
          <div>
            <div class="card-header-nl" style="flex-wrap: wrap; gap: 8px;">
              <div class="card-title-group">
                <div class="card-icon-badge" style="background-color: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); color: var(--text-ink);">
                  <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div>
                  <span class="card-tag">Biometric Telemetry</span>
                  <h3 class="card-heading">30-Day Weight & Motility Curve</h3>
                </div>
              </div>

              <!-- Tab Switchers -->
              <div style="display: inline-flex; padding: 3px; border-radius: var(--radius-md); background-color: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); font-size: 12px; font-weight: 700;">
                <button class="btn btn--subtle btn-chart-tab btn-chart-tab--active" data-chart="weight" style="background-color: var(--bg-surface); color: var(--text-ink); padding: 4px 10px; border-radius: var(--radius-sm); box-shadow: var(--shadow-soft);">Weight (kg)</button>
                <button class="btn btn--subtle btn-chart-tab" data-chart="bristol" style="padding: 4px 10px; color: var(--text-muted); border: none; background: none;">Bristol Score</button>
              </div>
            </div>

            <!-- Smooth Aesthetic SVG Line Chart -->
            <div style="position: relative; width: 100%; height: 180px; padding-top: 10px;">
              <svg style="width: 100%; height: 100%; overflow: visible;" viewBox="0 0 700 180" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="warmChartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#18181B" stop-opacity="0.08"></stop>
                    <stop offset="100%" stop-color="#18181B" stop-opacity="0.0"></stop>
                  </linearGradient>
                </defs>
                <line x1="0" y1="30" x2="700" y2="30" stroke="#ECE8E1" stroke-dasharray="3 3" stroke-width="1"></line>
                <line x1="0" y1="75" x2="700" y2="75" stroke="#ECE8E1" stroke-dasharray="3 3" stroke-width="1"></line>
                <line x1="0" y1="120" x2="700" y2="120" stroke="#ECE8E1" stroke-dasharray="3 3" stroke-width="1"></line>
                <line x1="0" y1="165" x2="700" y2="165" stroke="#ECE8E1" stroke-dasharray="3 3" stroke-width="1"></line>
                <path d="M 0 45 Q 116 55 233 80 T 466 110 T 700 135 L 700 180 L 0 180 Z" fill="url(#warmChartGrad)"></path>
                <path d="M 0 45 Q 116 55 233 80 T 466 110 T 700 135" fill="none" stroke="#18181B" stroke-linecap="round" stroke-width="2.5"></path>
                <circle cx="0" cy="45" r="4" fill="#FFFFFF" stroke="#18181B" stroke-width="2"></circle>
                <circle cx="175" cy="65" r="4" fill="#FFFFFF" stroke="#18181B" stroke-width="2"></circle>
                <circle cx="350" cy="95" r="4" fill="#FFFFFF" stroke="#18181B" stroke-width="2"></circle>
                <circle cx="525" cy="115" r="4" fill="#FFFFFF" stroke="#18181B" stroke-width="2"></circle>
                <circle cx="700" cy="135" r="5" fill="#18181B" stroke="#FFFFFF" stroke-width="2"></circle>
              </svg>
            </div>

            <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 600; color: var(--text-muted); margin-top: 8px;">
              <span>Week 1 (74.2 kg)</span>
              <span>Week 2 (73.4 kg)</span>
              <span>Week 3 (72.6 kg)</span>
              <span style="color: var(--text-ink); font-weight: 700;">Today (71.8 kg)</span>
            </div>
          </div>

          <div class="card-footer-nl" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
            <div>
              <span class="card-tag">BMI</span>
              <span style="font-size: 15px; font-weight: 800; color: var(--text-ink);">22.4 <span style="font-size: 11px; font-weight: 700; color: var(--pastel-mint-accent);">Healthy</span></span>
            </div>
            <div>
              <span class="card-tag">30D Net</span>
              <span style="font-size: 15px; font-weight: 800; color: var(--text-ink);">-2.4 kg</span>
            </div>
            <div>
              <span class="card-tag">Rolling Avg</span>
              <span style="font-size: 15px; font-weight: 800; color: var(--text-ink);">72.0 kg</span>
            </div>
          </div>
        </div>

        <!-- Doctor Mode Card -->
        <div class="card-nl">
          <div>
            <div class="card-header-nl">
              <div class="card-title-group">
                <div class="card-icon-badge" style="background-color: var(--pastel-mint-bg); color: var(--pastel-mint-accent);">
                  <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                </div>
                <div>
                  <span class="card-tag">Physician Export</span>
                  <h3 class="card-heading">Doctor Mode</h3>
                </div>
              </div>
              <span class="pill-badge pill-badge--mint">Ready</span>
            </div>

            <!-- PDF Card Preview -->
            <div style="padding: 14px; border-radius: var(--radius-md); background-color: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 10px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 36px; height: 36px; border-radius: var(--radius-md); background-color: var(--bg-surface); border: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: center; color: var(--pastel-coral-accent);">
                  <svg style="width: 18px; height: 18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M9 13h6"></path>
                    <path d="M9 17h4"></path>
                  </svg>
                </div>
                <div style="display: flex; flex-direction: column; min-width: 0;">
                  <span style="font-size: 12px; font-weight: 700; color: var(--text-ink); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">NorthLife_30D_Summary.pdf</span>
                  <span style="font-size: 10px; font-weight: 500; color: var(--text-muted);">Compiled for Dr. Alex Mercer</span>
                </div>
              </div>

              <div style="display: flex; flex-direction: column; gap: 4px; padding-top: 8px; border-top: 1px solid var(--border-subtle); font-size: 12px; color: var(--text-muted);">
                <div style="display: flex; justify-content: space-between;">
                  <span>Bristol Regularity:</span>
                  <span style="font-weight: 700; color: var(--pastel-mint-accent);">92% Optimal</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span>Fiber Adherence:</span>
                  <span style="font-weight: 700; color: var(--text-ink);">85% Days</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span>Reported Flare-ups:</span>
                  <span style="font-weight: 700; color: var(--pastel-mint-accent);">0 (Remission)</span>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 14px;">
              <a href="#doctor-mode" class="btn btn--ink" style="width: 100%; text-align: center;">
                <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Open Doctor Mode</span>
              </a>
            </div>
          </div>

          <div class="card-footer-nl" style="display: flex; justify-content: space-between; font-size: 11px; color: var(--text-muted);">
            <span style="display: flex; align-items: center; gap: 4px;">
              <svg style="width: 14px; height: 14px; stroke: var(--pastel-mint-accent);" viewBox="0 0 24 24" fill="none" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Vault Encrypted</span>
            </span>
            <span style="font-weight: 700; color: var(--text-ink);">Audit Log #8201</span>
          </div>
        </div>
      </div>
    `;

    this.bindEvents(container);
  },

  bindEvents(container) {
    // Quick Add Water buttons
    container.querySelectorAll('.btn-add-water-quick').forEach((btn) => {
      btn.addEventListener('click', () => {
        const amt = parseInt(btn.getAttribute('data-amount'), 10) || 250;
        this.addWater(amt);
      });
    });

    const actionWaterBtn = container.querySelector('#action-add-water');
    if (actionWaterBtn) {
      actionWaterBtn.addEventListener('click', () => this.addWater(250));
    }

    const actionMealBtn = container.querySelector('#action-add-meal');
    if (actionMealBtn) {
      actionMealBtn.addEventListener('click', () => {
        window.location.hash = '#diet';
      });
    }

    const actionBowelBtn = container.querySelector('#action-add-bowel');
    if (actionBowelBtn) {
      actionBowelBtn.addEventListener('click', () => {
        window.location.hash = '#bowel';
      });
    }

    const actionMedsBtn = container.querySelector('#action-mark-meds');
    if (actionMedsBtn) {
      actionMedsBtn.addEventListener('click', () => {
        window.location.hash = '#meds';
      });
    }

    const actionMoodBtn = container.querySelector('#action-log-mood');
    if (actionMoodBtn) {
      actionMoodBtn.addEventListener('click', () => {
        Toast.show({ title: 'Mood Logger', message: 'Tap a mood emoji below to update.', type: 'info' });
      });
    }

    const actionWeightBtn = container.querySelector('#action-record-weight');
    if (actionWeightBtn) {
      actionWeightBtn.addEventListener('click', () => {
        const weight = prompt('Enter weight in kg:', '71.8');
        if (weight) {
          Toast.show({ title: 'Weight Recorded', message: `${weight} kg saved to daily telemetry.`, type: 'success' });
        }
      });
    }

    // Psyllium Take Now Button
    const takePsylliumBtn = container.querySelector('#btn-take-psyllium');
    if (takePsylliumBtn) {
      takePsylliumBtn.addEventListener('click', () => {
        const card = container.querySelector('#due-med-psyllium');
        if (card) {
          card.className = 'med-item';
          card.style.backgroundColor = 'var(--bg-surface-subtle)';
          card.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="pill-badge pill-badge--mint" style="padding: 2px 6px;">✓</span>
              <div style="display: flex; flex-direction: column;">
                <span class="habit-text-struck">Soluble Psyllium Husk</span>
                <span style="font-size: 10px; color: var(--text-muted);">Taken just now • 02:00 PM</span>
              </div>
            </div>
            <span style="font-size: 10px; font-weight: 700; color: var(--text-muted);">Done</span>
          `;
          Toast.show({
            title: 'Medication Taken',
            message: 'Soluble Psyllium Husk marked as completed.',
            type: 'success'
          });
        }
      });
    }

    // Habit Toggles
    container.querySelectorAll('.habit-toggle').forEach((item) => {
      item.addEventListener('click', () => {
        const isDone = item.classList.contains('habit-item--done');
        const titleEl = item.querySelector('.habit-title-text') || item.querySelector('.habit-text-struck');
        const title = titleEl?.textContent || 'Habit';

        if (isDone) {
          item.classList.remove('habit-item--done');
          item.innerHTML = `
            <div style="width: 16px; height: 16px; border-radius: 50%; border: 2px solid var(--border-dark); flex-shrink: 0;" class="habit-radio-circle"></div>
            <div style="display: flex; flex-direction: column; min-width: 0;">
              <span style="font-size: 12px; font-weight: 700; color: var(--text-ink);" class="habit-title-text">${title}</span>
              <span style="font-size: 10px; font-weight: 600; color: var(--pastel-coral-accent);">Pending</span>
            </div>
          `;
          Toast.show({ title: 'Habit Pending', message: `${title} marked as pending.`, type: 'info' });
        } else {
          item.classList.add('habit-item--done');
          item.innerHTML = `
            <div class="habit-check-circle">✓</div>
            <div style="display: flex; flex-direction: column; min-width: 0;">
              <span class="habit-text-struck">${title}</span>
              <span style="font-size: 10px; color: var(--text-muted);">Completed just now</span>
            </div>
          `;
          Toast.show({ title: 'Habit Completed', message: `${title} marked as done! 🔥`, type: 'success' });
        }
      });
    });

    // Bristol Stool selector tabs
    container.querySelectorAll('.bristol-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        container.querySelectorAll('.bristol-tab').forEach((t) => t.classList.remove('bristol-tab--active'));
        tab.classList.add('bristol-tab--active');
        const badge = container.querySelector('#dash-bristol-badge');
        if (badge) badge.textContent = `Type ${tab.getAttribute('data-type')} Selected`;
        Toast.show({ title: 'Bristol Motility', message: `Type ${tab.getAttribute('data-type')} recorded.`, type: 'info' });
      });
    });

    // Mood Selector
    container.querySelectorAll('.mood-tile').forEach((tile) => {
      tile.addEventListener('click', () => {
        container.querySelectorAll('.mood-tile').forEach((t) => t.classList.remove('mood-tile--active'));
        tile.classList.add('mood-tile--active');
        const mood = tile.getAttribute('data-mood');
        Toast.show({ title: 'Mood Logged', message: `Current state: ${mood}.`, type: 'success' });
      });
    });

    // Chart tab toggle
    container.querySelectorAll('.btn-chart-tab').forEach((btn) => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.btn-chart-tab').forEach((b) => {
          b.style.backgroundColor = 'transparent';
          b.style.color = 'var(--text-muted)';
          b.style.boxShadow = 'none';
        });
        btn.style.backgroundColor = 'var(--bg-surface)';
        btn.style.color = 'var(--text-ink)';
        btn.style.boxShadow = 'var(--shadow-soft)';
        Toast.show({ title: 'Telemetry View', message: `Switched chart to ${btn.textContent}.`, type: 'info', duration: 1800 });
      });
    });
  },

  addWater(amountMl) {
    const state = AppState.getState();
    const newTotal = state.today.waterMl + amountMl;
    const newPercent = Math.min(100, Math.round((newTotal / state.today.waterTargetMl) * 100));

    AppState.setState({
      today: { ...state.today, waterMl: newTotal }
    }, 'water:updated');

    const currEl = document.getElementById('dash-water-curr');
    if (currEl) currEl.textContent = newTotal.toLocaleString();

    const badgeEl = document.getElementById('dash-water-percent-badge');
    if (badgeEl) badgeEl.textContent = `${newPercent}% Goal`;

    const donutTextEl = document.getElementById('dash-water-donut-text');
    if (donutTextEl) donutTextEl.textContent = `${newPercent}%`;

    const donutBarEl = document.getElementById('dash-water-donut-bar');
    if (donutBarEl) donutBarEl.setAttribute('stroke-dasharray', `${newPercent}, 100`);

    Toast.show({
      title: 'Hydration Added',
      message: `+${amountMl}ml logged. Total: ${newTotal.toLocaleString()} ml (${newPercent}%)`,
      type: 'success'
    });
  }
};
