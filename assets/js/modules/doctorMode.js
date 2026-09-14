/* =========================================================================
   NorthLife — Doctor Mode & Clinical PDF Module
   ========================================================================= */

import { AppState } from '../core/state.js';
import { Toast } from '../core/toast.js';

export const DoctorModeModule = {
  render(container) {
    container.innerHTML = `
      <section style="display: flex; flex-direction: column; gap: var(--space-6);">
        <!-- Module Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: var(--space-3);">
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="pill-badge pill-badge--lavender">Clinical Mode</span>
              <span class="pill-badge pill-badge--mint">Physician Consultation Ready</span>
            </div>
            <h1 style="font-size: 26px; font-weight: 800; letter-spacing: -0.03em; color: var(--text-ink); margin-top: 4px;">Doctor Mode — Clinical Summary Exporter</h1>
            <p style="font-size: 13.5px; color: var(--text-muted);">Generates structured 30, 60, or 90-day clinical telemetry dossiers formatted specifically for healthcare consultations.</p>
          </div>
          <div style="display: flex; gap: 10px;">
            <button class="btn btn--ink" id="btn-print-dossier">
              📄 Print / Download PDF Dossier
            </button>
          </div>
        </div>

        <!-- Filter Period Bar -->
        <div class="card-nl" style="padding: 12px 16px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
            <span class="card-tag">Report Date Range</span>
            <div style="display: flex; gap: 8px;">
              <button class="btn btn--subtle btn-doc-period btn-doc-period--active" data-days="30" style="background-color: var(--text-ink); color: #FFF;">Last 30 Days</button>
              <button class="btn btn--subtle btn-doc-period" data-days="60">Last 60 Days</button>
              <button class="btn btn--subtle btn-doc-period" data-days="90">Last 90 Days</button>
            </div>
          </div>
        </div>

        <!-- Printable Clinical Dossier Preview -->
        <div class="card-nl" id="clinical-dossier-card" style="padding: var(--space-8); border: 2px solid var(--border-subtle); background-color: var(--bg-surface);">
          
          <!-- Report Header -->
          <div style="display: flex; justify-content: space-between; border-bottom: 2px solid var(--text-ink); padding-bottom: 16px; margin-bottom: 20px;">
            <div>
              <h2 style="font-size: 20px; font-weight: 800; color: var(--text-ink); letter-spacing: -0.02em;">NorthLife Clinical Telemetry Dossier</h2>
              <p style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">Patient: <strong>Dr. Alex Mercer (#4829)</strong> | Reporting Period: <strong id="doc-period-text">Last 30 Days (15 Aug 2026 - 14 Sep 2026)</strong></p>
            </div>
            <div style="text-align: right;">
              <span class="pill-badge pill-badge--mint" style="font-size: 11px;">Validated Telemetry</span>
              <p style="font-size: 10px; color: var(--text-muted); margin-top: 4px;">Audit Hash: #8F20-NL492</p>
            </div>
          </div>

          <!-- Section 1: Executive Biometric Averages -->
          <div style="margin-bottom: 24px;">
            <span class="card-tag" style="margin-bottom: 8px;">1. Key Biometric & Intake Averages</span>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;">
              <div class="med-item" style="background-color: var(--bg-surface-subtle); flex-direction: column; align-items: flex-start;">
                <span style="font-size: 11px; color: var(--text-muted);">Average Daily Water</span>
                <span style="font-size: 16px; font-weight: 800; color: var(--text-ink); margin-top: 4px;">2,850 ml / day</span>
              </div>
              <div class="med-item" style="background-color: var(--bg-surface-subtle); flex-direction: column; align-items: flex-start;">
                <span style="font-size: 11px; color: var(--text-muted);">Average Daily Fiber</span>
                <span style="font-size: 16px; font-weight: 800; color: var(--pastel-mint-accent); margin-top: 4px;">32.4 g / day</span>
              </div>
              <div class="med-item" style="background-color: var(--bg-surface-subtle); flex-direction: column; align-items: flex-start;">
                <span style="font-size: 11px; color: var(--text-muted);">Average Bowel Motility</span>
                <span style="font-size: 16px; font-weight: 800; color: var(--text-ink); margin-top: 4px;">1.1 visits / day</span>
              </div>
              <div class="med-item" style="background-color: var(--bg-surface-subtle); flex-direction: column; align-items: flex-start;">
                <span style="font-size: 11px; color: var(--text-muted);">Rx Adherence Rate</span>
                <span style="font-size: 16px; font-weight: 800; color: var(--pastel-mint-accent); margin-top: 4px;">98.2% on time</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Bristol Stool Distribution & Symptom Log -->
          <div style="margin-bottom: 24px;">
            <span class="card-tag" style="margin-bottom: 8px;">2. Bristol Stool Form Distribution & Discomfort Analysis</span>
            <div style="padding: 14px; border-radius: var(--radius-md); background-color: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; justify-content: space-between; font-size: 13px;">
                <span>Optimal Motility (Types 3 & 4):</span>
                <strong style="color: var(--pastel-mint-accent);">92.4% (28 of 30 days)</strong>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 13px;">
                <span>Mild Constipation (Types 1 & 2):</span>
                <strong style="color: var(--pastel-butter-accent);">7.6% (2 episodes)</strong>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 13px;">
                <span>Bleeding Episodes Logged:</span>
                <strong style="color: var(--pastel-mint-accent);">0 Incidents (Complete Remission)</strong>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 13px;">
                <span>Average Pain / Discomfort Index:</span>
                <strong style="color: var(--text-ink);">0.2 / 10 (Minimal)</strong>
              </div>
            </div>
          </div>

          <!-- Section 3: Trigger Correlation Findings -->
          <div style="margin-bottom: 24px;">
            <span class="card-tag" style="margin-bottom: 8px;">3. Lifestyle Trigger & Symptom Correlation Insights</span>
            <div style="display: flex; flex-direction: column; gap: 6px; font-size: 12.5px; color: var(--text-ink);">
              <p>• <strong>Hydration Correlation:</strong> Stool consistency shifted toward Type 2 strictly on 2 days where water intake dropped below 1,800ml.</p>
              <p>• <strong>Sedentary Trigger:</strong> No perineal pressure reported after enforcing the 3-hour standing desk routine.</p>
              <p>• <strong>Dietary Correlation:</strong> Daily intake of >30g fiber with soluble psyllium husk maintained consistent Type 4 soft snake form.</p>
            </div>
          </div>

          <!-- Section 4: Mandatory Medical Disclaimer -->
          <div style="padding: 14px; border-radius: var(--radius-md); background-color: rgba(255, 236, 229, 0.45); border: 1px solid rgba(192, 70, 36, 0.25); font-size: 11px; line-height: 1.5; color: var(--text-muted);">
            <strong style="color: var(--pastel-coral-accent);">LEGAL & CLINICAL DISCLAIMER:</strong>
            This dossier is a patient self-reported behavioral and symptom log compiled exclusively for clinical discussion with a licensed healthcare physician. It does not provide medical diagnosis, algorithmic clinical decisions, or therapeutic claims.
          </div>
        </div>
      </section>
    `;

    this.bindEvents(container);
  },

  bindEvents(container) {
    const printBtn = container.querySelector('#btn-print-dossier');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        Toast.show({
          title: 'Generating PDF',
          message: 'Opening print dialog for high-resolution clinical dossier...',
          type: 'success'
        });
        setTimeout(() => window.print(), 300);
      });
    }

    container.querySelectorAll('.btn-doc-period').forEach((btn) => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.btn-doc-period').forEach((b) => {
          b.style.backgroundColor = 'var(--bg-surface-subtle)';
          b.style.color = 'var(--text-ink)';
        });
        btn.style.backgroundColor = 'var(--text-ink)';
        btn.style.color = '#FFFFFF';
        const days = btn.getAttribute('data-days');
        const textEl = container.querySelector('#doc-period-text');
        if (textEl) {
          textEl.textContent = `Last ${days} Days Telemetry`;
        }
        Toast.show({ title: 'Period Updated', message: `Compiled dossier for last ${days} days.`, type: 'info' });
      });
    });
  }
};
