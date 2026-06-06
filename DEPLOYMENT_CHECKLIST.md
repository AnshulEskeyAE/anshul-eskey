# Vercel Production Deployment Checklist

Use this checklist before and after deploying your portfolio website to Vercel.

---

## Pre-Deployment (Local Verification)

### 1. Configuration Check
- [ ] `vite.config.js` uses `base: '/'` (root deployment).
- [ ] SEO URLs in `index.html` (canonical link, Open Graph metadata, Twitter cards) point to a placeholder `https://your-portfolio.vercel.app/` (to be updated post-deployment).
- [ ] No `localhost` or `127.0.0.1` absolute URLs exist in the source code.

### 2. Assets & Documents
- [ ] The actual resume PDF exists in `public/resume.pdf` (103 KB size).
- [ ] `src/pages/Resume.jsx` uses `/resume.pdf` for the download action.
- [ ] All project cover images (`.webp`) exist in `public/`.
- [ ] All original project deliverable PDFs exist in `public/projects/`.

### 3. Production Build
- [ ] `npm run build` completes successfully with zero compilation or lint errors.
- [ ] `dist/index.html` references assets with root-relative paths starting with `/assets/`.

### 4. Local Preview Verification
Run `npm run preview` to start a local server, and verify:
- [ ] The site loads correctly at the root path (e.g. `http://localhost:4173/`).
- [ ] All hash routes (`#/`, `#/resume`, `#/projects/...`) navigate smoothly.
- [ ] The profile picture on the home page loads.
- [ ] All project card WebP thumbnails render without distortion or layout shifts.
- [ ] Project detail pages render correctly under their specific slugs.
- [ ] Clicking "View Document" on project detail pages displays the inline PDF deck.
- [ ] Zoom, scroll, and page controls inside the PDF viewer function.
- [ ] Clicking "Download Document" downloads the actual PDF file from `public/projects/`.
- [ ] Switching to "ATS PDF Mode" on the Resume page and clicking "Download ATS Resume PDF" downloads the correct 103 KB PDF resume (`ANSHUL_ESKEY_RESUME.pdf`).

---

## Deployment Steps (Vercel)

- [ ] Initialize Git repository (if not already done).
- [ ] Create a new GitHub repository and push the local codebase.
- [ ] Import the project on [Vercel](https://vercel.com).
- [ ] Choose the repository and accept default build settings (Vite is auto-detected).
- [ ] Click **Deploy** and wait for completion.

---

## Post-Deployment (Live Site Verification)

Verify the following on the live `<your-project>.vercel.app` URL:
- [ ] All routes resolve correctly.
- [ ] SEO audit: Open Graph and Twitter cards load images and descriptions correctly.
- [ ] PDF document previews render smoothly.
- [ ] Direct downloads of deliverables and resume work.
