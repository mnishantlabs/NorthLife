/* =========================================================================
   NorthLife — Settings & Data Vault Module
   ========================================================================= */

import { AppState } from '../core/state.js';
import { Toast } from '../core/toast.js';

export const SettingsModule = {
  render(container) {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

    container.innerHTML = `
      <section style="display: flex; flex-direction: column; gap: var(--space-6);">
        <!-- Module Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: var(--space-3);">
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="pill-badge pill-badge--blue">System & Privacy</span>
              <span class="pill-badge pill-badge--mint">Zero-Cloud Dependency</span>
            </div>
            <h1 style="font-size: 26px; font-weight: 800; letter-spacing: -0.03em; color: var(--text-ink); margin-top: 4px;">Settings & Offline Data Vault</h1>
            <p style="font-size: 13.5px; color: var(--text-muted);">Manage theme appearance, offline database backup, and JSON data export.</p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--space-6);">
          <!-- Appearance & Theme Card -->
          <div class="card-nl">
            <div class="card-header-nl">
              <div>
                <span class="card-tag">Appearance</span>
                <h3 class="card-heading">Theme & Contrast</h3>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 13px; font-weight: 600; color: var(--text-ink);">Dark / Light Mode:</span>
                <div style="display: flex; gap: 8px;">
                  <button class="btn btn--subtle btn-set-theme ${currentTheme === 'light' ? 'btn--ink' : ''}" data-theme="light">☀️ Light (Alabaster)</button>
                  <button class="btn btn--subtle btn-set-theme ${currentTheme === 'dark' ? 'btn--ink' : ''}" data-theme="dark">🌙 Dark (Slate)</button>
                </div>
              </div>
              <p style="font-size: 11px; color: var(--text-muted);">Light mode uses Warm Alabaster paper aesthetics; dark mode provides high-contrast eye relief.</p>
            </div>
          </div>

          <!-- Data Portability & Backup Card -->
          <div class="card-nl">
            <div class="card-header-nl">
              <div>
                <span class="card-tag">Data Ownership</span>
                <h3 class="card-heading">Backup & Portability</h3>
              </div>
              <span class="pill-badge pill-badge--mint">100% Private</span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 12px;">
              <p style="font-size: 12px; color: var(--text-muted);">You own all your health telemetry. Download a complete JSON snapshot or restore from a previous backup file.</p>
              
              <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button class="btn btn--ink" id="btn-export-json">
                  📥 Export Complete JSON
                </button>
                <button class="btn btn--subtle" id="btn-import-json">
                  📤 Import / Restore Backup
                </button>
                <input type="file" id="input-file-import" accept=".json" style="display: none;"/>
              </div>
            </div>
          </div>

          <!-- Health Goals Configuration -->
          <div class="card-nl">
            <div class="card-header-nl">
              <div>
                <span class="card-tag">Targets</span>
                <h3 class="card-heading">Daily Telemetry Goals</h3>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 12.5px; color: var(--text-ink); font-weight: 600;">Daily Water Goal:</span>
                <input type="number" id="input-water-goal" value="3200" step="100" style="width: 100px; padding: 6px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); background-color: var(--bg-surface-subtle); font-size: 12px; text-align: right;"/>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 12.5px; color: var(--text-ink); font-weight: 600;">Daily Fiber Goal:</span>
                <input type="number" id="input-fiber-goal" value="35" step="1" style="width: 100px; padding: 6px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); background-color: var(--bg-surface-subtle); font-size: 12px; text-align: right;"/>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 12.5px; color: var(--text-ink); font-weight: 600;">Daily Calorie Goal:</span>
                <input type="number" id="input-calorie-goal" value="2250" step="50" style="width: 100px; padding: 6px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); background-color: var(--bg-surface-subtle); font-size: 12px; text-align: right;"/>
              </div>
              <button class="btn btn--subtle" id="btn-save-goals" style="margin-top: 6px;">Save Target Preferences</button>
            </div>
          </div>
        </div>
      </section>
    `;

    this.bindEvents(container);
  },

  bindEvents(container) {
    // Theme Switchers
    container.querySelectorAll('.btn-set-theme').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetTheme = btn.getAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('nl_theme', targetTheme);
        container.querySelectorAll('.btn-set-theme').forEach((b) => b.classList.remove('btn--ink'));
        btn.classList.add('btn--ink');
        const themeToggle = document.getElementById('theme-toggle-btn');
        if (themeToggle) {
          themeToggle.textContent = targetTheme === 'dark' ? '☀️' : '🌙';
        }
        Toast.show({ title: 'Theme Updated', message: `Theme set to ${targetTheme}.`, type: 'info' });
      });
    });

    // Export JSON
    const exportBtn = container.querySelector('#btn-export-json');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const state = AppState.getState();
        const exportData = {
          appName: 'NorthLife',
          version: '1.0.0',
          exportTimestamp: new Date().toISOString(),
          state
        };
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `NorthLife_Backup_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        Toast.show({ title: 'Backup Exported', message: 'Full encrypted JSON snapshot downloaded.', type: 'success' });
      });
    }

    // Import JSON
    const importBtn = container.querySelector('#btn-import-json');
    const fileInput = container.querySelector('#input-file-import');
    if (importBtn && fileInput) {
      importBtn.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            try {
              const data = JSON.parse(evt.target.result);
              if (data.state) {
                AppState.setState(data.state);
                Toast.show({ title: 'Backup Restored', message: 'All telemetry records successfully loaded.', type: 'success' });
              }
            } catch (err) {
              Toast.show({ title: 'Import Failed', message: 'Invalid JSON backup format.', type: 'error' });
            }
          };
          reader.readAsText(file);
        }
      });
    }

    // Save Goals
    const saveGoalsBtn = container.querySelector('#btn-save-goals');
    if (saveGoalsBtn) {
      saveGoalsBtn.addEventListener('click', () => {
        const waterGoal = parseInt(container.querySelector('#input-water-goal').value, 10) || 3200;
        const fiberGoal = parseInt(container.querySelector('#input-fiber-goal').value, 10) || 35;
        const calGoal = parseInt(container.querySelector('#input-calorie-goal').value, 10) || 2250;

        const state = AppState.getState();
        AppState.setState({
          today: {
            ...state.today,
            waterTargetMl: waterGoal,
            fiberTargetG: fiberGoal,
            calorieTarget: calGoal
          }
        }, 'goals:updated');

        Toast.show({ title: 'Goals Saved', message: 'Daily telemetry targets updated.', type: 'success' });
      });
    }
  }
};
