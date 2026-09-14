/* =========================================================================
   NorthLife — Habit Routine Module
   ========================================================================= */

import { AppState } from '../core/state.js';
import { Toast } from '../core/toast.js';

export const HabitsModule = {
  render(container) {
    const state = AppState.getState();
    const today = state.today;

    container.innerHTML = `
      <section style="display: flex; flex-direction: column; gap: var(--space-6);">
        <!-- Module Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: var(--space-3);">
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="pill-badge pill-badge--coral">Habit Streaks</span>
              <span class="pill-badge pill-badge--mint" id="habits-page-score">${today.habitsDone} of ${today.habitsTotal} Completed Today</span>
            </div>
            <h1 style="font-size: 26px; font-weight: 800; letter-spacing: -0.03em; color: var(--text-ink); margin-top: 4px;">Daily Habit & Routine Loops</h1>
            <p style="font-size: 13.5px; color: var(--text-muted);">Consistency in morning sunlight, pelvic floor exercise, and walking creates lifelong health resilience.</p>
          </div>
          <button class="btn btn--ink" id="btn-add-habit-modal">
            + Add Custom Habit
          </button>
        </div>

        <!-- Habits List Card -->
        <div class="card-nl">
          <div class="card-header-nl">
            <div>
              <span class="card-tag">Routine Checklist</span>
              <h3 class="card-heading">Today's Habits</h3>
            </div>
            <span class="pill-badge pill-badge--butter">🔥 14-Day Streak</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;" id="habits-master-list">
            <!-- Habit 1 -->
            <div class="habit-item habit-item--done habit-row-toggle" data-id="1">
              <div class="habit-check-circle">✓</div>
              <div style="display: flex; justify-content: space-between; align-items: center; flex: 1;">
                <div style="display: flex; flex-direction: column;">
                  <span class="habit-text-struck">Morning Sunlight & 20-min Walk</span>
                  <span style="font-size: 10px; color: var(--text-muted);">Circadian reset • 07:45 AM</span>
                </div>
                <span class="pill-badge pill-badge--mint">🔥 14d</span>
              </div>
            </div>

            <!-- Habit 2 -->
            <div class="habit-item habit-item--done habit-row-toggle" data-id="2">
              <div class="habit-check-circle">✓</div>
              <div style="display: flex; justify-content: space-between; align-items: center; flex: 1;">
                <div style="display: flex; flex-direction: column;">
                  <span class="habit-text-struck">35g Daily Fiber Target</span>
                  <span style="font-size: 10px; color: var(--text-muted);">Dietary support</span>
                </div>
                <span class="pill-badge pill-badge--mint">🔥 8d</span>
              </div>
            </div>

            <!-- Habit 3 -->
            <div class="habit-item habit-item--done habit-row-toggle" data-id="3">
              <div class="habit-check-circle">✓</div>
              <div style="display: flex; justify-content: space-between; align-items: center; flex: 1;">
                <div style="display: flex; flex-direction: column;">
                  <span class="habit-text-struck">Standing Desk (3 hrs+)</span>
                  <span style="font-size: 10px; color: var(--text-muted);">Reduces rectal venous pressure</span>
                </div>
                <span class="pill-badge pill-badge--mint">🔥 12d</span>
              </div>
            </div>

            <!-- Habit 4 -->
            <div class="habit-item habit-item--done habit-row-toggle" data-id="4">
              <div class="habit-check-circle">✓</div>
              <div style="display: flex; justify-content: space-between; align-items: center; flex: 1;">
                <div style="display: flex; flex-direction: column;">
                  <span class="habit-text-struck">Drink 500ml Warm Water on Waking</span>
                  <span style="font-size: 10px; color: var(--text-muted);">Gastrocolic reflex stimulation</span>
                </div>
                <span class="pill-badge pill-badge--mint">🔥 21d</span>
              </div>
            </div>

            <!-- Habit 5 -->
            <div class="habit-item habit-row-toggle" data-id="5">
              <div style="width: 16px; height: 16px; border-radius: 50%; border: 2px solid var(--border-dark); flex-shrink: 0;"></div>
              <div style="display: flex; justify-content: space-between; align-items: center; flex: 1;">
                <div style="display: flex; flex-direction: column;">
                  <span style="font-size: 12px; font-weight: 700; color: var(--text-ink);">Evening Screen Off at 21:30</span>
                  <span style="font-size: 10px; color: var(--pastel-coral-accent); font-weight: 600;">Scheduled for 21:30 PM</span>
                </div>
                <span class="pill-badge pill-badge--neutral">🔥 4d</span>
              </div>
            </div>

            <!-- Habit 6 -->
            <div class="habit-item habit-row-toggle" data-id="6">
              <div style="width: 16px; height: 16px; border-radius: 50%; border: 2px solid var(--border-dark); flex-shrink: 0;"></div>
              <div style="display: flex; justify-content: space-between; align-items: center; flex: 1;">
                <div style="display: flex; flex-direction: column;">
                  <span style="font-size: 12px; font-weight: 700; color: var(--text-ink);">10-Min Vagus Nerve Breathwork</span>
                  <span style="font-size: 10px; color: var(--text-muted);">Parasympathetic activation</span>
                </div>
                <span class="pill-badge pill-badge--neutral">🔥 6d</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    this.bindEvents(container);
  },

  bindEvents(container) {
    container.querySelectorAll('.habit-row-toggle').forEach((row) => {
      row.addEventListener('click', () => {
        const isDone = row.classList.contains('habit-item--done');
        const titleEl = row.querySelector('.habit-text-struck') || row.querySelector('span[style*="font-weight: 700"]');
        const title = titleEl?.textContent || 'Habit';

        if (isDone) {
          row.classList.remove('habit-item--done');
          row.querySelector('.habit-check-circle')?.replaceWith(
            Object.assign(document.createElement('div'), {
              style: 'width: 16px; height: 16px; border-radius: 50%; border: 2px solid var(--border-dark); flex-shrink: 0;'
            })
          );
          if (titleEl) {
            titleEl.className = '';
            titleEl.style = 'font-size: 12px; font-weight: 700; color: var(--text-ink);';
          }
          Toast.show({ title: 'Habit Pending', message: `${title} set to pending.`, type: 'info' });
        } else {
          row.classList.add('habit-item--done');
          const circle = row.querySelector('div[style*="border-radius: 50%"]');
          if (circle) {
            circle.replaceWith(
              Object.assign(document.createElement('div'), {
                className: 'habit-check-circle',
                textContent: '✓'
              })
            );
          }
          if (titleEl) {
            titleEl.className = 'habit-text-struck';
          }
          Toast.show({ title: 'Habit Completed', message: `Great job on ${title}! 🔥`, type: 'success' });
        }
      });
    });

    const addBtn = container.querySelector('#btn-add-habit-modal');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const name = prompt('Enter new routine name (e.g. 15-min Post-meal Walk):');
        if (name) {
          const list = container.querySelector('#habits-master-list');
          if (list) {
            const newRow = document.createElement('div');
            newRow.className = 'habit-item habit-row-toggle';
            newRow.innerHTML = `
              <div style="width: 16px; height: 16px; border-radius: 50%; border: 2px solid var(--border-dark); flex-shrink: 0;"></div>
              <div style="display: flex; justify-content: space-between; align-items: center; flex: 1;">
                <div style="display: flex; flex-direction: column;">
                  <span style="font-size: 12px; font-weight: 700; color: var(--text-ink);">${name}</span>
                  <span style="font-size: 10px; color: var(--text-muted);">Custom Habit</span>
                </div>
                <span class="pill-badge pill-badge--neutral">🔥 New</span>
              </div>
            `;
            list.appendChild(newRow);
            Toast.show({ title: 'Habit Added', message: `${name} added to your daily loop.`, type: 'success' });
          }
        }
      });
    }
  }
};
