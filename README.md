# Varun Narendra Patil — Mechanical Engineering Portfolio

A multi-page, premium portfolio site for an M.S. Mechanical Engineering (Design & Manufacturing) student. Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Run locally

1. **Install dependencies** (requires Node.js and npm):
   ```bash
   npm install
   ```

2. **Start the dev server**:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## File structure

```
├── public/
│   ├── images/          # Hero and project images (hero.jpg, scooter-1–4.png)
│   └── resume/          # Place resume PDF here (VarunNarendraPatil_Resume.pdf)
├── src/
│   ├── app/
│   │   ├── about/       # About page
│   │   ├── contact/     # Contact page
│   │   ├── experience/  # Experience page
│   │   ├── projects/    # Projects index + [id] detail pages
│   │   ├── research/    # Research & thesis
│   │   ├── resume/      # Resume page
│   │   ├── skills/      # Skills & tools
│   │   ├── layout.tsx   # Root layout (nav + footer)
│   │   ├── page.tsx     # Home page
│   │   └── globals.css
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   ├── PageTransition.tsx
│   │   └── HeroVisual.tsx
│   └── data/
│       ├── projects.ts      # Project list and metadata
│       └── projectDetails.ts # Extended copy for each project
├── package.json
├── tailwind.config.ts
└── next.config.js
```

## Where to edit content

| Content | File(s) |
|--------|--------|
| **Projects list** (titles, summaries, tools, outcome, images) | `src/data/projects.ts` |
| **Project detail copy** (problem, objective, role, process, learnings) | `src/data/projectDetails.ts` |
| **Experience** | `src/app/experience/page.tsx` |
| **Skills** | `src/app/skills/page.tsx` |
| **About** | `src/app/about/page.tsx` |
| **Research / thesis** | `src/app/research/page.tsx` |
| **Resume highlights** | `src/app/resume/page.tsx` |
| **Contact** | `src/app/contact/page.tsx` |
| **Nav links** | `src/components/Nav.tsx` |
| **Footer** | `src/components/Footer.tsx` |

## Replacing images and resume

- **Hero image:** Replace `public/images/hero.jpg` with your portrait or keep the current engineering visual.
- **Project images:** Replace or add files in `public/images/` and update the `image` field in `src/data/projects.ts` (e.g. `/images/your-photo.png`).
- **Resume PDF:** Place your resume at `public/resume/VarunNarendraPatil_Resume.pdf`. The Resume page download button points to this path.

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
