/* =========================================================================
   NorthLife — Medications & Supplement Module
   ========================================================================= */

import { AppState } from '../core/state.js';
import { Toast } from '../core/toast.js';

export const MedsModule = {
  render(container) {
    container.innerHTML = `
      <section style="display: flex; flex-direction: column; gap: var(--space-6);">
        <!-- Module Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: var(--space-3);">
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="pill-badge pill-badge--lavender">Clinical Rx</span>
              <span class="pill-badge pill-badge--mint">98% 30-Day Adherence</span>
            </div>
            <h1 style="font-size: 26px; font-weight: 800; letter-spacing: -0.03em; color: var(--text-ink); margin-top: 4px;">Medications & Supplement Protocol</h1>
            <p style="font-size: 13.5px; color: var(--text-muted);">Timed daily doses, stock tracking, and refill countdowns for optimal clinical compliance.</p>
          </div>
          <button class="btn btn--ink" id="btn-add-med">
            + Add Medication / Supplement
          </button>
        </div>

        <!-- Medication Schedule Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--space-6);">
          <!-- Today's Schedule -->
          <div class="card-nl">
            <div class="card-header-nl">
              <div>
                <span class="card-tag">Daily Checklist</span>
                <h3 class="card-heading">Today's Protocol</h3>
              </div>
              <span class="pill-badge pill-badge--neutral">1 of 3 Taken</span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 10px;" id="meds-schedule-list">
              <!-- Item 1: Morning Taken -->
              <div class="med-item" style="background-color: var(--bg-surface-subtle);">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span class="pill-badge pill-badge--mint">✓</span>
                  <div style="display: flex; flex-direction: column;">
                    <span class="habit-text-struck">Probiotic Complex (50 Billion CFU) + Vit D3</span>
                    <span style="font-size: 10px; color: var(--text-muted);">Morning with meal • 08:30 AM</span>
                  </div>
                </div>
                <span class="pill-badge pill-badge--mint">Taken</span>
              </div>

              <!-- Item 2: Afternoon Action Due -->
              <div class="med-item med-item--due" id="med-item-psyllium">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span class="pill-badge pill-badge--coral">!</span>
                  <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 13px; font-weight: 700; color: var(--text-ink);">Soluble Psyllium Husk (1 Sachet in 300ml water)</span>
                    <span style="font-size: 10px; font-weight: 600; color: var(--pastel-coral-accent);">Due at 02:00 PM (Afternoon)</span>
                  </div>
                </div>
                <button class="btn btn--ink" id="btn-take-psyllium-page" style="padding: 4px 12px; font-size: 11px;">Take Now</button>
              </div>

              <!-- Item 3: Bedtime Upcoming -->
              <div class="med-item" style="background-color: var(--bg-surface-subtle);" id="med-item-magnesium">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span class="pill-badge pill-badge--lavender">◐</span>
                  <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 13px; font-weight: 700; color: var(--text-ink);">Magnesium Glycinate (400mg)</span>
                    <span style="font-size: 10px; color: var(--text-muted);">Bedtime for sleep & bowel relaxation • 10:00 PM</span>
                  </div>
                </div>
                <button class="btn btn--subtle" id="btn-take-magnesium-page" style="padding: 4px 12px; font-size: 11px;">Mark Taken</button>
              </div>
            </div>
          </div>

          <!-- Inventory & Stock Refill Warning -->
          <div class="card-nl">
            <div class="card-header-nl">
              <div>
                <span class="card-tag">Stock Registry</span>
                <h3 class="card-heading">Medication Inventory</h3>
              </div>
              <span class="pill-badge pill-badge--coral">1 Refill Alert</span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div class="med-item" style="background-color: var(--bg-surface-subtle); justify-content: space-between;">
                <div style="display: flex; flex-direction: column;">
                  <span style="font-size: 13px; font-weight: 700; color: var(--text-ink);">Probiotic Complex</span>
                  <span style="font-size: 10px; color: var(--text-muted);">Stock: 24 capsules remaining</span>
                </div>
                <span class="pill-badge pill-badge--mint">Sufficient</span>
              </div>

              <div class="med-item" style="background-color: rgba(255, 236, 229, 0.45); border-color: rgba(192, 70, 36, 0.25); justify-content: space-between;">
                <div style="display: flex; flex-direction: column;">
                  <span style="font-size: 13px; font-weight: 700; color: var(--text-ink);">Psyllium Husk Sachets</span>
                  <span style="font-size: 10px; font-weight: 600; color: var(--pastel-coral-accent);">Only 3 sachets left (Refill in 3 days)</span>
                </div>
                <span class="pill-badge pill-badge--coral">Refill Soon</span>
              </div>

              <div class="med-item" style="background-color: var(--bg-surface-subtle); justify-content: space-between;">
                <div style="display: flex; flex-direction: column;">
                  <span style="font-size: 13px; font-weight: 700; color: var(--text-ink);">Magnesium Glycinate</span>
                  <span style="font-size: 10px; color: var(--text-muted);">Stock: 45 tablets remaining</span>
                </div>
                <span class="pill-badge pill-badge--mint">Sufficient</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    this.bindEvents(container);
  },

  bindEvents(container) {
    const takePsyllium = container.querySelector('#btn-take-psyllium-page');
    if (takePsyllium) {
      takePsyllium.addEventListener('click', () => {
        const item = container.querySelector('#med-item-psyllium');
        if (item) {
          item.className = 'med-item';
          item.style.backgroundColor = 'var(--bg-surface-subtle)';
          item.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
              <span class="pill-badge pill-badge--mint">✓</span>
              <div style="display: flex; flex-direction: column;">
                <span class="habit-text-struck">Soluble Psyllium Husk (1 Sachet in 300ml water)</span>
                <span style="font-size: 10px; color: var(--text-muted);">Taken at 02:00 PM</span>
              </div>
            </div>
            <span class="pill-badge pill-badge--mint">Taken</span>
          `;
          Toast.show({ title: 'Dose Taken', message: 'Psyllium Husk recorded as taken.', type: 'success' });
        }
      });
    }

    const takeMagnesium = container.querySelector('#btn-take-magnesium-page');
    if (takeMagnesium) {
      takeMagnesium.addEventListener('click', () => {
        const item = container.querySelector('#med-item-magnesium');
        if (item) {
          item.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
              <span class="pill-badge pill-badge--mint">✓</span>
              <div style="display: flex; flex-direction: column;">
                <span class="habit-text-struck">Magnesium Glycinate (400mg)</span>
                <span style="font-size: 10px; color: var(--text-muted);">Taken ahead of bedtime</span>
              </div>
            </div>
            <span class="pill-badge pill-badge--mint">Taken</span>
          `;
          Toast.show({ title: 'Dose Taken', message: 'Magnesium Glycinate recorded as taken.', type: 'success' });
        }
      });
    }

    const addBtn = container.querySelector('#btn-add-med');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const name = prompt('Enter Medication / Supplement name:');
        if (name) {
          Toast.show({ title: 'Medication Registered', message: `${name} added to protocol.`, type: 'success' });
        }
      });
    }
  }
};
