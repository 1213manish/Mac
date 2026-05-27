<div align="center">
  <h1>💻 MacBook Pro — 3D Landing Page</h1>

  <p>
    A premium Apple-inspired landing page featuring interactive 3D models, scroll-driven animations, and immersive visual storytelling — built from scratch with modern web technologies.
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19-58C4DC?style=flat-square&logo=react&logoColor=white" />
    <img src="https://img.shields.io/badge/Three.js-r180-000000?style=flat-square&logo=three.js&logoColor=white" />
    <img src="https://img.shields.io/badge/GSAP-3.13-88CE02?style=flat-square&logo=greensock&logoColor=white" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white" />
  </p>
</div>

---

## ✨ About

I built this project to push my skills in 3D web development and advanced animation. The goal was to recreate the premium feel of Apple's product pages — combining interactive 3D MacBook models with buttery-smooth scroll animations, all running natively in the browser.

This isn't just a static landing page. Every section responds to the user's scroll position, 3D models react to interactions, and the entire experience is designed to feel cinematic and polished.

## 🔋 What I Built

- **Interactive 3D Product Viewer** — Rendered a realistic MacBook model using Three.js with React Three Fiber, complete with studio-quality lighting and environment mapping
- **Scroll-Driven Animations** — Wired up GSAP ScrollTrigger to power timeline-synced transitions across every section of the page
- **Pinned Showcase Sections** — Implemented sections that lock in place while inner content animates, creating a cinematic scroll experience
- **Image Masking Effects** — Built scroll-triggered masks and reveals for striking visual transitions between sections
- **Performance Dashboard** — Designed animated stats and comparison visuals that bring the MacBook's specs to life
- **Feature Highlights** — Created rich feature cards with icons, descriptions, and smooth entrance animations
- **Color/Variant Switching** — Added global state management with Zustand so users can swap the MacBook's color in real-time across the 3D viewer
- **Fully Responsive** — Made sure the layout and all GSAP animations adapt fluidly across desktop, tablet, and mobile

## ⚙️ Tech Stack

| Technology | Why I Used It |
|---|---|
| [React 19](https://react.dev/) | Component architecture and reactive UI |
| [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | 3D model rendering in the browser |
| [GSAP 3](https://gsap.com/) + ScrollTrigger | Professional-grade scroll & timeline animations |
| [Tailwind CSS 4](https://tailwindcss.com/) | Rapid, utility-first styling |
| [Zustand](https://zustand-demo.pmnd.rs/) | Lightweight global state (model color, variant) |
| [Vite 7](https://vitejs.dev/) | Blazing fast dev server and optimized builds |

## 📁 Project Structure

```
├── public/
│   ├── models/          # 3D MacBook .glb model files
│   ├── videos/          # Hero & showcase video assets
│   ├── fonts/           # Custom typography
│   └── *.png / *.svg    # Images, icons, logos
│
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Hero section with video background
│   │   ├── ProductViewer.jsx  # Interactive 3D MacBook viewer
│   │   ├── Showcase.jsx       # Pinned scroll showcase
│   │   ├── Performance.jsx    # Specs & performance metrics
│   │   ├── Features.jsx       # Feature highlight cards
│   │   ├── Highlights.jsx     # Visual highlights section
│   │   ├── NavBar.jsx         # Navigation bar
│   │   ├── Footer.jsx         # Footer with links
│   │   ├── models/            # Three.js model components
│   │   └── three/             # Scene setup (lights, camera, env)
│   │
│   ├── constants/       # Static data & configuration
│   ├── store/           # Zustand state stores
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
│
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) v18+ and npm

```bash
# Clone the repo
git clone <your-repo-url>
cd MackBook-LandingPage

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see it in action.

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## 🎨 Key Learnings

- Setting up **React Three Fiber** scenes with proper lighting, camera positioning, and GLTF model loading
- Building complex **GSAP ScrollTrigger** timelines that span multiple sections with pinning
- Managing **3D model state** (color, texture) reactively with Zustand
- Creating **performant scroll animations** that stay smooth at 60fps
- Implementing **responsive 3D experiences** that adapt to different screen sizes


## 📄 License

This project is open source and available for personal and portfolio use.
