# ⚡ ElectroHub — React E-Commerce App

A modern, fully responsive e-commerce frontend for Arduino kits and electronic components. Built with ReactJS and Vite as Phase 2 of the ElectroHub project.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.1.4-646CFF?style=flat&logo=vite)
![React Router](https://img.shields.io/badge/React_Router-6.22.0-CA4245?style=flat&logo=react-router)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-222222?style=flat&logo=github)

---

## 🌐 Live Demo

**[https://mhmadkojok.github.io/electrohub/](https://mhmadkojok.github.io/electrohub/)**

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/#/` | Hero section, stats, features grid, CTA |
| Products | `/#/products` | 12 products, category filter, add to cart |
| About | `/#/about` | Story, mission, timeline, team |
| Contact | `/#/contact` | Validated contact form |

---

## ✨ Features

- ⚡ Animated hero with rotating circuit rings
- 🛒 Add to cart with live badge counter
- 🔍 Product category filter (instant re-render)
- ✅ Full contact form validation
- 📱 Fully responsive — mobile, tablet, desktop
- 🍔 Hamburger mobile menu
- 🎨 Custom dark design system with CSS variables
- 🔤 Google Fonts — Rajdhani + Barlow

---

## 🚀 Tech Stack

- **ReactJS 18** — UI library, functional components only
- **Vite 5** — Build tool and dev server
- **React Router DOM v6** — Client-side routing (HashRouter)
- **CSS Variables** — Custom design system
- **gh-pages** — GitHub Pages deployment

---

## 🪝 State Management

All state managed with React `useState` — no Redux or external libraries.

| Component | State | Purpose |
|-----------|-------|---------|
| `App.jsx` | `cartCount` | Global cart item count |
| `Navbar.jsx` | `scrolled` | Glassmorphism on scroll |
| `Navbar.jsx` | `menuOpen` | Mobile menu toggle |
| `Products.jsx` | `activeCategory` | Active category filter |
| `Products.jsx` | `addedIds` | "✓ Added" button feedback |
| `Contact.jsx` | `form` | Controlled form fields |
| `Contact.jsx` | `errors` | Per-field error messages |
| `Contact.jsx` | `submitted` | Success state after submit |

---

## 📁 Folder Structure

```
electrohub/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
│   └── vite.svg
├── index.html
├── vite.config.js
└── package.json
```

---

## 🛠️ Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/mhmadkojok/electrohub.git

# 2. Go into the folder
cd electrohub

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `/dist` folder.

---

## 🚀 Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the app and publishes it to the `gh-pages` branch automatically.

---

## 👤 Author

**Mohammad Kojok**
- GitHub: [@mhmadkojok](https://github.com/mhmadkojok)

---

*Built with ⚡ for makers everywhere — ElectroHub Phase 2*
