# DECISIONS.md

This document records important engineering decisions for **do-habit-ts**.

---

## Phase 0 — Baseline & Hygiene
- **Decision:** Skip Husky + lint-staged for now.  
  - **Why:** This is a solo side project. GitHub Actions already enforces lint/tests, so local Git hooks are not critical early on.  
  - **Future Plan:** Add Husky in **Phase 7 (Production Readiness)** to align with team-level practices.

- **Decision:** Use GitHub Actions for CI.  
  - **Why:** Ensures linting + testing runs on every push/PR.  
  - **Trade-off:** No local enforcement, but CI guarantees repo hygiene.

- **Decision:** Skip React Testing Library + vitest.
  - **Why:** This is a solo side project. as a project inteded for learning, at first this testing libraries will slowdown the development and stiffen the learning curve.
  - **Future Plan:** Implement this testing libraries on the later phase/stages of the development.

---

## State Management
- Start with `useReducer` + `localStorage` (simple, no external deps).
- Migrate to **Redux Toolkit** in Phase 2 (when state grows).
- Switch to **RTK Query** in Phase 4 (API-driven state).

---

## Form Handling
- Use **React Hook Form** + **Zod** in Phase 3.
- Ensures type-safe validation, accessibility, and better DX.

---

## API Design
- REST contract defined in Phase 4.
- Mocked with **MSW** before real backend.
- Backend: Express + TypeScript + MongoDB.
- Auth with JWT + secure cookies.

---

## Migration Plan
- Start in React + Vite for simplicity.
- Eventually migrate to **Next.js App Router** (Phase 9).
- Compare trade-offs (SSR/ISR vs CSR) in this file.

---

## Testing Philosophy
- Unit + integration tests from start.
- Coverage for reducers, form validation, and API calls.
- Backend tested with Jest + Supertest.
- Mocking with MSW to ensure frontend is independent of backend.

---

## Deployment Choices
- Frontend → Vercel (fast, optimized for React/Next.js).
- Backend → Railway/Render (simple managed hosting for Node + DB).
- Consider Docker for CI/CD in later phase.

---

## Security Practices
- Use **Helmet, CORS, rate limiting** on backend.
- Store JWT in HTTP-only cookies.
- Sanitize inputs (Zod + DB level).

---

