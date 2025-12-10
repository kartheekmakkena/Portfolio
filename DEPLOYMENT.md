# GitHub Pages Deployment

This repository contains both:
1. **Astro Portfolio** (npm/mjs version) - Modern portfolio built with Astro + Tailwind CSS
2. **HTML/CSS Portfolio** (legacy) - Original HTML/CSS version

## Current Deployment

GitHub Pages is configured to deploy the **Astro version** via GitHub Actions.

### How it works:
1. GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds the Astro site
2. Builds from `src/` directory using `npm run build`
3. Deploys the `dist/` folder to GitHub Pages
4. Site is available at: https://kartheekmakkena.github.io/Portfolio/

### To ensure Astro version is deployed:

1. Go to GitHub repository Settings → Pages
2. Under "Source", select **"GitHub Actions"** (not "Deploy from a branch")
3. The workflow will automatically run on every push to `main`

### If you see the old HTML version:

- Make sure GitHub Pages is set to use **GitHub Actions** as the source
- Check the Actions tab to see if the workflow completed successfully
- The Astro build should be in the `dist/` folder

### Local Development:

```bash
npm run dev    # Start dev server
npm run build  # Build for production
npm run preview # Preview production build
```

