# Rathana — Backend Developer Portfolio

A responsive dark portfolio starter built with React, TypeScript, Vite, Framer Motion, and Lucide icons.

## 1. Requirements
- Node.js 20.19+ or 22.12+
- npm

Check your installation:
```bash
node -v
npm -v
```

## 2. Run locally
Open this project folder in VS Code, then run:
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## 3. Build for production
```bash
npm run build
npm run preview
```
The production website is generated in `dist/`.

## 4. Personalize your portfolio
Start with `src/data.ts`. Update:
- Email, GitHub, LinkedIn, location, and resume URL.
- About paragraph.
- Skills: remove tools you have not used yet.
- Project descriptions, status, stack, and repository URLs.
- Journey / education details.

Also search `src/App.tsx` for `Rathana` if you want to change the hero name.

## 5. Important honesty check
This starter includes editable sample project descriptions. Before publishing, replace them with accurate information about what you actually built. Remove any technology, feature, or status that does not reflect your real experience.

## 6. Deploy
You can deploy the project to Vercel:
1. Push the project to your GitHub repository.
2. Import that repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

## Project structure
```text
rathana-backend-portfolio/
├── index.html
├── package.json
├── README.md
├── vite.config.ts
└── src/
    ├── App.tsx
    ├── data.ts
    ├── main.tsx
    └── styles.css
```
