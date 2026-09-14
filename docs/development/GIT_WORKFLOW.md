# NorthLife — Git Workflow & GitHub Pages Deployment Guide

> **Repository Structure:** Single Trunk / Feature-Branch Flow for GitHub Pages

---

## 1. Branching Strategy

* `main`: Production-ready branch. Automatically deployed to GitHub Pages.
* `feature/<task-name>`: Small, isolated task branches (e.g., `feature/pwa-shell`, `feature/bowel-tracker`, `feature/doctor-mode`).

---

## 2. Commit Message Standards (Conventional Commits)

Format: `<type>(<scope>): <subject>`

* `feat(bowel)`: Add Bristol Stool Chart visual selector component
* `feat(doctor-mode)`: Implement 30/60/90-day PDF report compiler
* `fix(sync)`: Fix queue replay on network reconnect event
* `style(theme)`: Add CSS custom properties for dark mode surface elevation
* `docs(readme)`: Update offline PWA installation instructions

---

## 3. GitHub Pages Deployment Configuration

* **Source:** Deploy directly from the root of `main` branch (`/`).
* **Custom 404 Handling:** Since NorthLife is a hash-based SPA (`#dashboard`, `#bowel`, `#doctor-mode`), all routing is handled entirely client-side without requiring server redirects.
* **HTTPS & PWA:** GitHub Pages provides native HTTPS with custom domains, enabling full Service Worker registration and PWA installation.
