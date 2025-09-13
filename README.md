# do-habit-ts

A habit tracker project built with React + TypeScript, with the purpose of practicing **software
engineering good practices** while building something useful for real life.

## 🎯 Goals

- Apply disciplined software development practices (clean repo, CI, testing, docs).
- Learn full-stack skills by progressing through structured phases.
- Build a working **habit tracker app** that can evolve into a portfolio project.

## 🗂 Project Phases

This project is built in **progressive phases**, each adding complexity and new tools.

- **Phase 0 — Baseline & Hygiene**
  - Init Vite + React + TypeScript.
  - Add ESLint + Prettier.
  - Setup Vitest + React Testing Library.

- **Phase 1 — Core Habits (Local State + Routing)**
  - CRUD habits (add, list, delete).
  - View habit detail page `/habit/:id`.
  - State: `useReducer` + `localStorage`.
  - Routing: React Router.

- **Phase 2 — Habit Tracking (Daily Completions)** (⌛ - current phase)
  - Track daily completions + streaks.
  - Completion history view.
  - Migrate to Redux Toolkit for state.

- **Phase 3 — Forms & Validation**
  - Use React Hook Form + Zod.
  - Validation rules (required name, max 50 chars).
  - Accessibility with labels + aria attributes.

- **Phase 4 — Mocked API Layer**
  - Define REST API contract.
  - Mock with MSW.
  - Replace Redux reducers with RTK Query.

- **Phase 5 — Backend Implementation**
  - Build backend with Express + TS + MongoDB.
  - Add JWT auth, helmet, CORS, rate limiting.

- **Phase 6 — Full-Stack Integration**
  - Connect frontend to backend.
  - User-specific habits & completions.

- **Phase 7 — Production Readiness**
  - Optimize queries & frontend performance.
  - CI/CD with Docker + GitHub Actions.
  - Deploy frontend (Vercel) + backend (Railway/Render).

- **Phase 8 — PWA & Notifications**
  - Offline support.
  - Push reminders.

- **Phase 9 — Next.js Migration**
  - Move to Next.js App Router.
  - Compare SSR/ISR trade-offs in docs.

---

## 🛠 Tech Stack

- **Frontend:** React, TypeScript, Vite
- **State Management:** useReducer → Redux Toolkit → RTK Query
- **Testing:** Vitest, React Testing Library, MSW
- **Backend (later phases):** Express, TypeScript, MongoDB
- **Auth & Security:** JWT, Helmet, CORS, rate limiting
- **Deployment:** Vercel (frontend), Railway/Render (backend)

---

## 📚 Documentation

- [DECISIONS.md](./DECISIONS.md) — records key project choices and trade-offs.
