# 💻 qudwl.github.io

> **Personal developer portfolio and website.** Showcase projects, technical skills, and background with a responsive, modern, and accessible interface.

[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Mantine](https://img.shields.io/badge/Mantine-9.4.1-339AF0?logo=mantine&logoColor=white)](https://mantine.dev/)
[![Biome](https://img.shields.io/badge/Biome-2.5.2-60A5FA?logo=biome&logoColor=white)](https://biomejs.dev/)

---

## ✨ Key Features

*   **⚡ Modern & Fast Architecture**
    *   Built on **Vite 7** and **React 19** for blazing fast build times and runtime performance.
    *   Fully typed codebase using **TypeScript** for robust reliability.

*   **🎨 Premium UI/UX Design**
    *   Styled using **Mantine 9** component library for rich, accessible UI components.
    *   Dynamic Scrollspy navigation that highlights the active section in the header automatically as the user scrolls.

*   **📱 Modular Sections**
    *   **Home:** Catchy introduction with key call-to-actions.
    *   **About:** Details about background, experience, and interests.
    *   **Skills:** Categorized display of technical capabilities and tools.
    *   **Projects:** Filterable/organized catalog of highlight projects.
    *   **Contact:** Direct way to get in touch.

---

## 🛠️ Development & Commands

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### Run Locally (Development)
Start the Vite development server with hot module replacement (HMR):
```bash
npm run dev
```

### Production Build
Build and optimize the application for production deployment:
```bash
npm run build
```

### Linting & Formatting
Check code style and quality with Biome:
```bash
# Run analysis and linting checks
npm run lint

# Automatically apply safe fixes for linting and formatting checks
npm run lint:fix
```

### GitHub Pages Deployment
Any push to the `main` branch automatically triggers the GitHub Actions CI/CD pipeline to deploy the updated build output to GitHub Pages.
