# NorthLife — Error Handling & Logging Specification

> **Rule:** Never let the app crash or freeze silently. Every error must be caught, logged to local IndexedDB diagnostics, and shown to the user via accessible toast notifications.

---

## 1. Global Error Boundaries

In `assets/js/app.js`:

```javascript
// 1. Unhandled JavaScript Exceptions
window.addEventListener('error', (event) => {
  console.error('[NorthLife Crash Guard]', event.error);
  Toast.show({
    title: 'Unexpected Error',
    message: 'An issue occurred. Your data is safely stored locally.',
    type: 'error'
  });
});

// 2. Unhandled Promise Rejections (e.g., failed IndexedDB / Network async calls)
window.addEventListener('unhandledrejection', (event) => {
  console.error('[NorthLife Promise Rejection]', event.reason);
  Toast.show({
    title: 'Operation Failed',
    message: event.reason?.message || 'Action could not be completed.',
    type: 'warning'
  });
});
```

---

## 2. Toast Notification Taxonomy

| Type | Icon / Color | Default Duration | Use Case |
| :--- | :--- | :--- | :--- |
| `success` | `✓` Green (`--color-success`) | `3000ms` | Data saved, med marked, sync completed |
| `info` | `ℹ` Blue (`--color-primary`) | `3500ms` | Reminder fired, theme switched |
| `warning` | `⚠` Amber (`--color-warning`) | `5000ms` | Offline mode active, low medicine stock |
| `error` | `✕` Red (`--color-danger`) | `7000ms` (Dismissable) | Auth failure, DB write error |

---

## 3. Graceful Offline Degradation Strategy

* **Network Request Failures:** When Supabase API calls fail due to network disconnection or timeout, the action is automatically diverted to IndexedDB and queued in `sync_queue`.
* **Zero UI Blocking:** The UI immediately updates with optimistic local data so the user never encounters a frozen loading spinner.
