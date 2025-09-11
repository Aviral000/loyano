# Wearables Frontend (MFE-based) - LOYANO

This repository contains the **frontend application** for the Wearables project, built with **Next.js + React** and structured with future **Micro Frontends (MFE)** in mind.  

## 🚀 Tech Stack
- [Next.js](https://nextjs.org/) – React framework for SSR and SSG
- [React](https://react.dev/) – Component-based UI
- [TS] - Typescript
- [Module Federation](https://webpack.js.org/concepts/module-federation/) – For Micro Frontends (to be added later)
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling

---

## 📦 Prerequisites
Make sure you have installed:
- **Node.js** (>= 18.x recommended)  
- **npm** or **yarn** package manager  
- Git  

---

## Getting Started

This repo currently contains a single Next.js app under `apps/home`.

### 1) Install dependencies
```bash
npm install
```

### 2) Run the app in development (port 3000)
```bash
npm run dev:home
```

### 3) Build and start
- Build:
```bash
npm run build:home
```
- Start:
```bash
npm run start:home
```

### Tailwind CSS
Tailwind v4 is configured via PostCSS.
- Config: `apps/home/postcss.config.mjs`
- Global styles: `apps/home/src/app/globals.css` (imports Tailwind)

---

### Future: MFE and local host sharing
- Additional MFEs will live in separate repositories.
- Use `.env.local` to provide local host URLs for remote MFE integration when wiring Module Federation.

---

Important point to notice:

1. This is going to be the homepage (Main repo for all the MFE)
2. This is the main repo (folder) which will help me deploy everything for the website. (everything in a single place to manage all the MFE's here)