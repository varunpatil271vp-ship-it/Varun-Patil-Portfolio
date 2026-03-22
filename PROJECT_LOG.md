# Project log (context for handoff)

Use this file to stay aligned across chats and sessions. Append a new entry when behavior or content changes in a meaningful way.

---

## 2026-03-21

### Portfolio images (`PortfolioImage`)

- **Current behavior:** Click or keyboard (Enter/Space) opens a **full-screen lightbox in the same tab** (not a new browser tab). The image **animates** from slightly below with a spring scale (pops into the center). Dark blurred backdrop; click backdrop, **X** button, or **Escape** to close. Body scroll is locked while open.
- **Removed:** Opening the raw image URL in a new tab (that was reverted per product request).
- **Repo:** `.cursor/rules/git-workflow.mdc` instructs agents to commit/push and append this log after substantive changes. Added root `.eslintrc.json` (`next/core-web-vitals`) and `eslint.ignoreDuringBuilds: true` in `next.config.js` to reduce Vercel failures blocked by lint alone.

### Data / content

- **ML flow-boiling** project uses seven figures under `public/images/ml-flow-boiling-01.png` … `-07.png`; **hero/thumbnail** is `-07.png` (last figure in the user’s ordered set).
- **Polyurethane composites** uses `polyurethane-tensile-1.png` (title image) and `polyurethane-tensile-2.png`; both in the gallery.
- **Projects list order** in `src/data/projects.ts`: ongoing / newest first (EV BTMS, ML flow-boiling, scooter, pool boiling, polyurethane oldest last).
- **Copy:** Em/en dashes in site copy were normalized to commas, colons, or ASCII hyphens where appropriate.

### Infra / repo

- Remote: `Varun-Patil-Portfolio` on GitHub (`varunpatil271vp-ship-it`).
- `.gitignore` includes `terminals/` and `assets/`.
- **Vercel:** If a deployment fails, use the dashboard or `npx vercel inspect <deployment-id> --logs` for the exact error (build logs are not stored in this file).
- **`next.config.js`:** `eslint.ignoreDuringBuilds: true` was added so production builds are not blocked by ESLint alone (common on Vercel). Fix any `npm run lint` issues locally and consider removing this flag once clean.

### Cursor rules

- See `.cursor/rules/git-workflow.mdc` for git commit/push and log-update expectations.

### Home hero background (`HeroVisual`)

- The cyan-bordered rounded rectangle that overlapped the right-hand **Explore** links was a decorative “topology” `motion.div` (`right-[10%]`, `border-accent-cyan/20`). It was **removed** so Resume/Contact no longer sit on top of that box.

---

## Earlier (summary)

- Next.js 14 app: Projects, Research, Experience, About, Home, etc.
- Framer Motion page transitions; Tailwind styling.
- Project cards use gradient overlays with `pointer-events-none` so image interactions work.
