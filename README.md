# 🪑 Seating Plan Frontend

A modern **React + TypeScript** web application built with **Vite**, offering a dynamic seating plan interface with theme toggling, search functionality, and class-based filtering.

---

## 🚀 Overview

This is a responsive frontend application designed to display and manage classroom seating plans. It includes:

- **React 19 + TypeScript**: Strong typing and the latest React features.
- **Vite**: Fast development server and optimized production builds.
- **Tailwind CSS**: Utility-first styling with extended custom themes.
- **Material UI + Emotion**: Rich UI components with styling flexibility.
- **React Router DOM**: Client-side routing.
- **Framer Motion**: Smooth animations.
- **Lucide React**: Icon support.
- **Custom Hooks + Context API**: For theme toggling and state management.
- **ESLint**: With TypeScript and React hooks rules for clean, consistent code.

---

## ✨ Features

- 🔍 **Search Bar** – Quickly locate seats or student profiles.
- 🏫 **Class Selection** – Switch views based on classroom selection.
- 🌗 **Theme Toggle** – Seamless switch between dark and light modes with blur transitions.
- 🧭 **Routing** – Includes Home, Seating Plan, and a 404 Not Found page.
- 📱 **Responsive Design** – Optimized for all screen sizes.
- ⚙️ **State Management** – Context API used for managing themes and data fetching.

---

## 🛠️ Getting Started

### ✅ Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### 📦 Installation

```bash
git clone <repository-url>
cd keshavmakkad-seating-plan-frontend
```

Install dependencies:

```bash
npm install
# or
yarn install
```

### 🧪 Running the Development Server

Start the Vite development server with hot module replacement:

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

### 🏗️ Building for Production

To generate the optimized production bundle:

```bash
npm run build
# or
yarn build
```

### 👁️ Previewing the Production Build

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

---

## 🧬 Project Structure

```
keshavmakkad-seating-plan-frontend/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images, icons, etc.
│   ├── components/        # Reusable components (Header, Column, Row, etc.)
│   ├── context/           # Theme, data fetch, and state contexts
│   ├── pages/             # Page components (Home, SeatingPlanPage, 404)
│   ├── styles/            # Tailwind and SCSS styles
│   ├── utils/             # Custom hooks and providers (ThemeProvider, blur)
│   ├── App.tsx            # App-level routing
│   └── main.tsx           # React DOM rendering entry point
├── package.json           # Project dependencies and scripts
├── vite.config.ts         # Vite configuration with React and Tailwind
├── tailwind.config.js     # Tailwind theme customization
├── eslint.config.js       # ESLint setup for TS and React
├── tsconfig.app.json      # TypeScript config for app code
├── tsconfig.node.json     # TypeScript config for tooling
└── README.md              # You're reading it!
```

---

## 🧰 Technologies Used

- **React 19** with **TypeScript**
- **Vite** for build tooling and fast dev server
- **Tailwind CSS** for design system
- **Material UI + Emotion** for UI components and theming
- **React Router DOM** for SPA routing
- **Axios** for API requests
- **Framer Motion** for animation
- **Lucide React** for SVG icons
- **ESLint** with support for TypeScript and React hooks

---

## 📏 ESLint Configuration

- Enforces consistent code quality with TypeScript support
- Includes `react-hooks` rules and `react-refresh` plugin
- Automatically catches common issues and suggests improvements

---

## 🎨 Customization Guide

- **Theme Colors:** Defined with CSS variables and configured in `tailwind.config.js`
- **Routes:** Modify or extend in `src/App.tsx`
- **Components:** Customize or add reusable components in `src/components/`

---
