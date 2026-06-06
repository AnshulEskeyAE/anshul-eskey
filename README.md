# Anshul Eskey — Product Strategy & Systems Portfolio

A personal portfolio and case-study website built with **React 19 + Vite 8**, deployed via **Vercel**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 (no external router — custom hash navigation) |
| Build Tool | Vite 8 |
| Styling | Vanilla CSS (design tokens via CSS variables) |
| Animations | GSAP 3 |
| Icons | lucide-react |
| PDF Preview | PDF.js (loaded from CDN, rendered on Canvas) |
| Deployment | Vercel (Auto-detected Vite build) |

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (runs at http://localhost:5173)
npm run dev
```

All pages are hash-routed (e.g. `/#/projects/perplexity-gtm`), so no server-side routing configuration is required.

---

## Deployment — Vercel

Vercel provides a seamless, zero-config deployment architecture for modern Vite projects.

### Step 1: Push Code to GitHub

Initialize your repository and push to GitHub:

```bash
git init
git add .
git commit -m "Configure Vercel deployment"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Log in to [Vercel](https://vercel.com).
2. Click **Add New** → **Project**.
3. Import your GitHub repository.
4. Vercel automatically detects Vite and React. Keep the default settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

Vercel will build the project and assign a production URL (e.g., `https://your-portfolio.vercel.app`).

### Step 3: SEO Update (Post-Deployment)

Once Vercel generates your live URL:
1. Open `index.html`.
2. Replace all occurrences of `https://your-portfolio.vercel.app/` with your actual live Vercel domain or custom domain.
3. Commit and push the changes:
   ```bash
   git add index.html
   git commit -m "Update SEO metadata URLs"
   git push origin main
   ```
   Vercel will instantly trigger a production redeploy.

---

## Project Structure

```
Website final/
├── public/
│   ├── projects/               ← PDF deliverables (served statically)
│   │   ├── perplexity-india.pdf
│   │   ├── quick-commerce.pdf
│   │   ├── telemedicine.pdf
│   │   ├── zomato-cancellation.pdf
│   │   └── learning-execution-system.pdf
│   ├── resume.pdf              ← Downloadable formal resume
│   ├── *.webp                  ← Project cover images
│   └── profilepfp.jpg          ← Portrait photo
├── src/
│   ├── content/
│   │   ├── projects/           ← One .js file per project (metadata + content)
│   │   ├── essays/             ← One .js file per essay
│   │   └── journal/            ← One .js file per journal entry
│   ├── components/
│   │   ├── PdfViewer.jsx       ← Native PDF.js canvas-based viewer
│   │   └── ...
│   ├── context/
│   │   └── NavigationContext.jsx ← Custom hash-based router
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Resume.jsx          ← Resume page (triggers public/resume.pdf download)
│   │   └── ...
│   ├── contentRegistry.js      ← Central CMS registry
│   └── App.jsx                 ← Route renderer
├── index.html                  ← Entry point + SEO meta tags
├── vite.config.js              ← Build config (set to '/' base)
└── package.json
```

---

## Adding a New Project

1. Create `src/content/projects/<project-id>.js` with `frontmatter` and `content` exports.
2. Place the project cover image in `public/` as `<project-id>.webp`.
3. Place the project PDF in `public/projects/<project-id>.pdf`.
4. Import the new module in `src/contentRegistry.js` and add it to `rawProjects`.
5. Push to `main` — Vercel deploys changes automatically.
