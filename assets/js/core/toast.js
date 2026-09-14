/* =========================================================================
   NorthLife — Accessible Toast Notification Broker
   ========================================================================= */

export const Toast = {
  show({ title, message, type = 'success', duration = 3200 }) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.setAttribute('role', 'alert');

    const iconMap = {
      success: '✓',
      info: 'ℹ',
      warning: '⚠',
      error: '✕'
    };

    const colorMap = {
      success: 'var(--pastel-mint-accent)',
      info: 'var(--pastel-blue-accent)',
      warning: 'var(--pastel-butter-accent)',
      error: 'var(--pastel-coral-accent)'
    };

    toast.innerHTML = `
      <div style="width: 24px; height: 24px; border-radius: 50%; background-color: var(--bg-surface-subtle); color: ${colorMap[type] || colorMap.success}; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 12px; flex-shrink: 0;">
        ${iconMap[type] || '✓'}
      </div>
      <div style="display: flex; flex-direction: column; min-width: 0;">
        <span style="font-size: 12px; font-weight: 700; color: var(--text-ink);">${title}</span>
        ${message ? `<span style="font-size: 11px; font-weight: 400; color: var(--text-muted);">${message}</span>` : ''}
      </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px) scale(0.95)';
      toast.style.transition = 'all 200ms var(--ease-smooth)';
      setTimeout(() => toast.remove(), 200);
    }, duration);
  }
};
