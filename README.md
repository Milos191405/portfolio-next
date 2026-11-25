# Milos Mirkovic — Portfolio

Personal portfolio of **Milos Mirkovic**, Data Analyst & Analytics Engineer (Power BI • SQL • Python • Microsoft Fabric), based in Ketsch, Germany.

The site presents featured data projects, certifications, skills and professional background — fully bilingual (**English / German**).

## ✨ Features

- **Bilingual UI (EN / DE)** — one-click language switch, all content in a single translations file
- **Interactive hero card** — switchable project showcases with KPIs and mini charts
- **Project gallery modal** — multi-image slideshow with keyboard navigation (← → Esc)
- **Certificate viewer** — PNG/PDF certificates in a modal, with links to official Microsoft Learn verification
- **CV download** — English and German versions
- **Smooth scrolling & scroll-spy navigation**, scroll-to-top button
- **Fade-in animations** on scroll (Framer Motion)
- **Fully responsive** — mobile menu, desktop social sidebar

## 🛠️ Tech Stack

| Area      | Technology                          |
| --------- | ----------------------------------- |
| Framework | React 18                            |
| Build     | Vite 5                              |
| Styling   | Tailwind CSS 3                      |
| Animation | Framer Motion                       |
| Scrolling | react-scroll                        |
| Icons     | react-icons                         |
| Hosting   | Render (static site)                |

## 🚀 Getting Started

**Requirements:** Node.js 18+ and npm

```bash
# 1. Clone the repository
git clone https://github.com/Milos191405/Portfolio-React.git
cd Portfolio-React

# 2. Install dependencies
npm install

# 3. Start the dev server (http://localhost:5173)
npm run dev
```

### Available scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Build for production into `dist/`    |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## 📁 Project Structure

```
Portfolio-React/
├── public/                  # Static files served as-is
│   ├── projects/            # Project screenshots (gallery images)
│   ├── *.pdf / *.png        # CVs and certificates
├── src/
│   ├── assets/              # Logo and imported images
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation, language switch, CV download
│   │   ├── Home.jsx             # Hero, certifications, project showcase card
│   │   ├── Work.jsx             # Featured & other projects
│   │   ├── ProjectModal.jsx     # Project details + image slideshow
│   │   ├── Skills.jsx           # Tech stack categories
│   │   ├── About.jsx            # Bio and career journey
│   │   ├── Contact.jsx          # Services, contact links, footer
│   │   ├── SocialSidebar.jsx    # Fixed social links (desktop)
│   │   ├── CertificateModal.jsx # Certificate viewer
│   │   └── FadeIn.jsx           # Scroll animation wrapper
│   ├── data/
│   │   └── translations.js  # All EN / DE text content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── render.yaml              # Render deployment config
```

## ✏️ Editing Content

Almost all text lives in [`src/data/translations.js`](src/data/translations.js), split into `en` and `de`:

- **Projects** → `work.featuredProjects` / `work.otherProjects`
- **Skills** → `skills.categories`
- **Career journey** → `about.journey`
- **Certifications** → `home.certifications`
- **CV files** → `nav.cvFile` (file must exist in `public/`)

Project gallery images are mapped by project `id` in `PROJECT_GALLERIES` inside [`src/components/Work.jsx`](src/components/Work.jsx).

> Always update **both** `en` and `de` when changing content.

## 🌐 Deployment

The site is deployed as a static site on **Render** (see `render.yaml`):

- Build command: `npm install; npm run build`
- Publish directory: `dist`

## 📬 Contact

- **Email:** [milos.mirkovic7@gmail.com](mailto:milos.mirkovic7@gmail.com)
- **LinkedIn:** [milos-mirkovic](https://www.linkedin.com/in/milos-mirkovic-7976726b/)
- **GitHub:** [Milos191405](https://github.com/Milos191405)

---

© 2026 Milos Mirkovic. All rights reserved.
