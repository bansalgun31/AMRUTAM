# AMRUTAM — Frontend (Vite + React)

A small Vite + React frontend application. This repository contains the UI for a shop/forum style app with components and pages under `src/`.

## Features

- React + Vite development setup
- Uses MUI, styled-components, Tailwind and Bootstrap utilities
- Organized components under `src/components` and pages under `src/pages`

## Quick Setup

Requirements:
- Node.js (recommended v16+ or later)
- npm (bundled with Node.js)

Install dependencies:

```powershell
npm install
```

Run development server:

```powershell
npm run dev
```

Build for production:

```powershell
npm run build
```

Preview production build locally:

```powershell
npm run preview
```

Linting:

```powershell
npm run lint
```

(The above commands match the `scripts` in `package.json`.)

## Project Structure (important files)

- `index.html` — Vite entry HTML
- `src/main.jsx` — React entry
- `src/App.jsx` — App root
- `src/components/` — Reusable components (Navbar, Footer, QA widgets, pages)
- `src/pages/` — Page components (`Forum.jsx`, `Shop.jsx`)
- `src/data/` — Example data (`Ingredient.jsx`, `Product.jsx`)
- `public/` — Static assets

## Development notes

- Routes are handled with `react-router-dom`.
- UI libraries used: `@mui/material`, `styled-components`, `tailwindcss`, `bootstrap`, `react-icons`.
- ESLint is configured; run `npm run lint` before commits.

## Contributing

- Create a branch named `feature/<short-description>`.
- Open a PR with a clear description of changes and screenshots if UI changes.
- Run linting and ensure the dev server runs locally before requesting review.

## License

This project is licensed under the MIT License — see the `LICENSE` file at the project root for details.

## Contact

If you want help or have questions, open an issue or reach out to the repository owner.

