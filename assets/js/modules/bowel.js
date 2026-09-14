/* =========================================================================
   NorthLife — Digestive & Bowel Health Module
   ========================================================================= */

import { AppState } from '../core/state.js';
import { Toast } from '../core/toast.js';

export const BowelModule = {
  render(container) {
    container.innerHTML = `
      <section style="display: flex; flex-direction: column; gap: var(--space-6);">
        <!-- Module Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: var(--space-3);">
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="pill-badge pill-badge--mint">Clinical Motility</span>
              <span class="pill-badge pill-badge--lavender">Bristol Scale Standardized</span>
            </div>
            <h1 style="font-size: 26px; font-weight: 800; letter-spacing: -0.03em; color: var(--text-ink); margin-top: 4px;">Digestive & Bowel Health Tracker</h1>
            <p style="font-size: 13.5px; color: var(--text-muted);">Correlates stool form, pain level, and bleeding against dietary & lifestyle triggers.</p>
          </div>
        </div>

        <!-- Log Entry Form Card -->
        <div class="card-nl" style="padding: var(--space-6);">
          <form id="form-bowel-log" style="display: flex; flex-direction: column; gap: var(--space-6);">
            
            <!-- 1. Bristol Stool Chart Visual Selector -->
            <div>
              <span class="card-tag" style="margin-bottom: 8px;">1. Select Bristol Stool Type</span>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px;" id="bristol-cards-grid">
                <div class="card-nl bristol-type-card" data-type="1" style="padding: 12px; cursor: pointer; text-align: center;">
                  <span style="font-weight: 800; font-size: 14px; color: var(--text-ink);">Type 1</span>
                  <span style="font-size: 10px; color: var(--text-muted); display: block; margin-top: 4px;">Hard lumps (Severe Constipation)</span>
                </div>
                <div class="card-nl bristol-type-card" data-type="2" style="padding: 12px; cursor: pointer; text-align: center;">
                  <span style="font-weight: 800; font-size: 14px; color: var(--text-ink);">Type 2</span>
                  <span style="font-size: 10px; color: var(--text-muted); display: block; margin-top: 4px;">Lumpy sausage (Mild Constipation)</span>
                </div>
                <div class="card-nl bristol-type-card" data-type="3" style="padding: 12px; cursor: pointer; text-align: center;">
                  <span style="font-weight: 800; font-size: 14px; color: var(--text-ink);">Type 3</span>
                  <span style="font-size: 10px; color: var(--text-muted); display: block; margin-top: 4px;">Cracked surface (Normal)</span>
                </div>
                <div class="card-nl bristol-type-card card-nl--active-ink" data-type="4" style="padding: 12px; cursor: pointer; text-align: center; border-color: var(--text-ink); background-color: var(--bg-surface-elevated);">
                  <span style="font-weight: 800; font-size: 14px; color: var(--text-ink);">Type 4 ✓</span>
                  <span style="font-size: 10px; color: var(--pastel-mint-accent); font-weight: 700; display: block; margin-top: 4px;">Smooth & Soft (Optimal)</span>
                </div>
                <div class="card-nl bristol-type-card" data-type="5" style="padding: 12px; cursor: pointer; text-align: center;">
                  <span style="font-weight: 800; font-size: 14px; color: var(--text-ink);">Type 5</span>
                  <span style="font-size: 10px; color: var(--text-muted); display: block; margin-top: 4px;">Soft blobs (Lacking Fiber)</span>
                </div>
                <div class="card-nl bristol-type-card" data-type="6" style="padding: 12px; cursor: pointer; text-align: center;">
                  <span style="font-weight: 800; font-size: 14px; color: var(--text-ink);">Type 6</span>
                  <span style="font-size: 10px; color: var(--text-muted); display: block; margin-top: 4px;">Mushy stool (Mild Diarrhea)</span>
                </div>
                <div class="card-nl bristol-type-card" data-type="7" style="padding: 12px; cursor: pointer; text-align: center;">
                  <span style="font-weight: 800; font-size: 14px; color: var(--text-ink);">Type 7</span>
                  <span style="font-size: 10px; color: var(--text-muted); display: block; margin-top: 4px;">Liquid / Watery (Severe Diarrhea)</span>
                </div>
              </div>
            </div>

            <!-- 2. Pain & Discomfort Slider -->
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span class="card-tag">2. Pain / Discomfort Severity</span>
                <span class="pill-badge pill-badge--mint" id="pain-severity-badge">0 / 10 — None</span>
              </div>
              <input type="range" id="input-pain-level" min="0" max="10" step="1" value="0" style="width: 100%; accent-color: var(--text-ink); cursor: pointer;"/>
              
              <!-- Pain Type Chips -->
              <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
                <button type="button" class="quick-action-pill chip-pain-type" data-type="cramping">Cramping</button>
                <button type="button" class="quick-action-pill chip-pain-type" data-type="burning">Burning</button>
                <button type="button" class="quick-action-pill chip-pain-type" data-type="sharp">Sharp</button>
                <button type="button" class="quick-action-pill chip-pain-type" data-type="rectal_pressure">Rectal Pressure</button>
                <button type="button" class="quick-action-pill chip-pain-type" data-type="bloating">Bloating</button>
              </div>
            </div>

            <!-- 3. Bleeding Observation -->
            <div>
              <span class="card-tag" style="margin-bottom: 8px;">3. Bleeding Observed</span>
              <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <label style="display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; cursor: pointer;">
                  <input type="radio" name="bleeding" value="none" checked/> None
                </label>
                <label style="display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; cursor: pointer;">
                  <input type="radio" name="bleeding" value="streaks"/> Streaks on Paper
                </label>
                <label style="display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; cursor: pointer;">
                  <input type="radio" name="bleeding" value="in_bowl"/> In Toilet Bowl
                </label>
                <label style="display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: var(--pastel-coral-accent); cursor: pointer;">
                  <input type="radio" name="bleeding" value="heavy"/> Heavy
                </label>
              </div>
            </div>

            <!-- 4. Lifestyle & Dietary Triggers -->
            <div>
              <span class="card-tag" style="margin-bottom: 8px;">4. Triggers Experienced Today</span>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;" id="triggers-chip-container">
                <button type="button" class="quick-action-pill chip-trigger" data-trigger="spicy_food">🌶️ Spicy Food</button>
                <button type="button" class="quick-action-pill chip-trigger" data-trigger="sitting_prolonged">🪑 Sitting > 2 hrs</button>
                <button type="button" class="quick-action-pill chip-trigger" data-trigger="heavy_lifting">🏋️ Heavy Lifting</button>
                <button type="button" class="quick-action-pill chip-trigger" data-trigger="low_water">💧 Low Water</button>
                <button type="button" class="quick-action-pill chip-trigger" data-trigger="caffeine">☕ High Caffeine</button>
                <button type="button" class="quick-action-pill chip-trigger" data-trigger="dairy">🧀 Dairy</button>
                <button type="button" class="quick-action-pill chip-trigger" data-trigger="stress">🤯 High Stress</button>
              </div>
            </div>

            <!-- Submit Button -->
            <div style="display: flex; justify-content: flex-end;">
              <button type="submit" class="btn btn--ink" style="padding: 10px 24px; font-size: 13px;">
                Save Bowel Health Entry
              </button>
            </div>
          </form>
        </div>

        <!-- Bowel Movement History Log -->
        <div class="card-nl">
          <div class="card-header-nl">
            <div>
              <span class="card-tag">Telemetry Log</span>
              <h3 class="card-heading">Recent Bowel Movement Records</h3>
            </div>
            <span class="pill-badge pill-badge--mint">92% Optimal Score</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;" id="bowel-history-list">
            <div class="med-item" style="background-color: var(--bg-surface-subtle);">
              <div style="display: flex; align-items: center; gap: 12px;">
                <span class="pill-badge pill-badge--mint">Type 4</span>
                <div style="display: flex; flex-direction: column;">
                  <span style="font-size: 13px; font-weight: 700; color: var(--text-ink);">Smooth, soft form • 4 mins</span>
                  <span style="font-size: 11px; color: var(--text-muted);">Pain: 0/10 • Bleeding: None • Triggers: None</span>
                </div>
              </div>
              <span style="font-size: 11px; color: var(--text-muted);">Today 09:40 AM</span>
            </div>

            <div class="med-item" style="background-color: var(--bg-surface-subtle);">
              <div style="display: flex; align-items: center; gap: 12px;">
                <span class="pill-badge pill-badge--mint">Type 3</span>
                <div style="display: flex; flex-direction: column;">
                  <span style="font-size: 13px; font-weight: 700; color: var(--text-ink);">Sausage-shaped with surface cracks</span>
                  <span style="font-size: 11px; color: var(--text-muted);">Pain: 0/10 • Bleeding: None</span>
                </div>
              </div>
              <span style="font-size: 11px; color: var(--text-muted);">Yesterday 08:15 AM</span>
            </div>
          </div>
        </div>
      </section>
    `;

    this.bindEvents(container);
  },

  bindEvents(container) {
    let selectedType = 4;
    const selectedTriggers = new Set();
    const selectedPainTypes = new Set();

    // Bristol Card Selection
    container.querySelectorAll('.bristol-type-card').forEach((card) => {
      card.addEventListener('click', () => {
        container.querySelectorAll('.bristol-type-card').forEach((c) => {
          c.style.borderColor = 'var(--border-subtle)';
          c.style.backgroundColor = 'var(--bg-surface)';
        });
        card.style.borderColor = 'var(--text-ink)';
        card.style.backgroundColor = 'var(--bg-surface-elevated)';
        selectedType = parseInt(card.getAttribute('data-type'), 10) || 4;
        Toast.show({ title: 'Bristol Form', message: `Type ${selectedType} stool selected.`, type: 'info', duration: 1500 });
      });
    });

    // Pain Slider
    const painInput = container.querySelector('#input-pain-level');
    const painBadge = container.querySelector('#pain-severity-badge');
    if (painInput && painBadge) {
      painInput.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        if (val === 0) {
          painBadge.className = 'pill-badge pill-badge--mint';
          painBadge.textContent = '0 / 10 — None';
        } else if (val <= 3) {
          painBadge.className = 'pill-badge pill-badge--butter';
          painBadge.textContent = `${val} / 10 — Mild`;
        } else if (val <= 6) {
          painBadge.className = 'pill-badge pill-badge--butter';
          painBadge.textContent = `${val} / 10 — Moderate`;
        } else {
          painBadge.className = 'pill-badge pill-badge--coral';
          painBadge.textContent = `${val} / 10 — Severe`;
        }
      });
    }

    // Trigger chips toggle
    container.querySelectorAll('.chip-trigger').forEach((chip) => {
      chip.addEventListener('click', () => {
        const trigger = chip.getAttribute('data-trigger');
        if (selectedTriggers.has(trigger)) {
          selectedTriggers.delete(trigger);
          chip.style.backgroundColor = 'var(--bg-surface)';
          chip.style.borderColor = 'var(--border-subtle)';
        } else {
          selectedTriggers.add(trigger);
          chip.style.backgroundColor = 'var(--pastel-coral-bg)';
          chip.style.borderColor = 'var(--pastel-coral-border)';
        }
      });
    });

    // Pain type chips toggle
    container.querySelectorAll('.chip-pain-type').forEach((chip) => {
      chip.addEventListener('click', () => {
        const pType = chip.getAttribute('data-type');
        if (selectedPainTypes.has(pType)) {
          selectedPainTypes.delete(pType);
          chip.style.backgroundColor = 'var(--bg-surface)';
          chip.style.borderColor = 'var(--border-subtle)';
        } else {
          selectedPainTypes.add(pType);
          chip.style.backgroundColor = 'var(--pastel-butter-bg)';
          chip.style.borderColor = 'var(--pastel-butter-border)';
        }
      });
    });

    // Form Submit
    const form = container.querySelector('#form-bowel-log');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const painLevel = parseInt(painInput?.value || '0', 10);
        const bleeding = container.querySelector('input[name="bleeding"]:checked')?.value || 'none';
        const triggersArr = Array.from(selectedTriggers);

        const state = AppState.getState();
        AppState.setState({
          today: {
            ...state.today,
            lastBowelLog: {
              time: 'Just now',
              bristolType: selectedType,
              painLevel,
              bleedingObserved: bleeding !== 'none'
            }
          }
        }, 'bowel:updated');

        const list = container.querySelector('#bowel-history-list');
        if (list) {
          const row = document.createElement('div');
          row.className = 'med-item';
          row.style.backgroundColor = 'var(--bg-surface-subtle)';
          row.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
              <span class="pill-badge pill-badge--mint">Type ${selectedType}</span>
              <div style="display: flex; flex-direction: column;">
                <span style="font-size: 13px; font-weight: 700; color: var(--text-ink);">Logged Entry</span>
                <span style="font-size: 11px; color: var(--text-muted);">Pain: ${painLevel}/10 • Bleeding: ${bleeding} • Triggers: ${triggersArr.length ? triggersArr.join(', ') : 'None'}</span>
              </div>
            </div>
            <span style="font-size: 11px; color: var(--text-muted);">Just now</span>
          `;
          list.prepend(row);
        }

        Toast.show({
          title: 'Digestive Log Saved',
          message: `Type ${selectedType} stool recorded successfully.`,
          type: 'success'
        });
      });
    }
  }
};
