/**
 * NorthLife — Personal Health & Daily Living Operating System
 * Architecture: Zero-Dependency Pure Native JS, Offline-First IndexedDB
 * Design: Strictly Manrope, Monochromatic Ink, Tabler Icons, Outcome-Oriented UX
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. ICONS REGISTRY (Tabler SVG Icons)
  // =========================================================================
  const Icons = {
    water: `<svg class="tabler-icon" viewBox="0 0 24 24"><path d="M7.502 19.423c2.602 2.105 6.394 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546z"></path></svg>`,
    diet: `<svg class="tabler-icon" viewBox="0 0 24 24"><path d="M12 4c-3.2 0 -6 2.8 -6 7c0 5 3 9 6 9s6 -4 6 -9c0 -4.2 -2.8 -7 -6 -7z"></path><path d="M12 4v-2"></path><path d="M9 12a3 3 0 0 0 6 0"></path></svg>`,
    bowel: `<svg class="tabler-icon" viewBox="0 0 24 24"><path d="M3 12h4l3 8l4 -16l3 8h4"></path></svg>`,
    habits: `<svg class="tabler-icon" viewBox="0 0 24 24"><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M9 14l2 2l4 -4"></path></svg>`,
    meds: `<svg class="tabler-icon" viewBox="0 0 24 24"><path d="M4.5 12.5l8 -8a4.95 4.95 0 0 1 7 7l-8 8a4.95 4.95 0 0 1 -7 -7"></path><path d="M8.5 8.5l7 7"></path></svg>`,
    doctor: `<svg class="tabler-icon" viewBox="0 0 24 24"><path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><path d="M11 3v2"></path><path d="M6 3v2"></path><circle cx="20" cy="10" r="2"></circle></svg>`,
    settings: `<svg class="tabler-icon" viewBox="0 0 24 24"><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path></svg>`,
    plus: `<svg class="tabler-icon tabler-icon--sm" viewBox="0 0 24 24"><path d="M12 5l0 14"></path><path d="M5 12l14 0"></path></svg>`,
    check: `<svg class="tabler-icon tabler-icon--sm" viewBox="0 0 24 24"><path d="M5 12l5 5l10 -10"></path></svg>`,
    trash: `<svg class="tabler-icon tabler-icon--sm" viewBox="0 0 24 24"><path d="M4 7l16 0"></path><path d="M10 11l0 6"></path><path d="M14 11l0 6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path></svg>`,
    edit: `<svg class="tabler-icon tabler-icon--sm" viewBox="0 0 24 24"><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path><path d="M16 5l3 3"></path></svg>`,
    search: `<svg class="tabler-icon tabler-icon--sm" viewBox="0 0 24 24"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>`,
    print: `<svg class="tabler-icon tabler-icon--sm" viewBox="0 0 24 24"><path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2"></path><path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4"></path><path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z"></path></svg>`,
    info: `<svg class="tabler-icon tabler-icon--sm" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 9h.01"></path><path d="M11 12h1v4h1"></path></svg>`
  };

  // =========================================================================
  // 2. DATABASE & OFFLINE PERSISTENCE (IndexedDB)
  // =========================================================================
  const DB_NAME = 'northlife_db';
  const DB_VERSION = 2;
  let dbInstance = null;

  async function initDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        const stores = [
          'water_logs',
          'diet_logs',
          'bowel_logs',
          'habits',
          'medications',
          'meal_templates',
          'user_settings'
        ];
        stores.forEach((store) => {
          if (!db.objectStoreNames.contains(store)) {
            db.createObjectStore(store, { keyPath: 'id' });
          }
        });
      };
      request.onsuccess = (event) => {
        dbInstance = event.target.result;
        resolve(dbInstance);
      };
      request.onerror = (event) => reject(event.target.error);
    });
  }

  async function getAll(storeName) {
    if (!dbInstance) await initDB();
    return new Promise((resolve, reject) => {
      const transaction = dbInstance.transaction([storeName], 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
  }

  async function putItem(storeName, item) {
    if (!dbInstance) await initDB();
    return new Promise((resolve, reject) => {
      const transaction = dbInstance.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.put(item);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async function deleteItem(storeName, id) {
    if (!dbInstance) await initDB();
    return new Promise((resolve, reject) => {
      const transaction = dbInstance.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.delete(id);
      request.onsuccess = () => resolve(true);
      request.onerror = () => reject(request.error);
    });
  }

  // =========================================================================
  // 3. TOAST & GLOBAL UNDO MANAGER
  // =========================================================================
  const ToastManager = {
    show(message, type = 'info', duration = 3500) {
      const container = document.getElementById('toast-container');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.innerHTML = `
        <span>${message}</span>
      `;

      container.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(8px)';
        setTimeout(() => toast.remove(), 250);
      }, duration);
    },

    showUndo(message, restoreCallback, duration = 6000) {
      const container = document.getElementById('toast-container');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = 'toast toast--undo';
      toast.innerHTML = `
        <span>${message}</span>
        <button class="btn-undo-action" id="btn-undo-trigger">Undo</button>
      `;

      let undone = false;
      const undoBtn = toast.querySelector('#btn-undo-trigger');
      undoBtn.addEventListener('click', async () => {
        undone = true;
        toast.remove();
        if (typeof restoreCallback === 'function') {
          await restoreCallback();
          ToastManager.show('Item restored successfully', 'info', 2500);
        }
      });

      container.appendChild(toast);
      setTimeout(() => {
        if (!undone && toast.parentNode) {
          toast.style.opacity = '0';
          toast.style.transform = 'translateY(8px)';
          setTimeout(() => toast.remove(), 250);
        }
      }, duration);
    }
  };

  // =========================================================================
  // 4. DATE & TIME UTILITIES
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

  function getLastNDays(n = 7) {
    const dates = [];
    for (let i = n - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      dates.push({
        dateStr: `${year}-${month}-${day}`,
        dayName: d.toLocaleDateString('en-US', { weekday: 'narrow' }),
        dayNum: d.getDate()
      });
    }
    return dates;
  }

  // =========================================================================
  // 5. BRISTOL STOOL CHART DATA (Clinical, Clean, No Emojis)
  // =========================================================================
  const BristolTypes = [
    { type: 1, title: 'Type 1', category: 'constipation', tag: 'Severe Hard', desc: 'Separate hard lumps, like nuts; difficult to pass.' },
    { type: 2, title: 'Type 2', category: 'constipation', tag: 'Mild Hard', desc: 'Sausage-shaped, but lumpy and firm.' },
    { type: 3, title: 'Type 3', category: 'normal', tag: 'Normal', desc: 'Like a sausage with cracks on its surface.' },
    { type: 4, title: 'Type 4', category: 'normal', tag: 'Optimal', desc: 'Like a smooth, soft sausage or snake.' },
    { type: 5, title: 'Type 5', category: 'loose', tag: 'Soft Blobs', desc: 'Soft blobs with clear-cut edges; easy to pass.' },
    { type: 6, title: 'Type 6', category: 'loose', tag: 'Mushy', desc: 'Fluffy pieces with ragged edges, a mushy stool.' },
    { type: 7, title: 'Type 7', category: 'loose', tag: 'Watery', desc: 'Entirely liquid, watery with no solid pieces.' }
  ];

  // =========================================================================
  // 6. MODAL & DIALOG SYSTEM
  // =========================================================================
  const Modal = {
    open(htmlContent) {
      this.close();
      const backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop';
      backdrop.id = 'global-modal-backdrop';
      backdrop.innerHTML = `
        <div class="modal-dialog-nl" role="dialog" aria-modal="true">
          ${htmlContent}
        </div>
      `;

      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) Modal.close();
      });

      document.body.appendChild(backdrop);

      // Auto-focus first input
      const firstInput = backdrop.querySelector('input, select, textarea, button');
      if (firstInput) firstInput.focus();
    },

    close() {
      const existing = document.getElementById('global-modal-backdrop');
      if (existing) existing.remove();
    }
  };

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      Modal.close();
    }
  });

  // =========================================================================
  // 7. ROUTING & VIEW CONTROLLERS
  // =========================================================================
  const App = {
    currentRoute: 'dashboard',
    todayDate: getTodayDateString(),

    async init() {
      await initDB();
      this.setupHeader();
      this.setupNavigation();
      this.setupTheme();
      this.handleRoute();
      window.addEventListener('hashchange', () => this.handleRoute());
    },

    setupHeader() {
      const dateText = document.getElementById('header-date-text');
      if (dateText) {
        const d = new Date();
        dateText.textContent = d.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric'
        });
      }

      const quickEntryBtn = document.getElementById('btn-quick-entry');
      if (quickEntryBtn) {
        quickEntryBtn.addEventListener('click', () => {
          App.openQuickLogModal();
        });
      }
    },

    setupNavigation() {
      const links = document.querySelectorAll('.nav-link[data-route]');
      links.forEach((link) => {
        link.addEventListener('click', (e) => {
          const route = link.getAttribute('data-route');
          window.location.hash = route;
        });
      });
    },

    setupTheme() {
      const savedTheme = localStorage.getItem('nl_theme') || 'light';
      document.documentElement.setAttribute('data-theme', savedTheme);

      const toggleBtn = document.getElementById('theme-toggle-btn');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          const current = document.documentElement.getAttribute('data-theme');
          const next = current === 'dark' ? 'light' : 'dark';
          document.documentElement.setAttribute('data-theme', next);
          localStorage.setItem('nl_theme', next);
        });
      }
    },

    updateNavActive(route) {
      document.querySelectorAll('.nav-link').forEach((link) => {
        const target = link.getAttribute('data-route') || link.getAttribute('href')?.replace('#', '');
        if (target === route) {
          link.classList.add('nav-link--active');
        } else {
          link.classList.remove('nav-link--active');
        }
      });

      const breadcrumb = document.getElementById('breadcrumb-title');
      if (breadcrumb) {
        const titles = {
          dashboard: 'Overview',
          water: 'Hydration',
          diet: 'Nutrition',
          bowel: 'Digestive Health',
          habits: 'Daily Habits',
          meds: 'Medications',
          'doctor-mode': 'Doctor Mode',
          settings: 'Settings'
        };
        breadcrumb.textContent = titles[route] || 'Overview';
      }
    },

    handleRoute() {
      const hash = window.location.hash.replace('#', '') || 'dashboard';
      this.currentRoute = hash;
      this.updateNavActive(hash);

      const container = document.getElementById('app-view');
      if (!container) return;

      switch (hash) {
        case 'dashboard':
          Views.renderDashboard(container);
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
          Views.renderDashboard(container);
      }
    },

    openQuickLogModal() {
      Modal.open(`
        <div class="modal-header-nl">
          <span class="modal-title-nl">Quick Health Log</span>
          <button class="btn btn--subtle btn--sm" onclick="App.closeModal()">Close</button>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
          <button class="btn btn--subtle" onclick="App.quickAddWater(250)" style="padding: 14px; flex-direction: column; gap: 6px;">
            ${Icons.water}
            <span>+250ml Water</span>
          </button>
          <button class="btn btn--subtle" onclick="App.quickAddWater(500)" style="padding: 14px; flex-direction: column; gap: 6px;">
            ${Icons.water}
            <span>+500ml Bottle</span>
          </button>
          <button class="btn btn--subtle" onclick="App.closeModal(); window.location.hash = 'bowel';" style="padding: 14px; flex-direction: column; gap: 6px;">
            ${Icons.bowel}
            <span>Log Bowel</span>
          </button>
          <button class="btn btn--subtle" onclick="App.closeModal(); window.location.hash = 'diet';" style="padding: 14px; flex-direction: column; gap: 6px;">
            ${Icons.diet}
            <span>Log Meal</span>
          </button>
        </div>
      `);
    },

    async quickAddWater(ml) {
      const item = {
        id: 'water_' + Date.now(),
        amount: Number(ml),
        date: App.todayDate,
        timestamp: new Date().toISOString(),
        note: 'Quick Log'
      };
      await putItem('water_logs', item);
      Modal.close();
      ToastManager.showUndo(`Logged +${ml}ml water`, async () => {
        await deleteItem('water_logs', item.id);
        App.handleRoute();
      });
      App.handleRoute();
    },

    closeModal() {
      Modal.close();
    }
  };

  window.App = App;

  // =========================================================================
  // 8. VIEWS MODULE IMPLEMENTATION (Outcome-Oriented, Full CRUD + Undo)
  // =========================================================================
  const Views = {
    // -----------------------------------------------------------------------
    // A. OVERVIEW / DASHBOARD (Alive, Hero Typography, Balanced Visuals)
    // -----------------------------------------------------------------------
    async renderDashboard(container) {
      const today = App.todayDate;
      const waterLogs = await getAll('water_logs');
      const dietLogs = await getAll('diet_logs');
      const bowelLogs = await getAll('bowel_logs');
      const habits = await getAll('habits');
      const meds = await getAll('medications');

      const todayWater = waterLogs
        .filter((l) => l.date === today)
        .reduce((sum, l) => sum + (Number(l.amount) || 0), 0);
      const waterGoal = 3000;
      const waterPct = Math.min(100, Math.round((todayWater / waterGoal) * 100));

      const todayFiber = dietLogs
        .filter((l) => l.date === today)
        .reduce((sum, l) => sum + (Number(l.fiber) || 0), 0);
      const fiberGoal = 30;
      const fiberPct = Math.min(100, Math.round((todayFiber / fiberGoal) * 100));

      const todayBowel = bowelLogs.filter((l) => l.date === today);
      const lastBowel = todayBowel.length ? todayBowel[todayBowel.length - 1] : null;

      const completedHabits = habits.filter((h) => h.history && h.history[today]).length;
      const totalHabits = habits.length;
      const habitPct = totalHabits ? Math.round((completedHabits / totalHabits) * 100) : 0;

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          
          <!-- Daily Summary Hero Card -->
          <div class="card-nl" style="background-color: var(--bg-surface-subtle); border-color: var(--border-dark);">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
              <div>
                <span class="card-tag">Today's Health Status</span>
                <h2 style="font-size: 20px; font-weight: 700; color: var(--text-ink); margin-top: 2px;">
                  Daily Balance Summary
                </h2>
                <p style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">
                  Track hydration, gut fiber, and daily routines in private local storage.
                </p>
              </div>
              <div style="display: flex; gap: 8px;">
                <button class="btn btn--ink" onclick="App.quickAddWater(250)">
                  ${Icons.plus}
                  <span>+250ml Water</span>
                </button>
                <button class="btn btn--subtle" onclick="window.location.hash = 'bowel'">
                  ${Icons.bowel}
                  <span>Log Digestion</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Hero Metrics 4-Card Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
            
            <!-- Water Card -->
            <div class="card-nl">
              <div class="card-header-nl">
                <div class="card-title-group">
                  <div class="card-icon-badge">${Icons.water}</div>
                  <div>
                    <span class="card-tag">Hydration</span>
                    <span class="card-heading">Water Intake</span>
                  </div>
                </div>
                <span class="pill-badge pill-badge--neutral">${waterPct}%</span>
              </div>
              
              <div class="metric-hero">
                <div class="metric-hero-value">
                  ${todayWater.toLocaleString()} <span class="metric-hero-unit">/ ${waterGoal.toLocaleString()} ml</span>
                </div>
                <div class="metric-hero-subtext">
                  ${waterGoal - todayWater > 0 ? (waterGoal - todayWater) + ' ml remaining' : 'Daily goal accomplished'}
                </div>
              </div>

              <div class="progress-track">
                <div class="progress-bar-fill" style="width: ${waterPct}%;"></div>
              </div>

              <div class="card-footer-nl" style="display: flex; justify-content: space-between; align-items: center;">
                <button class="btn btn--subtle btn--sm" onclick="window.location.hash = 'water'">View Timeline</button>
                <button class="btn btn--ghost btn--sm" onclick="App.quickAddWater(250)">+250ml</button>
              </div>
            </div>

            <!-- Fiber & Nutrition Card -->
            <div class="card-nl">
              <div class="card-header-nl">
                <div class="card-title-group">
                  <div class="card-icon-badge">${Icons.diet}</div>
                  <div>
                    <span class="card-tag">Gut Nutrition</span>
                    <span class="card-heading">Daily Fiber</span>
                  </div>
                </div>
                <span class="pill-badge pill-badge--neutral">${fiberPct}%</span>
              </div>
              
              <div class="metric-hero">
                <div class="metric-hero-value">
                  ${todayFiber} <span class="metric-hero-unit">/ ${fiberGoal} g</span>
                </div>
                <div class="metric-hero-subtext">
                  ${fiberGoal - todayFiber > 0 ? (fiberGoal - todayFiber) + 'g to reach healthy gut target' : 'Healthy target achieved'}
                </div>
              </div>

              <div class="progress-track">
                <div class="progress-bar-fill" style="width: ${fiberPct}%;"></div>
              </div>

              <div class="card-footer-nl" style="display: flex; justify-content: space-between; align-items: center;">
                <button class="btn btn--subtle btn--sm" onclick="window.location.hash = 'diet'">Meal Log</button>
                <button class="btn btn--ghost btn--sm" onclick="window.location.hash = 'diet'">+ Log</button>
              </div>
            </div>

            <!-- Digestive Health Card -->
            <div class="card-nl">
              <div class="card-header-nl">
                <div class="card-title-group">
                  <div class="card-icon-badge">${Icons.bowel}</div>
                  <div>
                    <span class="card-tag">Digestive Care</span>
                    <span class="card-heading">Bowel Movement</span>
                  </div>
                </div>
                ${lastBowel ? '<span class="pill-badge pill-badge--ink">Logged</span>' : '<span class="pill-badge pill-badge--subtle">Pending</span>'}
              </div>
              
              <div class="metric-hero">
                <div class="metric-hero-value">
                  ${lastBowel ? 'Type ' + lastBowel.bristolType : 'None'}
                  <span class="metric-hero-unit">${lastBowel ? '(' + (BristolTypes.find(b => b.type === Number(lastBowel.bristolType))?.tag || '') + ')' : ''}</span>
                </div>
                <div class="metric-hero-subtext">
                  ${lastBowel ? 'Logged at ' + formatDisplayTime(lastBowel.timestamp) : 'No bowel movement recorded today'}
                </div>
              </div>

              <div style="font-size: 12px; color: var(--text-muted); margin-top: 10px;">
                ${lastBowel && lastBowel.painScore > 0 ? 'Pain Level: ' + lastBowel.painScore + '/10' : 'Optimal digestive tracking'}
              </div>

              <div class="card-footer-nl" style="display: flex; justify-content: space-between; align-items: center;">
                <button class="btn btn--subtle btn--sm" onclick="window.location.hash = 'bowel'">Digestion Hub</button>
                <button class="btn btn--ghost btn--sm" onclick="window.location.hash = 'bowel'">Record</button>
              </div>
            </div>

            <!-- Daily Habits Card -->
            <div class="card-nl">
              <div class="card-header-nl">
                <div class="card-title-group">
                  <div class="card-icon-badge">${Icons.habits}</div>
                  <div>
                    <span class="card-tag">Consistency</span>
                    <span class="card-heading">Daily Habits</span>
                  </div>
                </div>
                <span class="pill-badge pill-badge--neutral">${habitPct}%</span>
              </div>
              
              <div class="metric-hero">
                <div class="metric-hero-value">
                  ${completedHabits} <span class="metric-hero-unit">/ ${totalHabits} completed</span>
                </div>
                <div class="metric-hero-subtext">
                  ${totalHabits - completedHabits > 0 ? (totalHabits - completedHabits) + ' routines remaining' : (totalHabits === 0 ? 'Add your daily routines' : 'All habits completed!')}
                </div>
              </div>

              <div class="progress-track">
                <div class="progress-bar-fill" style="width: ${habitPct}%;"></div>
              </div>

              <div class="card-footer-nl" style="display: flex; justify-content: space-between; align-items: center;">
                <button class="btn btn--subtle btn--sm" onclick="window.location.hash = 'habits'">Manage Habits</button>
                <button class="btn btn--ghost btn--sm" onclick="window.location.hash = 'habits'">Check</button>
              </div>
            </div>

          </div>

        </div>
      `;
    },

    // -----------------------------------------------------------------------
    // B. HYDRATION (Hero Numbers, Timeline History, Edit & Undo)
    // -----------------------------------------------------------------------
    async renderWater(container) {
      const today = App.todayDate;
      const allLogs = await getAll('water_logs');
      const todayLogs = allLogs.filter((l) => l.date === today).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      
      const totalAmount = todayLogs.reduce((sum, l) => sum + (Number(l.amount) || 0), 0);
      const goal = 3000;
      const pct = Math.min(100, Math.round((totalAmount / goal) * 100));

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          
          <!-- Top Hero & Quick Log Card -->
          <div class="card-nl">
            <div class="card-header-nl">
              <div class="card-title-group">
                <div class="card-icon-badge">${Icons.water}</div>
                <div>
                  <span class="card-tag">Hydration Tracker</span>
                  <span class="card-heading">Daily Water Goal</span>
                </div>
              </div>
              <span class="pill-badge pill-badge--neutral">${pct}% Reached</span>
            </div>

            <div class="metric-hero">
              <div class="metric-hero-value">
                ${totalAmount.toLocaleString()} <span class="metric-hero-unit">/ ${goal.toLocaleString()} ml</span>
              </div>
              <div class="metric-hero-subtext">
                ${goal - totalAmount > 0 ? (goal - totalAmount) + ' ml remaining to achieve optimal hydration' : 'Daily hydration target accomplished!'}
              </div>
            </div>

            <div class="progress-track" style="height: 8px; margin: 12px 0;">
              <div class="progress-bar-fill" style="width: ${pct}%;"></div>
            </div>

            <!-- Quick Add Action Bar -->
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px;">
              <button class="quick-action-pill" onclick="Views.addWaterEntry(200, 'Cup')">+200ml Cup</button>
              <button class="quick-action-pill" onclick="Views.addWaterEntry(250, 'Glass')">+250ml Glass</button>
              <button class="quick-action-pill" onclick="Views.addWaterEntry(500, 'Bottle')">+500ml Bottle</button>
              <button class="quick-action-pill" onclick="Views.addWaterEntry(750, 'Flask')">+750ml Flask</button>
              <button class="btn btn--subtle btn--sm" onclick="Views.openCustomWaterModal()">+ Custom Entry</button>
            </div>
          </div>

          <!-- Timeline History Stream -->
          <div class="card-nl">
            <div class="card-header-nl">
              <span class="card-heading">Today's Hydration Timeline</span>
              <span class="pill-badge pill-badge--subtle">${todayLogs.length} ${todayLogs.length === 1 ? 'entry' : 'entries'}</span>
            </div>

            ${todayLogs.length === 0 ? `
              <div class="empty-state-card">
                <div class="empty-state-icon">${Icons.water}</div>
                <div class="empty-state-title">No water logged today</div>
                <div class="empty-state-desc">Drink a glass of water and tap any preset button above to record your intake.</div>
                <button class="btn btn--ink btn--sm" onclick="Views.addWaterEntry(250, 'Glass')">+ Log 250ml Glass</button>
              </div>
            ` : `
              <div class="timeline-stream">
                ${todayLogs.map((log) => `
                  <div class="timeline-item">
                    <div class="timeline-left">
                      <span class="timeline-time">${formatDisplayTime(log.timestamp)}</span>
                      <span class="timeline-badge">+${log.amount} ml</span>
                      <span class="timeline-sub">${log.note || 'Water Log'}</span>
                    </div>
                    <div class="timeline-actions">
                      <button class="btn btn--ghost btn--icon-only" title="Edit Amount" onclick="Views.openEditWaterModal('${log.id}', ${log.amount}, '${log.note || ''}')">
                        ${Icons.edit}
                      </button>
                      <button class="btn btn--ghost btn--icon-only" title="Delete Entry" onclick="Views.deleteWaterEntry('${log.id}')">
                        ${Icons.trash}
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>

        </div>
      `;
    },

    async addWaterEntry(amount, note = '') {
      const item = {
        id: 'water_' + Date.now(),
        amount: Number(amount),
        date: App.todayDate,
        timestamp: new Date().toISOString(),
        note: note
      };
      await putItem('water_logs', item);
      ToastManager.showUndo(`Added +${amount}ml water`, async () => {
        await deleteItem('water_logs', item.id);
        Views.renderWater(document.getElementById('app-view'));
      });
      Views.renderWater(document.getElementById('app-view'));
    },

    async deleteWaterEntry(id) {
      const logs = await getAll('water_logs');
      const item = logs.find((l) => l.id === id);
      if (!item) return;

      await deleteItem('water_logs', id);
      ToastManager.showUndo(`Deleted ${item.amount}ml water log`, async () => {
        await putItem('water_logs', item);
        Views.renderWater(document.getElementById('app-view'));
      });
      Views.renderWater(document.getElementById('app-view'));
    },

    openCustomWaterModal() {
      Modal.open(`
        <div class="modal-header-nl">
          <span class="modal-title-nl">Add Custom Water Intake</span>
          <button class="btn btn--subtle btn--sm" onclick="Modal.close()">Cancel</button>
        </div>
        <form onsubmit="Views.handleCustomWaterSubmit(event)" style="display: flex; flex-direction: column; gap: 14px; margin-top: 10px;">
          <div class="form-group-nl">
            <label class="form-label-nl">Volume in Milliliters (ml)</label>
            <input type="number" id="custom-water-ml" class="input-nl" placeholder="e.g. 350" min="10" max="3000" required autofocus />
          </div>
          <div class="form-group-nl">
            <label class="form-label-nl">Label / Container (Optional)</label>
            <input type="text" id="custom-water-label" class="input-nl" placeholder="e.g. Warm water, Lemon water, Mug" />
          </div>
          <button type="submit" class="btn btn--ink" style="width: 100%;">Save Water Log</button>
        </form>
      `);
    },

    async handleCustomWaterSubmit(e) {
      e.preventDefault();
      const ml = document.getElementById('custom-water-ml').value;
      const label = document.getElementById('custom-water-label').value;
      if (!ml || Number(ml) <= 0) return;
      Modal.close();
      await Views.addWaterEntry(ml, label || 'Custom');
    },

    openEditWaterModal(id, currentAmount, currentNote) {
      Modal.open(`
        <div class="modal-header-nl">
          <span class="modal-title-nl">Edit Water Entry</span>
          <button class="btn btn--subtle btn--sm" onclick="Modal.close()">Cancel</button>
        </div>
        <form onsubmit="Views.handleEditWaterSubmit(event, '${id}')" style="display: flex; flex-direction: column; gap: 14px; margin-top: 10px;">
          <div class="form-group-nl">
            <label class="form-label-nl">Volume in Milliliters (ml)</label>
            <input type="number" id="edit-water-ml" class="input-nl" value="${currentAmount}" min="10" max="3000" required autofocus />
          </div>
          <div class="form-group-nl">
            <label class="form-label-nl">Label / Container</label>
            <input type="text" id="edit-water-label" class="input-nl" value="${currentNote}" />
          </div>
          <button type="submit" class="btn btn--ink" style="width: 100%;">Update Entry</button>
        </form>
      `);
    },

    async handleEditWaterSubmit(e, id) {
      e.preventDefault();
      const ml = document.getElementById('edit-water-ml').value;
      const label = document.getElementById('edit-water-label').value;
      const logs = await getAll('water_logs');
      const item = logs.find((l) => l.id === id);
      if (!item) return;

      item.amount = Number(ml);
      item.note = label;
      await putItem('water_logs', item);
      Modal.close();
      ToastManager.show('Water entry updated');
      Views.renderWater(document.getElementById('app-view'));
    },

    // -----------------------------------------------------------------------
    // C. NUTRITION & FIBER (Hero Numbers, User Templates, Search & Edit)
    // -----------------------------------------------------------------------
    async renderDiet(container) {
      const today = App.todayDate;
      const allLogs = await getAll('diet_logs');
      const templates = await getAll('meal_templates');
      const todayLogs = allLogs.filter((l) => l.date === today).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      
      const totalFiber = todayLogs.reduce((sum, l) => sum + (Number(l.fiber) || 0), 0);
      const goal = 30;
      const pct = Math.min(100, Math.round((totalFiber / goal) * 100));

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          
          <!-- Top Hero & Fiber Goal -->
          <div class="card-nl">
            <div class="card-header-nl">
              <div class="card-title-group">
                <div class="card-icon-badge">${Icons.diet}</div>
                <div>
                  <span class="card-tag">Digestive Nutrition</span>
                  <span class="card-heading">Dietary Fiber Goal</span>
                </div>
              </div>
              <span class="pill-badge pill-badge--neutral">${pct}% Reached</span>
            </div>

            <div class="metric-hero">
              <div class="metric-hero-value">
                ${totalFiber} <span class="metric-hero-unit">/ ${goal} g fiber</span>
              </div>
              <div class="metric-hero-subtext">
                ${goal - totalFiber > 0 ? (goal - totalFiber) + 'g remaining for optimal digestive regularity' : 'Target reached for smooth gut mobility'}
              </div>
            </div>

            <div class="progress-track" style="height: 8px; margin: 12px 0;">
              <div class="progress-bar-fill" style="width: ${pct}%;"></div>
            </div>

            <!-- User Saved Templates (1-Click Re-log) -->
            <div style="margin-top: 10px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 12px; font-weight: 600; color: var(--text-ink);">My Quick Meal Templates</span>
                <span style="font-size: 11px; color: var(--text-muted);">Click to log instantly</span>
              </div>
              
              <div class="template-pill-list">
                ${templates.length === 0 ? `
                  <span style="font-size: 11.5px; color: var(--text-muted); font-style: italic;">
                    No saved templates yet. When logging a meal below, check "Save as Template" to add it here.
                  </span>
                ` : templates.map(t => `
                  <div class="template-pill" onclick="Views.logTemplateMeal('${t.id}')">
                    <span>${t.name} (+${t.fiber}g)</span>
                    <button class="btn--ghost" style="padding: 0 2px; color: var(--text-subtle);" title="Remove template" onclick="event.stopPropagation(); Views.deleteTemplate('${t.id}')">×</button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Add Meal Card -->
          <div class="card-nl">
            <div class="card-header-nl">
              <span class="card-heading">Log a Meal or Snack</span>
            </div>
            
            <form onsubmit="Views.handleMealSubmit(event)" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; align-items: flex-end;">
              <div class="form-group-nl">
                <label class="form-label-nl">Meal Type</label>
                <select id="meal-type" class="select-nl">
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Snack">Snack</option>
                </select>
              </div>

              <div class="form-group-nl">
                <label class="form-label-nl">Meal Description</label>
                <input type="text" id="meal-name" class="input-nl" placeholder="e.g. Oatmeal with chia seeds & apple" required />
              </div>

              <div class="form-group-nl">
                <label class="form-label-nl">Fiber Content (grams)</label>
                <input type="number" id="meal-fiber" class="input-nl" placeholder="e.g. 8" min="0" max="100" step="0.5" required />
              </div>

              <div style="display: flex; flex-direction: column; gap: 8px;">
                <label style="display: flex; align-items: center; gap: 6px; font-size: 11.5px; color: var(--text-muted); cursor: pointer;">
                  <input type="checkbox" id="save-as-template-check" />
                  <span>Save as Quick Template</span>
                </label>
                <button type="submit" class="btn btn--ink" style="width: 100%;">
                  ${Icons.plus}
                  <span>Log Meal</span>
                </button>
              </div>
            </form>
          </div>

          <!-- Timeline History Stream -->
          <div class="card-nl">
            <div class="card-header-nl" style="flex-wrap: wrap; gap: 8px;">
              <span class="card-heading">Today's Meal Timeline</span>
              
              <!-- Simple Filter Search -->
              <div class="search-input-wrapper">
                ${Icons.search}
                <input type="text" id="diet-search-filter" class="input-nl" placeholder="Search meals..." oninput="Views.filterDietTimeline(this.value)" />
              </div>
            </div>

            <div id="diet-timeline-container">
              ${Views.renderDietTimelineHtml(todayLogs)}
            </div>
          </div>

        </div>
      `;
    },

    renderDietTimelineHtml(logs) {
      if (logs.length === 0) {
        return `
          <div class="empty-state-card">
            <div class="empty-state-icon">${Icons.diet}</div>
            <div class="empty-state-title">No meals recorded today</div>
            <div class="empty-state-desc">Track what you eat and keep a close eye on gut fiber to assist regular bowel mobility.</div>
          </div>
        `;
      }

      return `
        <div class="timeline-stream">
          ${logs.map((log) => `
            <div class="timeline-item">
              <div class="timeline-left">
                <span class="timeline-time">${formatDisplayTime(log.timestamp)}</span>
                <span class="pill-badge pill-badge--neutral">${log.type}</span>
                <span class="timeline-label">${log.name}</span>
                <span class="timeline-badge">+${log.fiber}g fiber</span>
              </div>
              <div class="timeline-actions">
                <button class="btn btn--ghost btn--icon-only" title="Edit Meal" onclick="Views.openEditDietModal('${log.id}')">
                  ${Icons.edit}
                </button>
                <button class="btn btn--ghost btn--icon-only" title="Delete Meal" onclick="Views.deleteDietEntry('${log.id}')">
                  ${Icons.trash}
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    },

    filterDietTimeline(query) {
      const container = document.getElementById('diet-timeline-container');
      if (!container) return;
      getAll('diet_logs').then((allLogs) => {
        const today = App.todayDate;
        let todayLogs = allLogs.filter((l) => l.date === today);
        if (query && query.trim()) {
          const q = query.toLowerCase();
          todayLogs = todayLogs.filter(l => l.name.toLowerCase().includes(q) || l.type.toLowerCase().includes(q));
        }
        container.innerHTML = Views.renderDietTimelineHtml(todayLogs);
      });
    },

    async handleMealSubmit(e) {
      e.preventDefault();
      const type = document.getElementById('meal-type').value;
      const name = document.getElementById('meal-name').value;
      const fiber = document.getElementById('meal-fiber').value;
      const saveAsTemplate = document.getElementById('save-as-template-check').checked;

      const item = {
        id: 'diet_' + Date.now(),
        type,
        name,
        fiber: Number(fiber),
        date: App.todayDate,
        timestamp: new Date().toISOString()
      };

      await putItem('diet_logs', item);

      if (saveAsTemplate) {
        const template = {
          id: 'template_' + Date.now(),
          name,
          fiber: Number(fiber),
          type
        };
        await putItem('meal_templates', template);
      }

      ToastManager.showUndo(`Logged ${name} (+${fiber}g)`, async () => {
        await deleteItem('diet_logs', item.id);
        Views.renderDiet(document.getElementById('app-view'));
      });

      Views.renderDiet(document.getElementById('app-view'));
    },

    async logTemplateMeal(templateId) {
      const templates = await getAll('meal_templates');
      const t = templates.find((item) => item.id === templateId);
      if (!t) return;

      const item = {
        id: 'diet_' + Date.now(),
        type: t.type || 'Meal',
        name: t.name,
        fiber: Number(t.fiber),
        date: App.todayDate,
        timestamp: new Date().toISOString()
      };

      await putItem('diet_logs', item);
      ToastManager.showUndo(`Logged template: ${t.name}`, async () => {
        await deleteItem('diet_logs', item.id);
        Views.renderDiet(document.getElementById('app-view'));
      });
      Views.renderDiet(document.getElementById('app-view'));
    },

    async deleteTemplate(templateId) {
      await deleteItem('meal_templates', templateId);
      ToastManager.show('Template removed');
      Views.renderDiet(document.getElementById('app-view'));
    },

    async deleteDietEntry(id) {
      const logs = await getAll('diet_logs');
      const item = logs.find((l) => l.id === id);
      if (!item) return;

      await deleteItem('diet_logs', id);
      ToastManager.showUndo(`Deleted meal: ${item.name}`, async () => {
        await putItem('diet_logs', item);
        Views.renderDiet(document.getElementById('app-view'));
      });
      Views.renderDiet(document.getElementById('app-view'));
    },

    async openEditDietModal(id) {
      const logs = await getAll('diet_logs');
      const item = logs.find((l) => l.id === id);
      if (!item) return;

      Modal.open(`
        <div class="modal-header-nl">
          <span class="modal-title-nl">Edit Meal Log</span>
          <button class="btn btn--subtle btn--sm" onclick="Modal.close()">Cancel</button>
        </div>
        <form onsubmit="Views.handleEditDietSubmit(event, '${id}')" style="display: flex; flex-direction: column; gap: 14px; margin-top: 10px;">
          <div class="form-group-nl">
            <label class="form-label-nl">Meal Type</label>
            <select id="edit-meal-type" class="select-nl">
              <option value="Breakfast" ${item.type === 'Breakfast' ? 'selected' : ''}>Breakfast</option>
              <option value="Lunch" ${item.type === 'Lunch' ? 'selected' : ''}>Lunch</option>
              <option value="Dinner" ${item.type === 'Dinner' ? 'selected' : ''}>Dinner</option>
              <option value="Snack" ${item.type === 'Snack' ? 'selected' : ''}>Snack</option>
            </select>
          </div>
          <div class="form-group-nl">
            <label class="form-label-nl">Meal Description</label>
            <input type="text" id="edit-meal-name" class="input-nl" value="${item.name}" required autofocus />
          </div>
          <div class="form-group-nl">
            <label class="form-label-nl">Fiber (grams)</label>
            <input type="number" id="edit-meal-fiber" class="input-nl" value="${item.fiber}" min="0" max="100" step="0.5" required />
          </div>
          <button type="submit" class="btn btn--ink" style="width: 100%;">Save Changes</button>
        </form>
      `);
    },

    async handleEditDietSubmit(e, id) {
      e.preventDefault();
      const logs = await getAll('diet_logs');
      const item = logs.find((l) => l.id === id);
      if (!item) return;

      item.type = document.getElementById('edit-meal-type').value;
      item.name = document.getElementById('edit-meal-name').value;
      item.fiber = Number(document.getElementById('edit-meal-fiber').value);

      await putItem('diet_logs', item);
      Modal.close();
      ToastManager.show('Meal updated');
      Views.renderDiet(document.getElementById('app-view'));
    },

    // -----------------------------------------------------------------------
    // D. BOWEL & DIGESTIVE CARE (Clinical Bristol Cards, Pain Scale, Timeline)
    // -----------------------------------------------------------------------
    selectedBristolType: 4,

    async renderBowel(container) {
      const today = App.todayDate;
      const allLogs = await getAll('bowel_logs');
      const todayLogs = allLogs.filter((l) => l.date === today).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      
      const lastLog = todayLogs.length ? todayLogs[0] : null;

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          
          <!-- Clinical Summary Hero -->
          <div class="card-nl">
            <div class="card-header-nl">
              <div class="card-title-group">
                <div class="card-icon-badge">${Icons.bowel}</div>
                <div>
                  <span class="card-tag">Digestive Health & Regularity</span>
                  <span class="card-heading">Bowel Movement Tracker</span>
                </div>
              </div>
              ${lastLog ? '<span class="pill-badge pill-badge--ink">Today Logged</span>' : '<span class="pill-badge pill-badge--subtle">No Entry Yet</span>'}
            </div>

            <div class="metric-hero">
              <div class="metric-hero-value">
                ${lastLog ? 'Type ' + lastLog.bristolType + ' (' + (BristolTypes.find(b => b.type === Number(lastLog.bristolType))?.tag || '') + ')' : 'No Movement Recorded'}
              </div>
              <div class="metric-hero-subtext">
                ${lastLog ? 'Recorded at ' + formatDisplayTime(lastLog.timestamp) + (lastLog.notes ? ' — ' + lastLog.notes : '') : 'Log stool consistency and comfort to identify digestive triggers.'}
              </div>
            </div>
          </div>

          <!-- Bristol Stool Chart Selector (Types 1 to 7) -->
          <div class="card-nl">
            <div class="card-header-nl">
              <div>
                <span class="card-heading">1. Select Bristol Stool Type</span>
                <p style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
                  Types 1–2 indicate constipation; 3–4 are optimal; 5–7 indicate loose stool / diarrhea.
                </p>
              </div>
            </div>

            <div class="bristol-grid">
              ${BristolTypes.map(b => `
                <div class="bristol-card ${Views.selectedBristolType === b.type ? 'bristol-card--active' : ''}" onclick="Views.selectBristolType(${b.type})">
                  <div class="bristol-type-header">
                    <span class="bristol-type-num">${b.title}</span>
                    <span class="bristol-tag bristol-tag--${b.category}">${b.tag}</span>
                  </div>
                  <p class="bristol-desc">${b.desc}</p>
                </div>
              `).join('')}
            </div>

            <!-- Parameters: Pain, Straining, Blood, Notes -->
            <form onsubmit="Views.handleBowelSubmit(event)" style="display: flex; flex-direction: column; gap: 16px; margin-top: 16px; border-top: 1px solid var(--border-subtle); padding-top: 16px;">
              
              <!-- Pain Scale Slider with Real-time Feedback -->
              <div class="form-group-nl">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <label class="form-label-nl">Discomfort / Pain Level</label>
                  <span id="pain-feedback-text" style="font-size: 12px; font-weight: 600; color: var(--text-ink);">0 (None)</span>
                </div>
                <input type="range" id="bowel-pain" min="0" max="10" value="0" style="width: 100%; accent-color: var(--text-ink);" oninput="Views.updatePainFeedback(this.value)" />
              </div>

              <!-- Checkbox Toggles -->
              <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                <label style="display: flex; align-items: center; gap: 6px; font-size: 12.5px; color: var(--text-ink); cursor: pointer;">
                  <input type="checkbox" id="bowel-straining" />
                  <span>Straining Required</span>
                </label>
                <label style="display: flex; align-items: center; gap: 6px; font-size: 12.5px; color: var(--text-ink); cursor: pointer;">
                  <input type="checkbox" id="bowel-blood" />
                  <span>Blood Noticed</span>
                </label>
              </div>

              <div class="form-group-nl">
                <label class="form-label-nl">Notes / Trigger Foods (Optional)</label>
                <input type="text" id="bowel-notes" class="input-nl" placeholder="e.g. After spicy dinner, felt relief, morning coffee" />
              </div>

              <button type="submit" class="btn btn--ink" style="width: 100%; padding: 10px;">
                ${Icons.check}
                <span>Save Bowel Movement Log</span>
              </button>
            </form>
          </div>

          <!-- Timeline History Stream -->
          <div class="card-nl">
            <div class="card-header-nl">
              <span class="card-heading">Digestive Timeline</span>
              <span class="pill-badge pill-badge--subtle">${allLogs.length} total logs</span>
            </div>

            ${allLogs.length === 0 ? `
              <div class="empty-state-card">
                <div class="empty-state-icon">${Icons.bowel}</div>
                <div class="empty-state-title">No bowel logs recorded</div>
                <div class="empty-state-desc">Consistent logging gives your physician clear clinical evidence of your digestive health.</div>
              </div>
            ` : `
              <div class="timeline-stream">
                ${allLogs.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 10).map((log) => {
                  const bMeta = BristolTypes.find(b => b.type === Number(log.bristolType)) || { tag: 'Type ' + log.bristolType, category: 'normal' };
                  return `
                    <div class="timeline-item">
                      <div class="timeline-left">
                        <span class="timeline-time">${formatDisplayDate(log.timestamp)} ${formatDisplayTime(log.timestamp)}</span>
                        <span class="bristol-tag bristol-tag--${bMeta.category}">Type ${log.bristolType} (${bMeta.tag})</span>
                        ${log.painScore > 0 ? `<span class="pill-badge pill-badge--neutral">Pain ${log.painScore}/10</span>` : ''}
                        ${log.blood ? `<span class="pill-badge pill-badge--ink">Blood Tagged</span>` : ''}
                        ${log.notes ? `<span class="timeline-sub">${log.notes}</span>` : ''}
                      </div>
                      <div class="timeline-actions">
                        <button class="btn btn--ghost btn--icon-only" title="Delete Log" onclick="Views.deleteBowelEntry('${log.id}')">
                          ${Icons.trash}
                        </button>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            `}
          </div>

        </div>
      `;
    },

    selectBristolType(typeNum) {
      this.selectedBristolType = Number(typeNum);
      document.querySelectorAll('.bristol-card').forEach((card, idx) => {
        if (idx + 1 === typeNum) {
          card.classList.add('bristol-card--active');
        } else {
          card.classList.remove('bristol-card--active');
        }
      });
    },

    updatePainFeedback(val) {
      const num = Number(val);
      const textEl = document.getElementById('pain-feedback-text');
      if (!textEl) return;
      let label = '0 (None)';
      if (num > 0 && num <= 3) label = `${num} (Mild)`;
      else if (num >= 4 && num <= 6) label = `${num} (Moderate)`;
      else if (num >= 7) label = `${num} (Severe)`;
      textEl.textContent = label;
    },

    async handleBowelSubmit(e) {
      e.preventDefault();
      const painScore = Number(document.getElementById('bowel-pain').value) || 0;
      const straining = document.getElementById('bowel-straining').checked;
      const blood = document.getElementById('bowel-blood').checked;
      const notes = document.getElementById('bowel-notes').value;

      const item = {
        id: 'bowel_' + Date.now(),
        bristolType: this.selectedBristolType,
        painScore,
        straining,
        blood,
        notes,
        date: App.todayDate,
        timestamp: new Date().toISOString()
      };

      await putItem('bowel_logs', item);
      ToastManager.showUndo(`Logged Type ${this.selectedBristolType} Movement`, async () => {
        await deleteItem('bowel_logs', item.id);
        Views.renderBowel(document.getElementById('app-view'));
      });

      Views.renderBowel(document.getElementById('app-view'));
    },

    async deleteBowelEntry(id) {
      const logs = await getAll('bowel_logs');
      const item = logs.find((l) => l.id === id);
      if (!item) return;

      await deleteItem('bowel_logs', id);
      ToastManager.showUndo('Deleted bowel log entry', async () => {
        await putItem('bowel_logs', item);
        Views.renderBowel(document.getElementById('app-view'));
      });
      Views.renderBowel(document.getElementById('app-view'));
    },

    // -----------------------------------------------------------------------
    // E. HABITS & ROUTINES (7-Day Dot Matrix, Streak Counters, Micro-Bounce)
    // -----------------------------------------------------------------------
    async renderHabits(container) {
      const habits = await getAll('habits');
      const today = App.todayDate;
      const last7Days = getLastNDays(7);

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          
          <!-- Habit Header & Create Form -->
          <div class="card-nl">
            <div class="card-header-nl">
              <div class="card-title-group">
                <div class="card-icon-badge">${Icons.habits}</div>
                <div>
                  <span class="card-tag">Daily Consistency</span>
                  <span class="card-heading">Habit Tracker & Streaks</span>
                </div>
              </div>
            </div>

            <form onsubmit="Views.handleAddHabitSubmit(event)" style="display: flex; gap: 10px; margin-top: 8px;">
              <input type="text" id="habit-new-title" class="input-nl" placeholder="e.g. Morning 15-min walk, 500ml water after waking, evening stretch" required />
              <button type="submit" class="btn btn--ink" style="white-space: nowrap;">
                ${Icons.plus}
                <span>Add Habit</span>
              </button>
            </form>
          </div>

          <!-- Habit Cards List with 7-Day Matrix -->
          <div class="card-nl">
            <div class="card-header-nl">
              <span class="card-heading">Active Routines</span>
              <span class="pill-badge pill-badge--subtle">${habits.length} habits</span>
            </div>

            ${habits.length === 0 ? `
              <div class="empty-state-card">
                <div class="empty-state-icon">${Icons.habits}</div>
                <div class="empty-state-title">No habits created yet</div>
                <div class="empty-state-desc">Build daily rituals that support digestive comfort and physical longevity.</div>
              </div>
            ` : `
              <div style="display: flex; flex-direction: column; gap: 10px;">
                ${habits.map((h) => {
                  const isDoneToday = h.history && h.history[today];
                  
                  // Calculate streaks & 7-day completion rate
                  let streak = 0;
                  let checkDate = new Date();
                  while (true) {
                    const y = checkDate.getFullYear();
                    const m = String(checkDate.getMonth() + 1).padStart(2, '0');
                    const d = String(checkDate.getDate()).padStart(2, '0');
                    const dStr = `${y}-${m}-${d}`;
                    if (h.history && h.history[dStr]) {
                      streak++;
                      checkDate.setDate(checkDate.getDate() - 1);
                    } else {
                      break;
                    }
                  }

                  return `
                    <div class="habit-card-row">
                      <div class="habit-main-col">
                        <button class="habit-checkbox ${isDoneToday ? 'habit-checkbox--checked' : ''}" onclick="Views.toggleHabit('${h.id}')" aria-label="Toggle habit completion">
                          ${isDoneToday ? Icons.check : ''}
                        </button>
                        <div class="habit-details">
                          <span class="habit-title ${isDoneToday ? 'habit-title--struck' : ''}">${h.title}</span>
                          <div class="habit-stats-strip">
                            <span>Streak: <strong class="habit-stats-val">🔥 ${streak} days</strong></span>
                            <!-- 7-Day Matrix -->
                            <div class="habit-dots-matrix" title="Last 7 days history">
                              ${last7Days.map(d => {
                                const done = h.history && h.history[d.dateStr];
                                return `<div class="habit-dot ${done ? 'habit-dot--done' : ''}" title="${d.dateStr}: ${done ? 'Done' : 'Missed'}"></div>`;
                              }).join('')}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="timeline-actions">
                        <button class="btn btn--ghost btn--icon-only" title="Edit Habit" onclick="Views.openEditHabitModal('${h.id}')">
                          ${Icons.edit}
                        </button>
                        <button class="btn btn--ghost btn--icon-only" title="Delete Habit" onclick="Views.deleteHabit('${h.id}')">
                          ${Icons.trash}
                        </button>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            `}
          </div>

        </div>
      `;
    },

    async handleAddHabitSubmit(e) {
      e.preventDefault();
      const title = document.getElementById('habit-new-title').value;
      if (!title.trim()) return;

      const item = {
        id: 'habit_' + Date.now(),
        title: title.trim(),
        createdAt: new Date().toISOString(),
        history: {}
      };

      await putItem('habits', item);
      ToastManager.showUndo(`Added habit: ${item.title}`, async () => {
        await deleteItem('habits', item.id);
        Views.renderHabits(document.getElementById('app-view'));
      });

      Views.renderHabits(document.getElementById('app-view'));
    },

    async toggleHabit(id) {
      const habits = await getAll('habits');
      const item = habits.find((h) => h.id === id);
      if (!item) return;

      const today = App.todayDate;
      if (!item.history) item.history = {};

      if (item.history[today]) {
        delete item.history[today];
      } else {
        item.history[today] = true;
      }

      await putItem('habits', item);
      Views.renderHabits(document.getElementById('app-view'));
    },

    async deleteHabit(id) {
      const habits = await getAll('habits');
      const item = habits.find((h) => h.id === id);
      if (!item) return;

      await deleteItem('habits', id);
      ToastManager.showUndo(`Deleted habit: ${item.title}`, async () => {
        await putItem('habits', item);
        Views.renderHabits(document.getElementById('app-view'));
      });
      Views.renderHabits(document.getElementById('app-view'));
    },

    async openEditHabitModal(id) {
      const habits = await getAll('habits');
      const item = habits.find((h) => h.id === id);
      if (!item) return;

      Modal.open(`
        <div class="modal-header-nl">
          <span class="modal-title-nl">Edit Habit</span>
          <button class="btn btn--subtle btn--sm" onclick="Modal.close()">Cancel</button>
        </div>
        <form onsubmit="Views.handleEditHabitSubmit(event, '${id}')" style="display: flex; flex-direction: column; gap: 14px; margin-top: 10px;">
          <div class="form-group-nl">
            <label class="form-label-nl">Habit Title</label>
            <input type="text" id="edit-habit-title" class="input-nl" value="${item.title}" required autofocus />
          </div>
          <button type="submit" class="btn btn--ink" style="width: 100%;">Save Changes</button>
        </form>
      `);
    },

    async handleEditHabitSubmit(e, id) {
      e.preventDefault();
      const habits = await getAll('habits');
      const item = habits.find((h) => h.id === id);
      if (!item) return;

      item.title = document.getElementById('edit-habit-title').value.trim();
      await putItem('habits', item);
      Modal.close();
      ToastManager.show('Habit updated');
      Views.renderHabits(document.getElementById('app-view'));
    },

    // -----------------------------------------------------------------------
    // F. MEDICATIONS & VITAMINS
    // -----------------------------------------------------------------------
    async renderMeds(container) {
      const meds = await getAll('medications');

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          
          <div class="card-nl">
            <div class="card-header-nl">
              <div class="card-title-group">
                <div class="card-icon-badge">${Icons.meds}</div>
                <div>
                  <span class="card-tag">Prescriptions & Supplements</span>
                  <span class="card-heading">Medication Schedule</span>
                </div>
              </div>
            </div>

            <form onsubmit="Views.handleAddMedSubmit(event)" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; align-items: flex-end; margin-top: 8px;">
              <div class="form-group-nl">
                <label class="form-label-nl">Medicine Name</label>
                <input type="text" id="med-name" class="input-nl" placeholder="e.g. Probiotics, Vitamin D3" required />
              </div>
              <div class="form-group-nl">
                <label class="form-label-nl">Dosage</label>
                <input type="text" id="med-dosage" class="input-nl" placeholder="e.g. 1 Capsule, 1000 IU" required />
              </div>
              <div class="form-group-nl">
                <label class="form-label-nl">Timing</label>
                <select id="med-timing" class="select-nl">
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening / Night">Evening / Night</option>
                  <option value="As Needed">As Needed</option>
                </select>
              </div>
              <button type="submit" class="btn btn--ink" style="width: 100%;">
                ${Icons.plus}
                <span>Add Medicine</span>
              </button>
            </form>
          </div>

          <div class="card-nl">
            <div class="card-header-nl">
              <span class="card-heading">Active Medications</span>
              <span class="pill-badge pill-badge--subtle">${meds.length} prescriptions</span>
            </div>

            ${meds.length === 0 ? `
              <div class="empty-state-card">
                <div class="empty-state-icon">${Icons.meds}</div>
                <div class="empty-state-title">No medications scheduled</div>
                <div class="empty-state-desc">Keep track of your daily supplements and doctor-prescribed treatments.</div>
              </div>
            ` : `
              <div style="display: flex; flex-direction: column; gap: 10px;">
                ${meds.map((m) => `
                  <div class="timeline-item">
                    <div class="timeline-left">
                      <span class="pill-badge pill-badge--neutral">${m.timing}</span>
                      <span class="timeline-label">${m.name}</span>
                      <span class="timeline-sub">(${m.dosage})</span>
                    </div>
                    <div class="timeline-actions">
                      <button class="btn btn--ghost btn--icon-only" title="Delete Medication" onclick="Views.deleteMed('${m.id}')">
                        ${Icons.trash}
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>

        </div>
      `;
    },

    async handleAddMedSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('med-name').value;
      const dosage = document.getElementById('med-dosage').value;
      const timing = document.getElementById('med-timing').value;

      const item = {
        id: 'med_' + Date.now(),
        name,
        dosage,
        timing,
        createdAt: new Date().toISOString()
      };

      await putItem('medications', item);
      ToastManager.showUndo(`Added ${name}`, async () => {
        await deleteItem('medications', item.id);
        Views.renderMeds(document.getElementById('app-view'));
      });
      Views.renderMeds(document.getElementById('app-view'));
    },

    async deleteMed(id) {
      const meds = await getAll('medications');
      const item = meds.find((m) => m.id === id);
      if (!item) return;

      await deleteItem('medications', id);
      ToastManager.showUndo(`Deleted ${item.name}`, async () => {
        await putItem('medications', item);
        Views.renderMeds(document.getElementById('app-view'));
      });
      Views.renderMeds(document.getElementById('app-view'));
    },

    // -----------------------------------------------------------------------
    // G. DOCTOR MODE (Clinical Report, Print Layout, PDF Export)
    // -----------------------------------------------------------------------
    async renderDoctorMode(container) {
      const waterLogs = await getAll('water_logs');
      const dietLogs = await getAll('diet_logs');
      const bowelLogs = await getAll('bowel_logs');
      const meds = await getAll('medications');

      const totalWaterEntries = waterLogs.length;
      const avgWater = totalWaterEntries ? Math.round(waterLogs.reduce((s, l) => s + (Number(l.amount) || 0), 0) / Math.max(1, new Set(waterLogs.map(l => l.date)).size)) : 0;
      const avgFiber = dietLogs.length ? (dietLogs.reduce((s, l) => s + (Number(l.fiber) || 0), 0) / Math.max(1, new Set(dietLogs.map(l => l.date)).size)).toFixed(1) : 0;

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          
          <div class="card-nl no-print">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
              <div>
                <span class="card-tag">Physician Consultation Hub</span>
                <h2 style="font-size: 20px; font-weight: 700; color: var(--text-ink); margin-top: 2px;">
                  Doctor Mode — Clinical Summary
                </h2>
                <p style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">
                  High-contrast clinical digest designed for doctors, gastroenterologists, and dietitians.
                </p>
              </div>
              <button class="btn btn--ink" onclick="window.print()">
                ${Icons.print}
                <span>Print / Save as PDF</span>
              </button>
            </div>
          </div>

          <!-- Printable Clinical Report Page -->
          <div class="card-nl doctor-report-page" style="border: 2px solid var(--border-dark);">
            <div style="border-bottom: 2px solid var(--border-dark); padding-bottom: 14px; margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                  <h1 style="font-size: 20px; font-weight: 800; color: var(--text-ink); letter-spacing: -0.02em;">
                    NORTHLIFE CLINICAL HEALTH SUMMARY
                  </h1>
                  <span style="font-size: 12px; color: var(--text-muted);">
                    Generated on: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <span class="pill-badge pill-badge--ink">CONFIDENTIAL PATIENT DATA</span>
              </div>
            </div>

            <!-- Quantitative Clinical Averages -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 16px;">
              <div style="padding: 12px; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
                <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--text-muted);">Avg Daily Water</span>
                <div style="font-size: 22px; font-weight: 700; color: var(--text-ink); margin-top: 2px;">${avgWater} ml</div>
              </div>
              <div style="padding: 12px; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
                <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--text-muted);">Avg Daily Fiber</span>
                <div style="font-size: 22px; font-weight: 700; color: var(--text-ink); margin-top: 2px;">${avgFiber} g</div>
              </div>
              <div style="padding: 12px; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
                <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--text-muted);">Bowel Logs Count</span>
                <div style="font-size: 22px; font-weight: 700; color: var(--text-ink); margin-top: 2px;">${bowelLogs.length} events</div>
              </div>
            </div>

            <!-- Recent Bowel Movement Log Table -->
            <div style="margin-bottom: 16px;">
              <h3 style="font-size: 14px; font-weight: 700; color: var(--text-ink); margin-bottom: 8px;">
                Digestive Movement Log (Bristol Stool Scale)
              </h3>
              ${bowelLogs.length === 0 ? '<p style="font-size: 12px; color: var(--text-muted);">No bowel logs recorded.</p>' : `
                <table style="width: 100%; border-collapse: collapse; font-size: 12px; text-align: left;">
                  <thead>
                    <tr style="border-bottom: 1px solid var(--border-dark); font-weight: 600;">
                      <th style="padding: 6px;">Date & Time</th>
                      <th style="padding: 6px;">Bristol Type</th>
                      <th style="padding: 6px;">Pain (0-10)</th>
                      <th style="padding: 6px;">Straining</th>
                      <th style="padding: 6px;">Blood Tag</th>
                      <th style="padding: 6px;">Clinical Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${bowelLogs.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 15).map(b => `
                      <tr style="border-bottom: 1px solid var(--border-subtle);">
                        <td style="padding: 6px;">${formatDisplayDate(b.timestamp)} ${formatDisplayTime(b.timestamp)}</td>
                        <td style="padding: 6px; font-weight: 600;">Type ${b.bristolType}</td>
                        <td style="padding: 6px;">${b.painScore > 0 ? b.painScore + '/10' : '0'}</td>
                        <td style="padding: 6px;">${b.straining ? 'Yes' : 'No'}</td>
                        <td style="padding: 6px; font-weight: 600;">${b.blood ? 'FLAGGED' : 'None'}</td>
                        <td style="padding: 6px; color: var(--text-muted);">${b.notes || '-'}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              `}
            </div>

            <!-- Current Active Prescriptions -->
            <div>
              <h3 style="font-size: 14px; font-weight: 700; color: var(--text-ink); margin-bottom: 8px;">
                Current Active Medications & Supplements
              </h3>
              ${meds.length === 0 ? '<p style="font-size: 12px; color: var(--text-muted);">No active prescriptions recorded.</p>' : `
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${meds.map(m => `
                    <div style="padding: 6px 10px; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); font-size: 12px;">
                      <strong>${m.name}</strong> (${m.dosage}) — ${m.timing}
                    </div>
                  `).join('')}
                </div>
              `}
            </div>
          </div>

        </div>
      `;
    },

    // -----------------------------------------------------------------------
    // H. SETTINGS & DATA VAULT
    // -----------------------------------------------------------------------
    async renderSettings(container) {
      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          
          <div class="card-nl">
            <div class="card-header-nl">
              <div class="card-title-group">
                <div class="card-icon-badge">${Icons.settings}</div>
                <div>
                  <span class="card-tag">Preferences & Storage</span>
                  <span class="card-heading">Application Settings</span>
                </div>
              </div>
              <span class="pill-badge pill-badge--neutral">v1.2 Stable</span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 10px;">
              <!-- Data Backup & Restore -->
              <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 12px; border-bottom: 1px solid var(--border-subtle);">
                <div>
                  <h4 style="font-size: 13.5px; font-weight: 600; color: var(--text-ink);">Export Health Vault</h4>
                  <p style="font-size: 12px; color: var(--text-muted);">Download an encrypted or plaintext JSON backup of all your health records.</p>
                </div>
                <button class="btn btn--ink" onclick="Views.exportVaultData()">Download JSON</button>
              </div>

              <!-- Wipe Vault -->
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <h4 style="font-size: 13.5px; font-weight: 600; color: var(--text-ink);">Clear All Vault Data</h4>
                  <p style="font-size: 12px; color: var(--text-muted);">Erase all local health records from IndexedDB.</p>
                </div>
                <button class="btn btn--subtle" style="color: #ef4444; border-color: #fca5a5;" onclick="Views.confirmWipeData()">Wipe Data</button>
              </div>
            </div>
          </div>

        </div>
      `;
    },

    async exportVaultData() {
      const data = {
        exportedAt: new Date().toISOString(),
        waterLogs: await getAll('water_logs'),
        dietLogs: await getAll('diet_logs'),
        bowelLogs: await getAll('bowel_logs'),
        habits: await getAll('habits'),
        medications: await getAll('medications'),
        mealTemplates: await getAll('meal_templates')
      };

      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `northlife_backup_${App.todayDate}.json`;
      a.click();
      URL.revokeObjectURL(url);
      ToastManager.show('Health vault exported successfully');
    },

    confirmWipeData() {
      Modal.open(`
        <div class="modal-header-nl">
          <span class="modal-title-nl" style="color: #ef4444;">Wipe All Data</span>
          <button class="btn btn--subtle btn--sm" onclick="Modal.close()">Cancel</button>
        </div>
        <p style="font-size: 13px; color: var(--text-muted); line-height: 1.4; margin: 10px 0;">
          Are you sure you want to delete all logs, habits, and medications? This action cannot be undone.
        </p>
        <div style="display: flex; gap: 8px; justify-content: flex-end;">
          <button class="btn btn--subtle" onclick="Modal.close()">Keep My Data</button>
          <button class="btn btn--ink" style="background-color: #ef4444; border-color: #ef4444;" onclick="Views.wipeData()">Yes, Delete Everything</button>
        </div>
      `);
    },

    async wipeData() {
      const stores = ['water_logs', 'diet_logs', 'bowel_logs', 'habits', 'medications', 'meal_templates'];
      for (const s of stores) {
        const items = await getAll(s);
        for (const item of items) {
          await deleteItem(s, item.id);
        }
      }
      Modal.close();
      ToastManager.show('All vault data cleared');
      App.handleRoute();
    }
  };

  window.Views = Views;

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
  } else {
    App.init();
  }
})();
