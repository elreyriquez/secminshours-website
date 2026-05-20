# Deploy SECMINSHOURS to GitHub Pages

## 1. Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `secminshours-website` (or your preferred name)
3. Set to **Public**
4. Create the repository

## 2. Push your code

```bash
cd /Users/shaq/Documents/Projects/secminshours-website
git init
git add .
git commit -m "Add SECMINSHOURS showcase site"
git remote add origin https://github.com/elreyriquez/secminshours-website.git
git branch -M main
git push -u origin main
```

Replace `elreyriquez` with your GitHub username if different.

## 3. Enable GitHub Pages

1. Repo **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. Branch: `main` | Folder: `/ (root)`
4. Save

Temporary URL: `https://elreyriquez.github.io/secminshours-website/`

## 4. Custom subdomain (`secminshours.secfreelance.com`)

This repo includes a **`CNAME`** file with `secminshours.secfreelance.com`.

1. **DNS** (at your `secfreelance.com` registrar):
   - Type: `CNAME`
   - Name / host: `secminshours`
   - Target / value: `elreyriquez.github.io` (use the exact host GitHub shows under Pages → Custom domain)
2. GitHub **Settings** → **Pages** → **Custom domain:** `secminshours.secfreelance.com`
3. Wait for DNS check, then enable **Enforce HTTPS**

## 5. Verify

- `https://secminshours.secfreelance.com/` loads the showcase
- Theme toggle persists (`secminshours-theme` in localStorage)
- External links: Billing product, Billing app, Krowned Hands live site
