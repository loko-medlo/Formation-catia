# ROBOTECH FSTT — Inscription promos 2026/2027

Page statique autonome (HTML/CSS/JS) pour l'inscription des membres du Club
Robotech. Les inscriptions sont envoyées vers Google Sheets via un Google Apps
Script Web App.

## Contenu

- `index.html` — la page (code complet inline : styles, formulaires, JS)
- `src/assets/` — logo + image d'arrière-plan du hero
- `robotech-2026-assets/` — photos de la galerie (WebP)
- `public/og-image.png` — vignette de partage réseaux
- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`

## Déploiement sur Vercel

### Option A — Dashboard (sans installer Vercel CLI)

1. Va sur https://vercel.com → **Add New → Project**.
2. Choisis le dépôt Git qui contient ce dossier, **ou** importe le dossier
   avec `npx vercel` (voir Option B).
3. Vercel détecte un site statique : **Framework Preset = Other / Vite**,
   Build Command vide, Output Directory = racine du dossier.
4. Déploie.

### Option B — CLI

```sh
npm i -g vercel
cd inscription-robotech-2026-2027-deploy
vercel --prod
```

## Google Sheets (déjà configuré)

La page envoie à l'adresse dans `GOOGLE_SCRIPT_URL` (dans `index.html`) :

```
https://script.google.com/macros/s/AKfycbxGQLp7_uS3nYTB0ZvEqQvpklyUhzmePbkbQJxFRpFXq2wFV5ztRbq4tPWo5XhPhCPp/exec
```

Payload (format identique au projet CATIA) :
`lastName | firstName | email | phone ('+numéro) | studyLevel | studyField | status`

La spreadsheet cible : `1kHlqMEMWHOo3TFeAv_nfLrEYrwLe_S6qHIAhiCU17XU` (onglet `Inscriptions`).

> ⚠️ Si tu modifies le Google Apps Script, redéploie-le (Déployer > Gérer les
> déploiements > Nouvelle version) et, si l'URL `/exec` change, mets à jour
> `GOOGLE_SCRIPT_URL` dans `index.html` puis redéploie sur Vercel.