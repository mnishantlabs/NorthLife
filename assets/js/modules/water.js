/* =========================================================================
   NorthLife — Water & Hydration Module
   ========================================================================= */

import { AppState } from '../core/state.js';
import { Toast } from '../core/toast.js';

export const WaterModule = {
  render(container) {
    const state = AppState.getState();
    const today = state.today;
    const percent = Math.min(100, Math.round((today.waterMl / today.waterTargetMl) * 100));

    container.innerHTML = `
      <section style="display: flex; flex-direction: column; gap: var(--space-6);">
        <!-- Module Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: var(--space-3);">
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="pill-badge pill-badge--blue">Hydration Protocol</span>
              <span class="pill-badge pill-badge--mint">Smart Reminders Active</span>
            </div>
            <h1 style="font-size: 26px; font-weight: 800; letter-spacing: -0.03em; color: var(--text-ink); margin-top: 4px;">Daily Water & Hydration Tracker</h1>
            <p style="font-size: 13.5px; color: var(--text-muted);">Maintains cellular hydration, supports bowel motility, and prevents digestive strain.</p>
          </div>
          <button class="btn btn--subtle" id="btn-test-chime">
            🔔 Test Audio Chime
          </button>
        </div>

        <!-- Hydration Focus Card -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--space-6);">
          <!-- Large Progress Ring Card -->
          <div class="card-nl" style="align-items: center; text-align: center; padding: var(--space-8);">
            <div style="position: relative; width: 140px; height: 140px; margin: 0 auto;">
              <svg style="width: 140px; height: 140px; transform: rotate(-90deg);" viewBox="0 0 36 36">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F1EFEA" stroke-width="3"></path>
                <path id="water-page-ring" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--pastel-blue-accent)" stroke-dasharray="${percent}, 100" stroke-linecap="round" stroke-width="3"></path>
              </svg>
              <div style="position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <span style="font-size: 28px; font-weight: 800; color: var(--text-ink);" id="water-page-percent">${percent}%</span>
                <span style="font-size: 11px; font-weight: 600; color: var(--text-muted);">OF TARGET</span>
              </div>
            </div>

            <div style="margin-top: 16px;">
              <span class="metric-large" id="water-page-curr">${today.waterMl.toLocaleString()}</span>
              <span class="metric-unit">/ ${today.waterTargetMl.toLocaleString()} ml</span>
            </div>

            <!-- Quick Add Grid -->
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; width: 100%; margin-top: 24px;">
              <button class="btn btn--subtle btn-add-water-page" data-amt="150">☕ +150ml</button>
              <button class="btn btn--subtle btn-add-water-page" data-amt="250">🥛 +250ml</button>
              <button class="btn btn--subtle btn-add-water-page" data-amt="500">🍼 +500ml</button>
              <button class="btn btn--subtle btn-add-water-page" data-amt="1000">🍶 +1000ml</button>
            </div>
          </div>

          <!-- Hydration Timeline & Settings -->
          <div class="card-nl">
            <div class="card-header-nl">
              <div>
                <span class="card-tag">Intake Log</span>
                <h3 class="card-heading">Today's Hydration Timeline</h3>
              </div>
              <span class="pill-badge pill-badge--blue">6 Logs Today</span>
            </div>

            <!-- Log Entries List -->
            <div style="display: flex; flex-direction: column; gap: 10px; max-height: 220px; overflow-y: auto;" id="water-timeline-list">
              <div class="med-item" style="background-color: var(--bg-surface-subtle);">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span class="pill-badge pill-badge--blue">💧 +500ml</span>
                  <span style="font-size: 12px; font-weight: 700; color: var(--text-ink);">Post-lunch Water Bottle</span>
                </div>
                <span style="font-size: 11px; color: var(--text-muted);">13:30 PM</span>
              </div>
              <div class="med-item" style="background-color: var(--bg-surface-subtle);">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span class="pill-badge pill-badge--blue">💧 +250ml</span>
                  <span style="font-size: 12px; font-weight: 700; color: var(--text-ink);">Mid-morning Glass</span>
                </div>
                <span style="font-size: 11px; color: var(--text-muted);">11:15 AM</span>
              </div>
              <div class="med-item" style="background-color: var(--bg-surface-subtle);">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span class="pill-badge pill-badge--blue">💧 +500ml</span>
                  <span style="font-size: 12px; font-weight: 700; color: var(--text-ink);">Morning Warm Water</span>
                </div>
                <span style="font-size: 11px; color: var(--text-muted);">07:30 AM</span>
              </div>
            </div>

            <!-- Custom Input Strip -->
            <div class="card-footer-nl" style="display: flex; gap: 8px;">
              <input type="number" id="input-custom-water" placeholder="Custom ml (e.g. 350)" style="flex: 1; padding: 8px 12px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); background-color: var(--bg-surface-subtle); font-size: 13px; color: var(--text-ink);" min="50" max="2000" step="50"/>
              <button class="btn btn--ink" id="btn-add-custom-water">Add Log</button>
            </div>
          </div>
        </div>
      </section>
    `;

    this.bindEvents(container);
  },

  bindEvents(container) {
    container.querySelectorAll('.btn-add-water-page').forEach((btn) => {
      btn.addEventListener('click', () => {
        const amt = parseInt(btn.getAttribute('data-amt'), 10) || 250;
        this.logWater(amt, container);
      });
    });

    const customBtn = container.querySelector('#btn-add-custom-water');
    const customInput = container.querySelector('#input-custom-water');
    if (customBtn && customInput) {
      customBtn.addEventListener('click', () => {
        const amt = parseInt(customInput.value, 10);
        if (amt && amt > 0) {
          this.logWater(amt, container);
          customInput.value = '';
        } else {
          Toast.show({ title: 'Invalid Amount', message: 'Please enter valid water amount in ml.', type: 'warning' });
        }
      });
    }

    const chimeBtn = container.querySelector('#btn-test-chime');
    if (chimeBtn) {
      chimeBtn.addEventListener('click', () => {
        this.playChime();
        Toast.show({ title: 'Reminder Chime Fired', message: 'Time to drink a fresh glass of water! 💧', type: 'info' });
      });
    }
  },

  logWater(amountMl, container) {
    const state = AppState.getState();
    const newTotal = state.today.waterMl + amountMl;
    const newPercent = Math.min(100, Math.round((newTotal / state.today.waterTargetMl) * 100));

    AppState.setState({
      today: { ...state.today, waterMl: newTotal }
    }, 'water:updated');

    const currEl = container.querySelector('#water-page-curr');
    if (currEl) currEl.textContent = newTotal.toLocaleString();

    const percentEl = container.querySelector('#water-page-percent');
    if (percentEl) percentEl.textContent = `${newPercent}%`;

    const ringEl = container.querySelector('#water-page-ring');
    if (ringEl) ringEl.setAttribute('stroke-dasharray', `${newPercent}, 100`);

    const timeline = container.querySelector('#water-timeline-list');
    if (timeline) {
      const entry = document.createElement('div');
      entry.className = 'med-item';
      entry.style.backgroundColor = 'var(--bg-surface-subtle)';
      entry.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <span class="pill-badge pill-badge--blue">💧 +${amountMl}ml</span>
          <span style="font-size: 12px; font-weight: 700; color: var(--text-ink);">Logged Intake</span>
        </div>
        <span style="font-size: 11px; color: var(--text-muted);">Just now</span>
      `;
      timeline.prepend(entry);
    }

    Toast.show({
      title: 'Water Logged',
      message: `+${amountMl}ml recorded. Total: ${newTotal.toLocaleString()} ml (${newPercent}%)`,
      type: 'success'
    });
  },

  playChime() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5 note
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5 note
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch (e) {
      console.warn('Web Audio not allowed without user interaction', e);
    }
  }
};
