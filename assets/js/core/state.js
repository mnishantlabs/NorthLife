/* =========================================================================
   NorthLife — Core State Manager (Reactive EventTarget Pub/Sub)
   ========================================================================= */

class StateManager extends EventTarget {
  constructor() {
    super();
    this.state = {
      user: {
        id: 'patient-4829',
        fullName: 'Dr. Alex Mercer',
        email: 'alex.mercer@northlife.internal'
      },
      theme: localStorage.getItem('nl_theme') || 'light',
      isOnline: navigator.onLine,
      syncStatus: 'synced', // 'synced' | 'syncing' | 'offline' | 'error'
      today: {
        waterMl: 2350,
        waterTargetMl: 3200,
        calories: 1780,
        calorieTarget: 2250,
        fiberG: 29,
        fiberTargetG: 35,
        carbsG: 185,
        proteinG: 112,
        fatsG: 54,
        lastBowelLog: {
          time: '09:40 AM',
          bristolType: 4,
          painLevel: 0,
          bleedingObserved: false
        },
        medsTaken: 1,
        medsTotal: 3,
        habitsDone: 4,
        habitsTotal: 6
      },
      activeRoute: 'dashboard'
    };
  }

  getState() {
    return Object.freeze({ ...this.state });
  }

  setState(partialState, eventName = 'state:changed') {
    this.state = { ...this.state, ...partialState };
    this.dispatchEvent(new CustomEvent(eventName, { detail: this.state }));
    this.dispatchEvent(new CustomEvent('state:changed', { detail: this.state }));
  }

  subscribe(eventName, callback) {
    this.addEventListener(eventName, (e) => callback(e.detail));
  }
}

export const AppState = new StateManager();
