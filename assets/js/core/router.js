/* =========================================================================
   NorthLife — SPA Hash Router
   ========================================================================= */

import { AppState } from './state.js';

class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
  }

  register(routeId, handler) {
    this.routes[routeId] = handler;
  }

  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    this.handleRoute();
  }

  handleRoute() {
    const hash = window.location.hash.replace('#', '') || 'dashboard';
    const handler = this.routes[hash] || this.routes['dashboard'];
    this.currentRoute = hash;

    // Update active nav links
    document.querySelectorAll('.nav-link').forEach((link) => {
      const linkRoute = link.getAttribute('data-route') || link.getAttribute('href')?.replace('#', '');
      if (linkRoute === hash) {
        link.classList.add('nav-link--active');
      } else {
        link.classList.remove('nav-link--active');
      }
    });

    // Update Breadcrumb Title
    const breadcrumbEl = document.getElementById('breadcrumb-title');
    if (breadcrumbEl) {
      const routeTitles = {
        'dashboard': 'Overview',
        'water': 'Hydration',
        'diet': 'Nutrition & Fiber',
        'bowel': 'Digestive Health',
        'habits': 'Habit Routine',
        'meds': 'Medications',
        'doctor-mode': 'Doctor Mode',
        'settings': 'Settings'
      };
      breadcrumbEl.textContent = routeTitles[hash] || 'Overview';
    }

    const container = document.getElementById('app-view');
    if (container && handler) {
      handler(container);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    AppState.setState({ activeRoute: hash }, 'route:changed');
  }

  navigate(routeId) {
    window.location.hash = `#${routeId}`;
  }
}

export const AppRouter = new Router();
