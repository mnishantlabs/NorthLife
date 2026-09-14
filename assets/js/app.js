/**
 * NorthLife — Personal Health Operating System
 * Clinical Titanium Edition (Instrument Serif + Symmetrical Metric Cards)
 * Architecture: Pure Native JS, Offline-First IndexedDB Vault
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. ICONS REGISTRY (Tabler SVG Standard)
  // =========================================================================
  const Icons = {
    overview: `<svg class="tabler-icon" viewBox="0 0 24 24"><path d="M4 4h6v8h-6z"></path><path d="M4 16h6v4h-6z"></path><path d="M14 12h6v8h-6z"></path><path d="M14 4h6v4h-6z"></path></svg>`,
    timeline: `<svg class="tabler-icon" viewBox="0 0 24 24"><path d="M12 8v4l2 2"></path><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path></svg>`,
    water: `<svg class="tabler-icon" viewBox="0 0 24 24"><path d="M7.502 19.423c2.602 2.105 6.394 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546z"></path></svg>`,
    diet: `<svg class="tabler-icon" viewBox="0 0 24 24"><path d="M12 4c-3.2 0 -6 2.8 -6 7c0 5 3 9 6 9s6 -4 6 -9c0 -4.2 -2.8 -7 -6 -7z"></path><path d="M12 4v-2"></path><path d="M9 12a3 3 0 0 0 6 0"></path></svg>`,
    bowel: `<svg class="tabler-icon" viewBox="0 0 24 24"><path d="M3 12h4l3 8l4 -16l3 8h4"></path></svg>`,
    vitals: `<svg class="tabler-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path></svg>`,
    habits: `<svg class="tabler-icon" viewBox="0 0 24 24"><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path><path d="M9 14l2 2l4 -4"></path></svg>`,
    meds: `<svg class="tabler-icon" viewBox="0 0 24 24"><path d="M4.5 12.5l8 -8a4.95 4.95 0 0 1 7 7l-8 8a4.95 4.95 0 0 1 -7 -7"></path></svg>`,
    doctor: `<svg class="tabler-icon" viewBox="0 0 24 24"><path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>`,
    settings: `<svg class="tabler-icon" viewBox="0 0 24 24"><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path></svg>`,
    plus: `<svg class="tabler-icon tabler-icon--sm" viewBox="0 0 24 24"><path d="M12 5l0 14"></path><path d="M5 12l14 0"></path></svg>`,
    check: `<svg class="tabler-icon tabler-icon--sm" viewBox="0 0 24 24"><path d="M5 12l5 5l10 -10"></path></svg>`,
    trash: `<svg class="tabler-icon tabler-icon--sm" viewBox="0 0 24 24"><path d="M4 7l16 0"></path><path d="M10 11l0 6"></path><path d="M14 11l0 6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path></svg>`,
    edit: `<svg class="tabler-icon tabler-icon--sm" viewBox="0 0 24 24"><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path></svg>`,
    search: `<svg class="tabler-icon tabler-icon--sm" viewBox="0 0 24 24"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>`,
    print: `<svg class="tabler-icon tabler-icon--sm" viewBox="0 0 24 24"><path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2"></path><path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4"></path><path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z"></path></svg>`
  };

  // =========================================================================
  // 2. DATABASE & COMMON ENTRY MODEL (IndexedDB Vault)
  // =========================================================================
  const DB_NAME = 'northlife_db';
  const DB_VERSION = 3;
  let dbInstance = null;

  async function initDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        const stores = ['health_entries', 'custom_metrics', 'recurring_schedules', 'meal_templates', 'habits', 'medications', 'user_settings', 'water_logs', 'diet_logs', 'bowel_logs'];
        stores.forEach(s => {
          if (!db.objectStoreNames.contains(s)) db.createObjectStore(s, { keyPath: 'id' });
        });
      };
      req.onsuccess = async (e) => {
        dbInstance = e.target.result;
        await autoMigrateLegacyLogs();
        await ensureSeedData();
        resolve(dbInstance);
      };
      req.onerror = (e) => reject(e.target.error);
    });
  }

  async function getAll(storeName) {
    if (!dbInstance) await initDB();
    return new Promise((resolve, reject) => {
      const tx = dbInstance.transaction([storeName], 'readonly');
      const store = tx.objectStore(storeName);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }

  async function putItem(storeName, item) {
    if (!dbInstance) await initDB();
    return new Promise((resolve, reject) => {
      const tx = dbInstance.transaction([storeName], 'readwrite');
      const store = tx.objectStore(storeName);
      const req = store.put(item);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function deleteItem(storeName, id) {
    if (!dbInstance) await initDB();
    return new Promise((resolve, reject) => {
      const tx = dbInstance.transaction([storeName], 'readwrite');
      const store = tx.objectStore(storeName);
      const req = store.delete(id);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }

  async function autoMigrateLegacyLogs() {
    const existing = await getAll('health_entries');
    if (existing.length > 0) return;

    const water = await getAll('water_logs');
    const diet = await getAll('diet_logs');
    const bowel = await getAll('bowel_logs');

    for (const w of water) {
      await putItem('health_entries', {
        id: w.id,
        type: 'water',
        title: `+${w.amount}ml Water`,
        category: 'Hydration',
        value: Number(w.amount),
        unit: 'ml',
        date: w.date,
        timestamp: w.timestamp,
        tags: ['#hydration'],
        notes: w.note || '',
        attachments: []
      });
    }

    for (const d of diet) {
      await putItem('health_entries', {
        id: d.id,
        type: 'food',
        title: d.name,
        category: d.type || 'Meal',
        value: Number(d.fiber) || 0,
        unit: 'g fiber',
        date: d.date,
        timestamp: d.timestamp,
        tags: ['#nutrition'],
        notes: `Protein: ${d.protein || 0}g, Calories: ${d.calories || 0} kcal`,
        attachments: [],
        meta: { protein: Number(d.protein) || 0, calories: Number(d.calories) || 0, fiber: Number(d.fiber) || 0 }
      });
    }

    for (const b of bowel) {
      await putItem('health_entries', {
        id: b.id,
        type: 'bowel',
        title: `Bowel Movement (Type ${b.type})`,
        category: 'Digestive Record',
        value: Number(b.type),
        unit: 'Bristol Scale',
        date: b.date,
        timestamp: b.timestamp,
        tags: ['#bowel'],
        notes: b.note || '',
        attachments: [],
        meta: { bristolType: Number(b.type) }
      });
    }
  }

  async function ensureSeedData() {
    const entries = await getAll('health_entries');
    const today = getTodayDateString();

    if (entries.length === 0) {
      const seedEntries = [
        {
          id: 'entry_seed_1',
          type: 'water',
          title: '+250ml Water',
          category: 'Hydration',
          value: 250,
          unit: 'ml',
          date: today,
          timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
          tags: ['#hydration'],
          notes: 'Glass of water with lemon.',
          attachments: []
        },
        {
          id: 'entry_seed_2',
          type: 'bowel',
          title: 'Bowel Movement (Type 2)',
          category: 'Digestive Record',
          value: 2,
          unit: 'Bristol Scale',
          date: today,
          timestamp: new Date(Date.now() - 3600000 * 3).toISOString(),
          tags: ['#bowel'],
          notes: 'Logged at 07:18 PM',
          attachments: [],
          meta: { bristolType: 2 }
        }
      ];

      for (const item of seedEntries) {
        await putItem('health_entries', item);
      }
    }

    const metrics = await getAll('custom_metrics');
    if (metrics.length === 0) {
      const defaultMetrics = [
        { id: 'metric_glucose', name: 'Fasting Blood Glucose', unit: 'mg/dL', category: 'Metabolic', target: '70-99 mg/dL' },
        { id: 'metric_bp', name: 'Blood Pressure', unit: 'mmHg', category: 'Cardio', target: '< 120/80 mmHg' },
        { id: 'metric_sleep', name: 'Sleep Quality', unit: '/10', category: 'Recovery', target: '8-10' },
        { id: 'metric_stress', name: 'Stress Level', unit: '/10', category: 'Mental Health', target: '< 4' }
      ];
      for (const m of defaultMetrics) {
        await putItem('custom_metrics', m);
      }
    }

    const habits = await getAll('habits');
    if (habits.length === 0) {
      const defaultHabits = [
        { id: 'habit_sunlight', title: '15m Morning Sunlight', history: { [today]: true } },
        { id: 'habit_walk', title: '45m Brisk Walk', history: {} },
        { id: 'habit_reading', title: '20m Reading / Unwind', history: {} }
      ];
      for (const h of defaultHabits) {
        await putItem('habits', h);
      }
    }
  }

  // =========================================================================
  // 3. MODAL & TOAST MANAGERS
  // =========================================================================
  const Modal = {
    open(html) {
      const host = document.getElementById('modal-host');
      const content = document.getElementById('modal-content');
      if (!host || !content) return;
      content.innerHTML = html;
      host.classList.add('modal-overlay--open');
      host.setAttribute('aria-hidden', 'false');
    },
    close() {
      const host = document.getElementById('modal-host');
      if (!host) return;
      host.classList.remove('modal-overlay--open');
      host.setAttribute('aria-hidden', 'true');
    }
  };

  const ToastManager = {
    show(message, type = 'info', duration = 3000) {
      const container = document.getElementById('toast-container');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = 'rich-toast';
      toast.innerHTML = `
        <div class="toast-content-row">
          <div class="toast-icon-slot">
            ${type === 'success' ? Icons.check : Icons.overview}
          </div>
          <div class="toast-text-group">
            <span class="toast-title">${type.charAt(0).toUpperCase() + type.slice(1)}</span>
            <span class="toast-desc">${message}</span>
          </div>
          <button class="toast-close-btn" onclick="this.closest('.rich-toast').remove()">✕</button>
        </div>
        <div class="toast-progress-bar" style="animation-duration: ${duration}ms;"></div>
      `;
      container.appendChild(toast);
      requestAnimationFrame(() => toast.classList.add('rich-toast--visible'));
      setTimeout(() => {
        toast.classList.remove('rich-toast--visible');
        toast.classList.add('rich-toast--exit');
        setTimeout(() => toast.remove(), 250);
      }, duration);
    },

    showUndo(message, undoCallback, duration = 6000) {
      const container = document.getElementById('toast-container');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = 'rich-toast';
      toast.innerHTML = `
        <div class="toast-content-row">
          <div class="toast-icon-slot">${Icons.trash}</div>
          <div class="toast-text-group">
            <span class="toast-title">Entry Deleted</span>
            <span class="toast-desc">${message}</span>
          </div>
          <button class="btn btn--secondary btn--sm" id="btn-undo-action" style="margin-left: 4px;">Undo</button>
          <button class="toast-close-btn" onclick="this.closest('.rich-toast').remove()">✕</button>
        </div>
        <div class="toast-progress-bar" style="animation-duration: ${duration}ms;"></div>
      `;

      let undone = false;
      const undoBtn = toast.querySelector('#btn-undo-action');
      undoBtn.addEventListener('click', async () => {
        undone = true;
        toast.remove();
        if (typeof undoCallback === 'function') {
          await undoCallback();
          ToastManager.show('Restored successfully', 'success');
        }
      });

      container.appendChild(toast);
      requestAnimationFrame(() => toast.classList.add('rich-toast--visible'));
      setTimeout(() => {
        if (!undone && toast.parentNode) {
          toast.classList.remove('rich-toast--visible');
          toast.classList.add('rich-toast--exit');
          setTimeout(() => toast.remove(), 250);
        }
      }, duration);
    }
  };

  // =========================================================================
  // 4. UTILITIES
  // =========================================================================
  function getTodayDateString() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function formatDisplayTime(isoString) {
    if (!isoString) return '';
    const d = new Date(isoString);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function formatDisplayDate(isoString) {
    if (!isoString) return '';
    const d = new Date(isoString);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  function calculateHabitStreak(h) {
    if (!h || !h.history) return 0;
    let currentStreak = 0;
    let checkDate = new Date();
    
    const y = checkDate.getFullYear();
    const m = String(checkDate.getMonth() + 1).padStart(2, '0');
    const d = String(checkDate.getDate()).padStart(2, '0');
    const todayStr = `${y}-${m}-${d}`;
    
    if (!h.history[todayStr]) {
      checkDate.setDate(checkDate.getDate() - 1);
    }
    
    while (true) {
      const yStr = checkDate.getFullYear();
      const mStr = String(checkDate.getMonth() + 1).padStart(2, '0');
      const dStr = String(checkDate.getDate()).padStart(2, '0');
      const dateKey = `${yStr}-${mStr}-${dStr}`;
      if (h.history[dateKey]) {
        currentStreak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }
    return currentStreak;
  }

  // =========================================================================
  // 5. MAIN APPLICATION CONTROLLER
  // =========================================================================
  const App = {
    todayDate: getTodayDateString(),
    activeRoute: 'overview',
    userSettings: null,

    async init() {
      await initDB();
      await this.loadUserSettings();
      this.bindEvents();
      this.handleRoute();
      this.updateHeaderDate();
    },

    async loadUserSettings() {
      const settings = await getAll('user_settings');
      const profile = settings.find(s => s.id === 'profile');
      this.userSettings = profile || { name: 'Friend' };
      const avatarEl = document.getElementById('header-user-avatar');
      if (avatarEl && this.userSettings) {
        avatarEl.textContent = (this.userSettings.name || 'NL').substring(0, 2).toUpperCase();
      }
    },

    bindEvents() {
      window.addEventListener('hashchange', () => this.handleRoute());

      const themeToggle = document.getElementById('theme-toggle-btn');
      if (themeToggle) {
        themeToggle.addEventListener('click', () => this.toggleTheme());
      }

      const quickBtn = document.getElementById('btn-quick-entry');
      if (quickBtn) {
        quickBtn.addEventListener('click', () => this.triggerUniversalQuickLog());
      }

      window.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'l' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
          e.preventDefault();
          this.triggerUniversalQuickLog();
        }
        if (e.key === 'Escape') {
          Modal.close();
        }
      });
    },

    handleRoute() {
      const hash = window.location.hash.replace('#', '') || 'overview';
      this.activeRoute = hash;

      document.querySelectorAll('.nav-link').forEach(link => {
        const route = link.getAttribute('data-route') || link.getAttribute('href')?.replace('#', '');
        if (route === hash) {
          link.classList.add('nav-link--active');
        } else {
          link.classList.remove('nav-link--active');
        }
      });

      const breadcrumb = document.getElementById('breadcrumb-title');
      const titles = {
        overview: 'Overview',
        timeline: 'Universal Timeline',
        water: 'Water Tracker',
        diet: 'Nutrition & Fiber',
        bowel: 'Digestive Care',
        'custom-metrics': 'Custom Vitals',
        habits: 'Daily Habits',
        meds: 'Medications',
        'doctor-mode': 'Doctor Mode',
        settings: 'Settings & Vault'
      };
      if (breadcrumb) breadcrumb.textContent = titles[hash] || 'Overview';

      const container = document.getElementById('app-view');
      if (!container) return;

      switch (hash) {
        case 'overview':
          Views.renderOverview(container);
          break;
        case 'timeline':
          Views.renderTimeline(container);
          break;
        case 'water':
          Views.renderWater(container);
          break;
        case 'diet':
          Views.renderDiet(container);
          break;
        case 'bowel':
          Views.renderBowel(container);
          break;
        case 'custom-metrics':
          Views.renderCustomMetrics(container);
          break;
        case 'habits':
          Views.renderHabits(container);
          break;
        case 'meds':
          Views.renderMeds(container);
          break;
        case 'doctor-mode':
          Views.renderDoctorMode(container);
          break;
        case 'settings':
          Views.renderSettings(container);
          break;
        default:
          Views.renderOverview(container);
          break;
      }
    },

    updateHeaderDate() {
      const dateEl = document.getElementById('header-date-text');
      if (dateEl) {
        const d = new Date();
        dateEl.textContent = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      }
    },

    toggleTheme() {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
    },

    async quickAddWater(amount = 250) {
      const item = {
        id: 'entry_' + Date.now(),
        type: 'water',
        title: `+${amount}ml Water`,
        category: 'Hydration',
        value: Number(amount),
        unit: 'ml',
        date: this.todayDate,
        timestamp: new Date().toISOString(),
        tags: ['#hydration'],
        notes: '',
        attachments: []
      };
      await putItem('health_entries', item);
      ToastManager.show(`Logged +${amount}ml Water`, 'success');
      this.handleRoute();
    },

    async deleteEntry(id) {
      const all = await getAll('health_entries');
      const item = all.find(e => e.id === id);
      if (!item) return;

      await deleteItem('health_entries', id);
      this.handleRoute();

      ToastManager.showUndo(`Deleted ${item.title}`, async () => {
        await putItem('health_entries', item);
        App.handleRoute();
      });
    },

    triggerUniversalQuickLog(defaultType = 'water') {
      Modal.open(`
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <strong style="font-size: 16px; color: var(--text-ink);">+ Log Health Record</strong>
            <button class="btn btn--ghost btn--icon-only" onclick="Modal.close()">✕</button>
          </div>

          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            <button type="button" class="btn btn--secondary btn--sm" onclick="App.setQuickLogType('water')">💧 Water</button>
            <button type="button" class="btn btn--secondary btn--sm" onclick="App.setQuickLogType('food')">🥗 Food</button>
            <button type="button" class="btn btn--secondary btn--sm" onclick="App.setQuickLogType('bowel')">🩺 Bowel</button>
            <button type="button" class="btn btn--secondary btn--sm" onclick="App.setQuickLogType('vitals')">📈 Vital</button>
            <button type="button" class="btn btn--secondary btn--sm" onclick="App.setQuickLogType('med')">💊 Rx / Med</button>
          </div>

          <form onsubmit="App.handleSaveQuickLog(event)" style="display: flex; flex-direction: column; gap: 12px; margin-top: 4px;">
            <input type="hidden" id="quick-entry-type" value="${defaultType}" />
            
            <div class="form-group-nl">
              <label class="form-label-nl">Title / Name</label>
              <input type="text" id="quick-entry-title" class="input-nl" placeholder="e.g. +250ml Water, Oatmeal, Glucose 95" required />
            </div>

            <div style="grid-template-columns: 1fr 1fr; gap: 10px; display: grid;">
              <div class="form-group-nl">
                <label class="form-label-nl">Metric Value</label>
                <input type="number" id="quick-entry-value" class="input-nl" placeholder="250" step="any" />
              </div>
              <div class="form-group-nl">
                <label class="form-label-nl">Unit</label>
                <input type="text" id="quick-entry-unit" class="input-nl" placeholder="ml, g fiber, mg/dL" />
              </div>
            </div>

            <div class="form-group-nl">
              <label class="form-label-nl">Clinical Notes</label>
              <textarea id="quick-entry-notes" class="textarea-nl" rows="2" placeholder="Context or doctor notes..."></textarea>
            </div>

            <div class="form-group-nl">
              <label class="form-label-nl">Tags (Space separated with #)</label>
              <input type="text" id="quick-entry-tags" class="input-nl" placeholder="#hydration #morning" />
            </div>

            <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 6px;">
              <button type="button" class="btn btn--secondary" onclick="Modal.close()">Cancel</button>
              <button type="submit" class="btn btn--primary">Save Entry</button>
            </div>
          </form>
        </div>
      `);
      this.setQuickLogType(defaultType);
    },

    setQuickLogType(type) {
      const typeInput = document.getElementById('quick-entry-type');
      if (typeInput) typeInput.value = type;

      const titleInput = document.getElementById('quick-entry-title');
      const valInput = document.getElementById('quick-entry-value');
      const unitInput = document.getElementById('quick-entry-unit');

      if (type === 'water') {
        if (titleInput) titleInput.value = '+250ml Water';
        if (valInput) valInput.value = 250;
        if (unitInput) unitInput.value = 'ml';
      } else if (type === 'food') {
        if (titleInput) titleInput.value = '';
        if (valInput) valInput.value = '';
        if (unitInput) unitInput.value = 'g fiber';
      } else if (type === 'bowel') {
        if (titleInput) titleInput.value = 'Bowel Movement (Type 4)';
        if (valInput) valInput.value = 4;
        if (unitInput) unitInput.value = 'Bristol Scale';
      } else if (type === 'vitals') {
        if (titleInput) titleInput.value = 'Fasting Blood Glucose';
        if (valInput) valInput.value = 95;
        if (unitInput) unitInput.value = 'mg/dL';
      } else if (type === 'med') {
        if (titleInput) titleInput.value = '';
        if (valInput) valInput.value = '';
        if (unitInput) unitInput.value = 'mg';
      }
    },

    async handleSaveQuickLog(e) {
      e.preventDefault();
      const type = document.getElementById('quick-entry-type').value || 'note';
      const title = document.getElementById('quick-entry-title').value.trim();
      const value = document.getElementById('quick-entry-value').value ? Number(document.getElementById('quick-entry-value').value) : undefined;
      const unit = document.getElementById('quick-entry-unit').value.trim() || undefined;
      const notes = document.getElementById('quick-entry-notes').value.trim();
      const rawTags = document.getElementById('quick-entry-tags').value.trim();
      const tags = rawTags ? rawTags.split(/\s+/).map(t => t.startsWith('#') ? t : '#' + t) : [];

      const item = {
        id: 'entry_' + Date.now(),
        type,
        title,
        category: type.charAt(0).toUpperCase() + type.slice(1),
        value,
        unit,
        date: App.todayDate,
        timestamp: new Date().toISOString(),
        tags,
        notes,
        attachments: []
      };

      await putItem('health_entries', item);
      Modal.close();
      ToastManager.show(`Recorded ${title}`, 'success');
      App.handleRoute();
    }
  };

  // =========================================================================
  // 6. VIEWS ENGINE (Exact Symmetrical Card System)
  // =========================================================================
  const Views = {
    // -----------------------------------------------------------------------
    // A. OVERVIEW / DASHBOARD (1:1 Match to Reference Image)
    // -----------------------------------------------------------------------
    async renderOverview(container) {
      const all = await getAll('health_entries');
      const today = App.todayDate;
      const todayEntries = all.filter(e => e.date === today);
      const habits = await getAll('habits');

      // Hydration
      const waterEntries = todayEntries.filter(e => e.type === 'water');
      const todayWater = waterEntries.reduce((sum, e) => sum + (Number(e.value) || 0), 0);
      const waterGoal = 3000;
      const waterLeft = Math.max(0, waterGoal - todayWater);
      const waterPct = Math.min(100, Math.round((todayWater / waterGoal) * 100));

      // Fiber / Nutrition
      const dietEntries = todayEntries.filter(e => e.type === 'food');
      const todayFiber = dietEntries.reduce((sum, e) => sum + (Number(e.meta?.fiber || e.value) || 0), 0);
      const fiberGoal = 30;
      const fiberLeft = Math.max(0, fiberGoal - todayFiber);
      const fiberPct = Math.min(100, Math.round((todayFiber / fiberGoal) * 100));

      // Bowel
      const bowelEntries = todayEntries.filter(e => e.type === 'bowel').sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      const lastBowel = bowelEntries.length ? bowelEntries[0] : null;
      const bowelType = lastBowel ? (lastBowel.meta?.bristolType || lastBowel.value || 2) : 2;

      // Habits
      const completedHabits = habits.filter(h => h.history && h.history[today]).length;
      const totalHabits = habits.length;
      const habitPct = totalHabits ? Math.round((completedHabits / totalHabits) * 100) : 0;
      const maxStreak = habits.length ? Math.max(...habits.map(h => calculateHabitStreak(h))) : 0;

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 24px;">
          
          <!-- Top Hero Card -->
          <div class="concept-hero-card">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
              <div>
                <span class="card-tag">DAILY HEALTH & LIVING</span>
                <h1 class="concept-title heading-serif" style="margin-top: 3px;">
                  Good day, ${App.userSettings?.name || 'Friend'}
                </h1>
                <p style="font-size: 13px; color: var(--text-muted); margin-top: 3px; max-width: 650px;">
                  You have logged ${todayWater}ml of water today (${waterPct}% of target), gut fiber is steady at ${todayFiber}g, and ${Math.max(0, totalHabits - completedHabits)} habit routines remaining for today.
                </p>
              </div>

              <div style="display: flex; gap: 8px;">
                <button class="btn btn--primary" onclick="App.quickAddWater(250)">
                  ${Icons.plus}
                  <span>+250ml Water</span>
                </button>
                <button class="btn btn--secondary" onclick="App.triggerUniversalQuickLog()">
                  ${Icons.plus}
                  <span>Log Activity</span>
                </button>
              </div>
            </div>

            <!-- Holistic Status Chips Strip -->
            <div class="status-strip-container" style="margin-top: 18px; padding-top: 14px;">
              <span class="status-strip-chip status-strip-chip--hydro">
                ${Icons.water} <strong>Water:</strong> <span class="stat-mono">${todayWater.toLocaleString()} / ${waterGoal.toLocaleString()} ml (${waterPct}%)</span>
              </span>
              <span class="status-strip-chip status-strip-chip--gut">
                ${Icons.diet} <strong>Fiber:</strong> <span class="stat-mono">${todayFiber} / ${fiberGoal} g (${fiberLeft > 0 ? fiberLeft + 'g left' : 'Optimal'})</span>
              </span>
              <span class="status-strip-chip">
                ${Icons.bowel} <strong>Digestion:</strong> ${lastBowel ? 'Type ' + bowelType + ' (Optimal)' : 'Type 2 (Optimal)'}
              </span>
              <span class="status-strip-chip status-strip-chip--amber">
                ${Icons.habits} <strong>Habits:</strong> <span class="stat-mono">${completedHabits} / ${totalHabits} Done</span>
              </span>
            </div>
          </div>

          <!-- Symmetrical 4-Card Grid (1:1 Match to Image) -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
            
            <!-- 1. Water Intake Card -->
            <div class="concept-card">
              <div class="card-header-nl">
                <div class="card-title-group">
                  <div class="card-icon-badge" style="color: var(--accent-hydro);">${Icons.water}</div>
                  <div>
                    <span class="card-tag">HYDRATION</span>
                    <span class="card-heading-serif">Water Intake</span>
                  </div>
                </div>
                <div class="stat-ring-box">
                  <svg class="stat-ring-svg" viewBox="0 0 36 36">
                    <path class="stat-ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <path class="stat-ring-fill" stroke-dasharray="${waterPct}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                  </svg>
                  <span class="stat-mono" style="position: absolute; font-size: 10px; font-weight: 700; color: var(--accent-hydro);">${waterPct}%</span>
                </div>
              </div>

              <div class="metric-hero">
                <div class="metric-hero-numeral">
                  ${todayWater} <span style="font-family: var(--font-body); font-size: 15px; color: var(--text-muted);">ml</span>
                </div>
                <div class="metric-hero-subtext">
                  Goal: ${waterGoal.toLocaleString()} ml • ${waterLeft.toLocaleString()} ml left
                </div>
              </div>

              <div class="progress-track-slim">
                <div class="progress-fill-slim" style="width: ${waterPct}%;"></div>
              </div>

              <div class="card-footer-nl">
                <button class="btn btn--secondary btn--sm" onclick="window.location.hash = 'water'">Timeline</button>
                <button class="btn btn--primary btn--sm" onclick="App.quickAddWater(250)">+250ml</button>
              </div>
            </div>

            <!-- 2. Dietary Fiber Card -->
            <div class="concept-card">
              <div class="card-header-nl">
                <div class="card-title-group">
                  <div class="card-icon-badge" style="color: var(--accent-gut);">${Icons.diet}</div>
                  <div>
                    <span class="card-tag">GUT HEALTH</span>
                    <span class="card-heading-serif">Dietary Fiber</span>
                  </div>
                </div>
                <div class="stat-ring-box">
                  <svg class="stat-ring-svg" viewBox="0 0 36 36">
                    <path class="stat-ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <path class="stat-ring-fill stat-ring-fill--gut" stroke-dasharray="${fiberPct}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                  </svg>
                  <span class="stat-mono" style="position: absolute; font-size: 10px; font-weight: 700; color: var(--accent-gut);">${fiberPct}%</span>
                </div>
              </div>

              <div class="metric-hero">
                <div class="metric-hero-numeral">
                  ${todayFiber} <span style="font-family: var(--font-body); font-size: 15px; color: var(--text-muted);">g</span>
                </div>
                <div class="metric-hero-subtext">
                  Goal: ${fiberGoal} g • ${fiberLeft}g left for target
                </div>
              </div>

              <div class="progress-track-slim">
                <div class="progress-fill-slim progress-fill-slim--gut" style="width: ${fiberPct}%;"></div>
              </div>

              <div class="card-footer-nl">
                <button class="btn btn--secondary btn--sm" onclick="window.location.hash = 'diet'">Timeline</button>
                <button class="btn btn--primary btn--sm" onclick="window.location.hash = 'diet'">+ Log Meal</button>
              </div>
            </div>

            <!-- 3. Digestive Care Card -->
            <div class="concept-card">
              <div class="card-header-nl">
                <div class="card-title-group">
                  <div class="card-icon-badge" style="color: var(--accent-gut);">${Icons.bowel}</div>
                  <div>
                    <span class="card-tag">DIGESTION</span>
                    <span class="card-heading-serif">Digestive Care</span>
                  </div>
                </div>
                <div class="stat-ring-box">
                  <svg class="stat-ring-svg" viewBox="0 0 36 36">
                    <path class="stat-ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <path class="stat-ring-fill stat-ring-fill--gut" stroke-dasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                  </svg>
                  <span class="stat-mono" style="position: absolute; font-size: 10px; font-weight: 700; color: var(--accent-gut);">T${bowelType}</span>
                </div>
              </div>

              <div class="metric-hero">
                <div class="metric-hero-numeral">
                  Type ${bowelType} <span style="font-family: var(--font-body); font-size: 15px; color: var(--text-muted);">(Optimal)</span>
                </div>
                <div class="metric-hero-subtext">
                  Bristol Scale • ${lastBowel ? 'Logged at ' + formatDisplayTime(lastBowel.timestamp) : 'Logged at 07:18 PM'}
                </div>
              </div>

              <div class="progress-track-slim">
                <div class="progress-fill-slim progress-fill-slim--gut" style="width: 100%;"></div>
              </div>

              <div class="card-footer-nl">
                <button class="btn btn--secondary btn--sm" onclick="window.location.hash = 'bowel'">Timeline</button>
                <button class="btn btn--primary btn--sm" onclick="window.location.hash = 'bowel'">+ Log Bowel</button>
              </div>
            </div>

            <!-- 4. Daily Habits Card -->
            <div class="concept-card">
              <div class="card-header-nl">
                <div class="card-title-group">
                  <div class="card-icon-badge" style="color: var(--accent-streak);">${Icons.habits}</div>
                  <div>
                    <span class="card-tag">CONSISTENCY</span>
                    <span class="card-heading-serif">Daily Habits</span>
                  </div>
                </div>
                <div class="stat-ring-box">
                  <svg class="stat-ring-svg" viewBox="0 0 36 36">
                    <path class="stat-ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <path class="stat-ring-fill stat-ring-fill--streak" stroke-dasharray="${habitPct || 100}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                  </svg>
                  <span class="stat-mono" style="position: absolute; font-size: 10px; font-weight: 700; color: var(--accent-streak);">${habitPct}%</span>
                </div>
              </div>

              <div class="metric-hero">
                <div class="metric-hero-numeral">
                  ${maxStreak} <span style="font-family: var(--font-body); font-size: 15px; color: var(--text-muted);">${maxStreak === 1 ? 'day streak' : 'days streak'}</span>
                </div>
                <div class="metric-hero-subtext">
                  ${completedHabits} completed • ${Math.max(0, totalHabits - completedHabits)} remaining today
                </div>
              </div>

              <div class="progress-track-slim">
                <div class="progress-fill-slim progress-fill-slim--streak" style="width: ${habitPct || 100}%;"></div>
              </div>

              <div class="card-footer-nl">
                <button class="btn btn--secondary btn--sm" onclick="window.location.hash = 'habits'">Timeline</button>
                <button class="btn btn--primary btn--sm" onclick="window.location.hash = 'habits'">+ Check In</button>
              </div>
            </div>

          </div>

          <!-- Lower Two-Column Section -->
          <div style="display: grid; grid-template-columns: 1.3fr 1fr; gap: 16px;">
            
            <!-- Left: Today's Health Activity Stream -->
            <div class="concept-card">
              <div class="card-header-nl">
                <div>
                  <span class="card-heading-serif">Today's Health Activity</span>
                  <p style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">Chronological stream of your logged hydration, meals, and movements.</p>
                </div>
                <span class="pill-badge pill-badge--neutral">${todayEntries.length} logs</span>
              </div>

              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
                ${todayEntries.length === 0 ? `
                  <div style="font-size: 12.5px; color: var(--text-muted); padding: 16px 0; text-align: center;">No logs yet for today. Use the buttons on the right to log.</div>
                ` : todayEntries.map(e => `
                  <div class="decluttered-stream-row">
                    <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                      <span class="stream-time">${formatDisplayTime(e.timestamp)}</span>
                      <strong class="stream-title">${e.title}</strong>
                      <span style="font-size: 11.5px; color: var(--text-muted);">[${e.category || e.type}]</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span class="pill-badge pill-badge--neutral">${e.type}</span>
                      <button class="btn btn--ghost btn--icon-only" onclick="App.deleteEntry('${e.id}')">${Icons.trash}</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Right: Quick Actions & Habits Checklist -->
            <div class="concept-card">
              <div>
                <div class="card-header-nl">
                  <div>
                    <span class="card-heading-serif">Quick Actions & Habits</span>
                    <p style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">1-click hydration and daily routine checklist.</p>
                  </div>
                </div>

                <div style="margin-top: 12px;">
                  <span class="card-tag">QUICK HYDRATION</span>
                  <div style="display: flex; gap: 8px; margin-top: 8px; flex-wrap: wrap;">
                    <button class="btn btn--secondary btn--sm" onclick="App.quickAddWater(200)">+200ml Cup</button>
                    <button class="btn btn--primary btn--sm" onclick="App.quickAddWater(250)">+250ml Glass</button>
                    <button class="btn btn--secondary btn--sm" onclick="App.quickAddWater(500)">+500ml Bottle</button>
                  </div>
                </div>

                <div style="margin-top: 16px; border-top: 1px solid var(--border-subtle); padding-top: 12px;">
                  <span class="card-tag">TODAY'S HABITS CHECKLIST</span>
                  ${habits.length === 0 ? `
                    <div style="font-size: 12.5px; color: var(--text-muted); margin-top: 6px;">
                      No habits created yet. <a href="#habits" style="text-decoration: underline; font-weight: 600; color: var(--text-ink);">Create your first habit →</a>
                    </div>
                  ` : `
                    <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 8px;">
                      ${habits.map(h => {
                        const done = h.history && h.history[today];
                        return `
                          <div style="display: flex; align-items: center; justify-content: space-between; padding: 6px 10px; background-color: var(--bg-surface-subtle); border-radius: var(--radius-sm);">
                            <div style="display: flex; align-items: center; gap: 8px;">
                              <button class="btn btn--ghost btn--icon-only" style="width: 22px; height: 22px; border: 1px solid var(--border-subtle); border-radius: var(--radius-pill); ${done ? 'background: var(--text-ink); color: #fff;' : ''}" onclick="Views.toggleHabit('${h.id}')">
                                ${done ? '✓' : ''}
                              </button>
                              <span style="font-size: 12.5px; font-weight: 500; ${done ? 'text-decoration: line-through; color: var(--text-muted);' : 'color: var(--text-ink);'}">${h.title}</span>
                            </div>
                            <span style="font-size: 11px; color: var(--text-muted);">${done ? 'Done ✓' : 'Due'}</span>
                          </div>
                        `;
                      }).join('')}
                    </div>
                  `}
                </div>
              </div>
            </div>

          </div>

        </div>
      `;
    },

    // -----------------------------------------------------------------------
    // B. UNIVERSAL TIMELINE VIEW
    // -----------------------------------------------------------------------
    async renderTimeline(container, activeFilter = 'all') {
      const all = await getAll('health_entries');
      let filtered = all;
      if (activeFilter !== 'all') {
        filtered = filtered.filter(e => e.type === activeFilter);
      }
      filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div class="concept-hero-card">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
              <div>
                <span class="card-tag">CHRONOLOGICAL JOURNAL</span>
                <h1 class="concept-title heading-serif" style="margin-top: 3px;">Universal Health Timeline</h1>
                <p style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">All recorded entries across hydration, diet, digestion, vitals, and medications.</p>
              </div>
              <button class="btn btn--primary" onclick="App.triggerUniversalQuickLog()">+ Log Health Entry</button>
            </div>

            <!-- Multi-Filter Bar -->
            <div class="timeline-filter-bar" style="margin-top: 16px; border-top: 1px solid var(--border-subtle); padding-top: 12px;">
              <button class="filter-pill ${activeFilter === 'all' ? 'filter-pill--active' : ''}" onclick="Views.renderTimeline(document.getElementById('app-view'), 'all')">All Entries (${all.length})</button>
              <button class="filter-pill ${activeFilter === 'water' ? 'filter-pill--active' : ''}" onclick="Views.renderTimeline(document.getElementById('app-view'), 'water')">Hydration</button>
              <button class="filter-pill ${activeFilter === 'food' ? 'filter-pill--active' : ''}" onclick="Views.renderTimeline(document.getElementById('app-view'), 'food')">Nutrition</button>
              <button class="filter-pill ${activeFilter === 'bowel' ? 'filter-pill--active' : ''}" onclick="Views.renderTimeline(document.getElementById('app-view'), 'bowel')">Digestion</button>
              <button class="filter-pill ${activeFilter === 'vitals' ? 'filter-pill--active' : ''}" onclick="Views.renderTimeline(document.getElementById('app-view'), 'vitals')">Vitals</button>
              <button class="filter-pill ${activeFilter === 'med' ? 'filter-pill--active' : ''}" onclick="Views.renderTimeline(document.getElementById('app-view'), 'med')">Medications</button>
            </div>
          </div>

          <!-- Timeline Entries Stream -->
          <div class="concept-card">
            <div class="card-header-nl">
              <span class="card-heading-serif">Health Records</span>
              <span class="pill-badge pill-badge--neutral">${filtered.length} entries</span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 12px;">
              ${filtered.length === 0 ? `
                <div style="font-size: 13px; color: var(--text-muted); text-align: center; padding: 24px;">No records match this filter.</div>
              ` : filtered.map(e => `
                <div class="decluttered-stream-row">
                  <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                    <span class="stream-time">${formatDisplayDate(e.timestamp)} ${formatDisplayTime(e.timestamp)}</span>
                    <span class="pill-badge pill-badge--neutral">${e.category || e.type}</span>
                    <strong class="stream-title">${e.title}</strong>
                    ${e.value && e.unit ? `<span class="stat-mono" style="font-weight: 700;">${e.value} ${e.unit}</span>` : ''}
                    ${e.notes ? `<span style="font-size: 12px; color: var(--text-muted);">— ${e.notes}</span>` : ''}
                  </div>
                  <div style="display: flex; align-items: center; gap: 6px;">
                    <button class="btn btn--ghost btn--icon-only" onclick="App.deleteEntry('${e.id}')">${Icons.trash}</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    },

    // -----------------------------------------------------------------------
    // C. WATER TRACKER
    // -----------------------------------------------------------------------
    async renderWater(container) {
      const all = await getAll('health_entries');
      const todayWaterEntries = all.filter(e => e.date === App.todayDate && e.type === 'water');
      const todayWater = todayWaterEntries.reduce((sum, e) => sum + (Number(e.value) || 0), 0);
      const waterGoal = 3000;
      const waterPct = Math.min(100, Math.round((todayWater / waterGoal) * 100));

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div class="concept-hero-card">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
              <div>
                <span class="card-tag">HYDRATION TRACKER</span>
                <h1 class="concept-title heading-serif" style="margin-top: 3px;">Water & Fluid Intake</h1>
                <p style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">Daily hydration goal: 3,000 ml • Current: ${todayWater} ml (${waterPct}%)</p>
              </div>
              <div style="display: flex; gap: 8px;">
                <button class="btn btn--secondary" onclick="App.quickAddWater(200)">+200ml</button>
                <button class="btn btn--primary" onclick="App.quickAddWater(250)">+250ml</button>
                <button class="btn btn--secondary" onclick="App.quickAddWater(500)">+500ml</button>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="card-header-nl">
              <span class="card-heading-serif">Today's Water Logs</span>
              <span class="pill-badge pill-badge--neutral">${todayWaterEntries.length} logs</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
              ${todayWaterEntries.length === 0 ? '<div style="font-size: 13px; color: var(--text-muted); text-align: center; padding: 20px;">No water logged today yet.</div>' : todayWaterEntries.map(e => `
                <div class="decluttered-stream-row">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <span class="stream-time">${formatDisplayTime(e.timestamp)}</span>
                    <strong class="stream-title">${e.title}</strong>
                  </div>
                  <button class="btn btn--ghost btn--icon-only" onclick="App.deleteEntry('${e.id}')">${Icons.trash}</button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    },

    // -----------------------------------------------------------------------
    // D. NUTRITION & FIBER
    // -----------------------------------------------------------------------
    async renderDiet(container) {
      const all = await getAll('health_entries');
      const todayDiet = all.filter(e => e.date === App.todayDate && e.type === 'food');
      const todayFiber = todayDiet.reduce((sum, e) => sum + (Number(e.meta?.fiber || e.value) || 0), 0);
      const todayProtein = todayDiet.reduce((sum, e) => sum + (Number(e.meta?.protein) || 0), 0);
      const todayCalories = todayDiet.reduce((sum, e) => sum + (Number(e.meta?.calories) || 0), 0);

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div class="concept-hero-card">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
              <div>
                <span class="card-tag">NUTRITION & FIBER</span>
                <h1 class="concept-title heading-serif" style="margin-top: 3px;">Dietary & Gut Health Hub</h1>
                <p style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">Daily Fiber: ${todayFiber}g / 30g • Protein: ${todayProtein}g • Calories: ${todayCalories} kcal</p>
              </div>
              <button class="btn btn--primary" onclick="App.triggerUniversalQuickLog('food')">+ Log Meal</button>
            </div>
          </div>

          <div class="concept-card">
            <div class="card-header-nl">
              <span class="card-heading-serif">Today's Meals & Nutrition Logs</span>
              <span class="pill-badge pill-badge--neutral">${todayDiet.length} meals</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
              ${todayDiet.length === 0 ? '<div style="font-size: 13px; color: var(--text-muted); text-align: center; padding: 20px;">No meals logged today yet.</div>' : todayDiet.map(e => `
                <div class="decluttered-stream-row">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <span class="stream-time">${formatDisplayTime(e.timestamp)}</span>
                    <strong class="stream-title">${e.title}</strong>
                    <span class="pill-badge pill-badge--emerald">${e.value || 0}g fiber</span>
                    ${e.notes ? `<span style="font-size: 12px; color: var(--text-muted);">— ${e.notes}</span>` : ''}
                  </div>
                  <button class="btn btn--ghost btn--icon-only" onclick="App.deleteEntry('${e.id}')">${Icons.trash}</button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    },

    // -----------------------------------------------------------------------
    // E. DIGESTIVE CARE (Bowel)
    // -----------------------------------------------------------------------
    async renderBowel(container) {
      const all = await getAll('health_entries');
      const bowelEntries = all.filter(e => e.type === 'bowel').sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div class="concept-hero-card">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
              <div>
                <span class="card-tag">DIGESTION HUB</span>
                <h1 class="concept-title heading-serif" style="margin-top: 3px;">Digestive Care & Bristol Scale</h1>
                <p style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">Track stool consistency and gut health regularity.</p>
              </div>
              <button class="btn btn--primary" onclick="App.triggerUniversalQuickLog('bowel')">+ Log Bowel Movement</button>
            </div>
          </div>

          <div class="concept-card">
            <div class="card-header-nl">
              <span class="card-heading-serif">Digestive Movement History</span>
              <span class="pill-badge pill-badge--neutral">${bowelEntries.length} logs</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
              ${bowelEntries.length === 0 ? '<div style="font-size: 13px; color: var(--text-muted); text-align: center; padding: 20px;">No bowel movements recorded.</div>' : bowelEntries.map(e => `
                <div class="decluttered-stream-row">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <span class="stream-time">${formatDisplayDate(e.timestamp)} ${formatDisplayTime(e.timestamp)}</span>
                    <strong class="stream-title">${e.title}</strong>
                    <span class="pill-badge pill-badge--neutral">Type ${e.meta?.bristolType || e.value}</span>
                  </div>
                  <button class="btn btn--ghost btn--icon-only" onclick="App.deleteEntry('${e.id}')">${Icons.trash}</button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    },

    // -----------------------------------------------------------------------
    // F. CUSTOM VITALS
    // -----------------------------------------------------------------------
    async renderCustomMetrics(container) {
      const metrics = await getAll('custom_metrics');
      const all = await getAll('health_entries');
      const vitals = all.filter(e => e.type === 'vitals').sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div class="concept-hero-card">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
              <div>
                <span class="card-tag">BIOMETRICS & LABS</span>
                <h1 class="concept-title heading-serif" style="margin-top: 3px;">Custom Vitals & Lab Tracker</h1>
                <p style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">Fasting blood sugar, blood pressure, sleep, and user-defined metrics.</p>
              </div>
              <button class="btn btn--primary" onclick="App.triggerUniversalQuickLog('vitals')">+ Log Vital Reading</button>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px;">
            ${metrics.map(m => {
              const latest = vitals.find(v => v.title === m.name);
              return `
                <div class="concept-card" style="min-height: 160px;">
                  <div class="card-header-nl">
                    <span class="card-tag">${m.category || 'Vitals'}</span>
                    <span class="pill-badge pill-badge--neutral">${m.unit}</span>
                  </div>
                  <div class="metric-hero">
                    <div class="card-heading-serif">${m.name}</div>
                    <div class="metric-hero-numeral" style="font-size: 28px; margin-top: 4px;">
                      ${latest ? latest.value : '—'} <span style="font-family: var(--font-body); font-size: 13px; color: var(--text-muted);">${m.unit}</span>
                    </div>
                  </div>
                  <div style="font-size: 11px; color: var(--text-muted); border-top: 1px solid var(--border-subtle); padding-top: 6px;">
                    ${m.target ? 'Target: ' + m.target : 'No target defined'}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    },

    // -----------------------------------------------------------------------
    // G. HABITS & ROUTINES
    // -----------------------------------------------------------------------
    async renderHabits(container) {
      const habits = await getAll('habits');
      const today = App.todayDate;

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div class="concept-hero-card">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
              <div>
                <span class="card-tag">CONSISTENCY & HABITS</span>
                <h1 class="concept-title heading-serif" style="margin-top: 3px;">Habit Routines & Streaks</h1>
                <p style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">Daily wellness consistency routines.</p>
              </div>
              <button class="btn btn--primary" onclick="Views.openNewHabitModal()">+ New Habit</button>
            </div>
          </div>

          <div class="concept-card">
            <div class="card-header-nl">
              <span class="card-heading-serif">Active Habit Checklists</span>
              <span class="pill-badge pill-badge--neutral">${habits.length} routines</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 12px;">
              ${habits.map(h => {
                const done = h.history && h.history[today];
                const streak = calculateHabitStreak(h);
                return `
                  <div class="decluttered-stream-row">
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <button class="btn btn--ghost btn--icon-only" style="width: 26px; height: 26px; border: 1px solid var(--border-subtle); border-radius: var(--radius-pill); ${done ? 'background: var(--text-ink); color: #fff;' : ''}" onclick="Views.toggleHabit('${h.id}')">
                        ${done ? '✓' : ''}
                      </button>
                      <span style="font-size: 13.5px; font-weight: 600; ${done ? 'text-decoration: line-through; color: var(--text-muted);' : 'color: var(--text-ink);'}">${h.title}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span class="pill-badge pill-badge--amber">${streak}d streak</span>
                      <button class="btn btn--ghost btn--icon-only" onclick="Views.deleteHabit('${h.id}')">${Icons.trash}</button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;
    },

    async toggleHabit(id) {
      const habits = await getAll('habits');
      const h = habits.find(item => item.id === id);
      if (!h) return;
      if (!h.history) h.history = {};
      const today = App.todayDate;
      h.history[today] = !h.history[today];
      await putItem('habits', h);
      App.handleRoute();
    },

    openNewHabitModal() {
      Modal.open(`
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <strong style="font-size: 15px; color: var(--text-ink);">+ Create Habit Routine</strong>
            <button class="btn btn--ghost btn--icon-only" onclick="Modal.close()">✕</button>
          </div>
          <form onsubmit="Views.handleSaveNewHabit(event)" style="display: flex; flex-direction: column; gap: 10px;">
            <div class="form-group-nl">
              <label class="form-label-nl">Habit Name</label>
              <input type="text" id="new-habit-title" class="input-nl" placeholder="e.g. 15m Morning Sunlight, 10k Steps" required />
            </div>
            <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 6px;">
              <button type="button" class="btn btn--secondary" onclick="Modal.close()">Cancel</button>
              <button type="submit" class="btn btn--primary">Save Habit</button>
            </div>
          </form>
        </div>
      `);
    },

    async handleSaveNewHabit(e) {
      e.preventDefault();
      const title = document.getElementById('new-habit-title').value.trim();
      const item = { id: 'habit_' + Date.now(), title, history: {} };
      await putItem('habits', item);
      Modal.close();
      ToastManager.show(`Habit "${title}" created`, 'success');
      App.handleRoute();
    },

    async deleteHabit(id) {
      if (!confirm('Delete this habit routine?')) return;
      await deleteItem('habits', id);
      ToastManager.show('Habit deleted', 'info');
      App.handleRoute();
    },

    // -----------------------------------------------------------------------
    // H. MEDICATIONS
    // -----------------------------------------------------------------------
    async renderMeds(container) {
      const all = await getAll('health_entries');
      const meds = all.filter(e => e.type === 'med');

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div class="concept-hero-card">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
              <div>
                <span class="card-tag">MEDICATIONS & RX</span>
                <h1 class="concept-title heading-serif" style="margin-top: 3px;">Prescriptions & Supplements</h1>
                <p style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">Track daily prescriptions, vitamins, and dosages.</p>
              </div>
              <button class="btn btn--primary" onclick="App.triggerUniversalQuickLog('med')">+ Log Prescription</button>
            </div>
          </div>

          <div class="concept-card">
            <div class="card-header-nl">
              <span class="card-heading-serif">Prescription Logs</span>
              <span class="pill-badge pill-badge--neutral">${meds.length} logs</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
              ${meds.length === 0 ? '<div style="font-size: 13px; color: var(--text-muted); text-align: center; padding: 20px;">No prescriptions logged.</div>' : meds.map(e => `
                <div class="decluttered-stream-row">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <span class="stream-time">${formatDisplayDate(e.timestamp)}</span>
                    <strong class="stream-title">${e.title}</strong>
                    ${e.value && e.unit ? `<span class="pill-badge pill-badge--neutral">${e.value} ${e.unit}</span>` : ''}
                  </div>
                  <button class="btn btn--ghost btn--icon-only" onclick="App.deleteEntry('${e.id}')">${Icons.trash}</button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    },

    // -----------------------------------------------------------------------
    // I. DOCTOR MODE
    // -----------------------------------------------------------------------
    async renderDoctorMode(container) {
      const all = await getAll('health_entries');

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div class="concept-hero-card">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
              <div>
                <span class="card-tag">DOCTOR MODE</span>
                <h1 class="concept-title heading-serif" style="margin-top: 3px;">Clinical Consultation Briefing</h1>
                <p style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">High-density clean medical summary for clinical consultations.</p>
              </div>
              <button class="btn btn--primary" onclick="window.print()">
                ${Icons.print}
                <span>Print Clinical Summary</span>
              </button>
            </div>
          </div>

          <div class="concept-card">
            <div class="card-heading-serif" style="font-size: 18px; margin-bottom: 12px;">Patient Clinical Summary • ${App.userSettings?.name || 'Patient'}</div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${all.slice(0, 15).map(e => `
                <div style="display: flex; justify-content: space-between; font-size: 12.5px; border-bottom: 1px solid var(--border-subtle); padding: 8px 0;">
                  <span><strong>${e.title}</strong> ${e.notes ? '— ' + e.notes : ''}</span>
                  <span class="stat-mono" style="color: var(--text-muted);">${formatDisplayDate(e.timestamp)}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    },

    // -----------------------------------------------------------------------
    // J. SETTINGS & VAULT
    // -----------------------------------------------------------------------
    async renderSettings(container) {
      const all = await getAll('health_entries');

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div class="concept-hero-card">
            <span class="card-tag">NORTHLIFE PRINCIPLES & PRIVACY</span>
            <h1 class="concept-title heading-serif" style="margin-top: 3px;">Settings & Data Vault</h1>
            <p style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">100% Offline-First, Zero Mandatory Login, Complete Data Ownership.</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
            <div class="concept-card">
              <div class="card-header-nl">
                <span class="card-heading-serif">Profile Settings</span>
              </div>
              <form onsubmit="Views.handleSaveProfile(event)" style="display: flex; flex-direction: column; gap: 10px; margin-top: 10px;">
                <div class="form-group-nl">
                  <label class="form-label-nl">Your Name</label>
                  <input type="text" id="settings-name" class="input-nl" value="${App.userSettings?.name || 'Friend'}" required />
                </div>
                <button type="submit" class="btn btn--primary" style="margin-top: 4px;">Save Name</button>
              </form>
            </div>

            <div class="concept-card">
              <div class="card-header-nl">
                <span class="card-heading-serif">JSON Vault Backup</span>
              </div>
              <p style="font-size: 12px; color: var(--text-muted); line-height: 1.4;">Export all ${all.length} records into standardized JSON.</p>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 12px;">
                <button class="btn btn--secondary" onclick="Views.exportJsonVault()">Export Full JSON Vault</button>
                <button class="btn btn--ghost" style="color: #DC2626;" onclick="Views.wipeVault()">Wipe Local Database</button>
              </div>
            </div>
          </div>
        </div>
      `;
    },

    async handleSaveProfile(e) {
      e.preventDefault();
      const name = document.getElementById('settings-name').value.trim();
      App.userSettings = { name };
      await putItem('user_settings', { id: 'profile', name });
      ToastManager.show('Settings saved', 'success');
      App.loadUserSettings();
    },

    async exportJsonVault() {
      const all = await getAll('health_entries');
      const backup = {
        app: 'NorthLife_Clinical_OS',
        version: '3.0.0',
        exportedAt: new Date().toISOString(),
        totalEntries: all.length,
        health_entries: all,
        custom_metrics: await getAll('custom_metrics'),
        habits: await getAll('habits'),
        user_settings: await getAll('user_settings')
      };

      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `northlife_vault_${App.todayDate}.json`;
      a.click();
      URL.revokeObjectURL(url);
      ToastManager.show(`Exported ${all.length} records`, 'success');
    },

    async wipeVault() {
      if (!confirm('Completely erase all local health logs? This action cannot be undone.')) return;
      const stores = ['health_entries', 'custom_metrics', 'habits', 'user_settings'];
      for (const s of stores) {
        const items = await getAll(s);
        for (const item of items) {
          await deleteItem(s, item.id);
        }
      }
      ToastManager.show('Local vault wiped', 'info');
      App.handleRoute();
    }
  };

  window.App = App;
  window.Views = Views;
  window.Modal = Modal;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
  } else {
    App.init();
  }
})();
