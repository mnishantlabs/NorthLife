/* =========================================================================
   NorthLife — Diet & Fiber Planner Module
   ========================================================================= */

import { AppState } from '../core/state.js';
import { Toast } from '../core/toast.js';

export const DietModule = {
  render(container) {
    const state = AppState.getState();
    const today = state.today;
    const fiberPercent = Math.min(100, Math.round((today.fiberG / today.fiberTargetG) * 100));

    container.innerHTML = `
      <section style="display: flex; flex-direction: column; gap: var(--space-6);">
        <!-- Module Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: var(--space-3);">
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="pill-badge pill-badge--butter">Nutrition & Fiber</span>
              <span class="pill-badge pill-badge--mint">${today.fiberG}g / ${today.fiberTargetG}g Fiber (${fiberPercent}%)</span>
            </div>
            <h1 style="font-size: 26px; font-weight: 800; letter-spacing: -0.03em; color: var(--text-ink); margin-top: 4px;">Dietary Nutrition & Fiber Planner</h1>
            <p style="font-size: 13.5px; color: var(--text-muted);">High dietary soluble and insoluble fiber is the primary driver of healthy bowel motility.</p>
          </div>
          <button class="btn btn--ink" id="btn-open-meal-form">
            + Log New Meal
          </button>
        </div>

        <!-- Fiber & Calorie Macro Focus Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--space-6);">
          <!-- Fiber Goal Card -->
          <div class="card-nl">
            <div class="card-header-nl">
              <div>
                <span class="card-tag">Digestive Essential</span>
                <h3 class="card-heading">Daily Fiber Target</h3>
              </div>
              <span class="pill-badge pill-badge--mint" id="diet-fiber-badge">${fiberPercent}% Achieved</span>
            </div>

            <div style="padding: 12px 0;">
              <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <span class="metric-large" id="diet-fiber-curr">${today.fiberG}g</span>
                <span class="metric-unit">Target: ${today.fiberTargetG}g / day</span>
              </div>
              <!-- Fiber Progress Bar -->
              <div class="macro-track" style="height: 10px; margin-top: 12px;">
                <div id="diet-fiber-bar" style="height: 100%; width: ${fiberPercent}%; background-color: var(--pastel-mint-accent); border-radius: var(--radius-full);"></div>
              </div>
            </div>

            <div class="card-footer-nl" style="font-size: 12px; color: var(--text-muted);">
              💡 <strong>Fiber Tip:</strong> Oats, psyllium husk, chia seeds, and leafy greens promote smooth Type 3-4 stools.
            </div>
          </div>

          <!-- Quick Log Meal Form Card -->
          <div class="card-nl">
            <div class="card-header-nl">
              <div>
                <span class="card-tag">Meal Logger</span>
                <h3 class="card-heading">Quick Add Meal</h3>
              </div>
            </div>

            <form id="form-log-meal" style="display: flex; flex-direction: column; gap: 10px;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <select id="meal-type-select" style="padding: 8px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); background-color: var(--bg-surface-subtle); font-size: 12px; font-weight: 600;">
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="snack">Snack</option>
                </select>
                <input type="number" id="meal-calories" placeholder="Calories (kcal)" style="padding: 8px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); background-color: var(--bg-surface-subtle); font-size: 12px;" required/>
              </div>

              <input type="text" id="meal-items" placeholder="Food items (e.g. 2 Oats Rotis, Dal, Salad)" style="padding: 8px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); background-color: var(--bg-surface-subtle); font-size: 12px;" required/>

              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;">
                <input type="number" id="meal-carbs" placeholder="Carbs (g)" style="padding: 6px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); background-color: var(--bg-surface-subtle); font-size: 11px;"/>
                <input type="number" id="meal-protein" placeholder="Prot (g)" style="padding: 6px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); background-color: var(--bg-surface-subtle); font-size: 11px;"/>
                <input type="number" id="meal-fats" placeholder="Fats (g)" style="padding: 6px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); background-color: var(--bg-surface-subtle); font-size: 11px;"/>
                <input type="number" id="meal-fiber" placeholder="Fiber (g)" style="padding: 6px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); background-color: var(--bg-surface-subtle); font-size: 11px; font-weight: 700; color: var(--pastel-mint-accent);"/>
              </div>

              <button type="submit" class="btn btn--ink" style="width: 100%; margin-top: 4px;">Save Meal Entry</button>
            </form>
          </div>
        </div>

        <!-- Today's Logged Meals History Table -->
        <div class="card-nl">
          <div class="card-header-nl">
            <div>
              <span class="card-tag">Food Diary</span>
              <h3 class="card-heading">Logged Meals Today</h3>
            </div>
            <span class="pill-badge pill-badge--butter">3 Meals</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;" id="diet-meals-list">
            <div class="med-item" style="background-color: var(--bg-surface-subtle);">
              <div style="display: flex; align-items: center; gap: 12px;">
                <span class="pill-badge pill-badge--butter">Lunch</span>
                <div style="display: flex; flex-direction: column;">
                  <span style="font-size: 13px; font-weight: 700; color: var(--text-ink);">Quinoa Bowl, Roasted Chickpeas, Spinach Salad</span>
                  <span style="font-size: 11px; color: var(--text-muted);">620 kcal • 14g Fiber • 22g Protein</span>
                </div>
              </div>
              <span style="font-size: 11px; color: var(--text-muted);">13:15 PM</span>
            </div>

            <div class="med-item" style="background-color: var(--bg-surface-subtle);">
              <div style="display: flex; align-items: center; gap: 12px;">
                <span class="pill-badge pill-badge--butter">Breakfast</span>
                <div style="display: flex; flex-direction: column;">
                  <span style="font-size: 13px; font-weight: 700; color: var(--text-ink);">Steel Cut Rolled Oats + Chia Seeds + Almonds</span>
                  <span style="font-size: 11px; color: var(--text-muted);">450 kcal • 11g Fiber • 16g Protein</span>
                </div>
              </div>
              <span style="font-size: 11px; color: var(--text-muted);">08:30 AM</span>
            </div>
          </div>
        </div>
      </section>
    `;

    this.bindEvents(container);
  },

  bindEvents(container) {
    const form = container.querySelector('#form-log-meal');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const type = container.querySelector('#meal-type-select').value;
        const items = container.querySelector('#meal-items').value;
        const calories = parseInt(container.querySelector('#meal-calories').value, 10) || 0;
        const fiber = parseInt(container.querySelector('#meal-fiber').value, 10) || 0;
        const protein = parseInt(container.querySelector('#meal-protein').value, 10) || 0;

        const state = AppState.getState();
        const newCalories = state.today.calories + calories;
        const newFiber = state.today.fiberG + fiber;
        const newFiberPercent = Math.min(100, Math.round((newFiber / state.today.fiberTargetG) * 100));

        AppState.setState({
          today: { ...state.today, calories: newCalories, fiberG: newFiber }
        }, 'diet:updated');

        const fiberCurrEl = container.querySelector('#diet-fiber-curr');
        if (fiberCurrEl) fiberCurrEl.textContent = `${newFiber}g`;

        const fiberBarEl = container.querySelector('#diet-fiber-bar');
        if (fiberBarEl) fiberBarEl.style.width = `${newFiberPercent}%`;

        const fiberBadgeEl = container.querySelector('#diet-fiber-badge');
        if (fiberBadgeEl) fiberBadgeEl.textContent = `${newFiberPercent}% Achieved`;

        // Append to list
        const list = container.querySelector('#diet-meals-list');
        if (list) {
          const row = document.createElement('div');
          row.className = 'med-item';
          row.style.backgroundColor = 'var(--bg-surface-subtle)';
          row.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
              <span class="pill-badge pill-badge--butter">${type.toUpperCase()}</span>
              <div style="display: flex; flex-direction: column;">
                <span style="font-size: 13px; font-weight: 700; color: var(--text-ink);">${items}</span>
                <span style="font-size: 11px; color: var(--text-muted);">${calories} kcal • ${fiber}g Fiber • ${protein}g Protein</span>
              </div>
            </div>
            <span style="font-size: 11px; color: var(--text-muted);">Just now</span>
          `;
          list.prepend(row);
        }

        form.reset();
        Toast.show({
          title: 'Meal Saved',
          message: `${items} logged (+${fiber}g Fiber, +${calories} kcal).`,
          type: 'success'
        });
      });
    }
  }
};
