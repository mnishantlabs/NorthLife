# NorthLife — State Management Specification

> **Architecture:** Native Vanilla JS EventTarget Pub/Sub & Reactive Store Pattern  
> **Rule:** No external state management libraries (Redux, Zustand, Pinia). Pure standard web APIs.

---

## 1. Central State Architecture (`assets/js/core/state.js`)

The app uses an `EventTarget`-based reactive store. Components and modules subscribe to specific slice events or state changes.

```javascript
class StateManager extends EventTarget {
  constructor() {
    super();
    this.state = {
      user: null,             // Current authenticated Supabase user profile
      isOnline: navigator.onLine,
      syncStatus: 'synced',   // 'synced' | 'syncing' | 'offline' | 'error'
      theme: 'dark',          // 'dark' | 'light'
      today: {
        waterMl: 0,
        calories: 0,
        fiberG: 0,
        medsTaken: 0,
        medsTotal: 0,
        lastBowelLog: null
      },
      activeModule: 'dashboard'
    };
  }

  // Get immutable snapshot of current state
  getState() {
    return Object.freeze({ ...this.state });
  }

  // Atomic state updater
  setState(partialState, eventName = 'state:changed') {
    this.state = { ...this.state, ...partialState };
    this.dispatchEvent(new CustomEvent(eventName, { detail: this.state }));
    this.dispatchEvent(new CustomEvent('state:changed', { detail: this.state }));
  }

  // Subscribe to changes
  subscribe(eventName, callback) {
    this.addEventListener(eventName, (e) => callback(e.detail));
  }
}

export const AppState = new StateManager();
```

---

## 2. Standard State Event Names

| Event Name | Dispatched When | Listeners |
| :--- | :--- | :--- |
| `auth:changed` | User logs in, logs out, or token refreshed | Header, Router, Sync Engine |
| `network:changed` | Online/Offline connectivity changes | Header Sync Badge, Sync Manager |
| `sync:status` | Sync queue starts, completes, or errors | Sync Badge UI |
| `water:updated` | Water log added/deleted | Dashboard Hydration Ring, Water Module |
| `bowel:updated` | Washroom/Bowel log added | Dashboard Digest Widget, Doctor Mode |
| `meds:updated` | Medication checklist toggled | Medication widget, Dashboard |
| `theme:changed` | Theme switched (Dark/Light) | DOM `<html>` root attribute |
