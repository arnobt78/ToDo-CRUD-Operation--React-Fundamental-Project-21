# Todo List - React, Vite, TypeScript, Context API, Custom CSS Fundamental Project 21

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF)](https://vitejs.dev/)
[![Lucide React](https://img.shields.io/badge/Lucide_React-Icons-000)](https://lucide.dev/)

A beginner-friendly todo list application built with React, Vite, and TypeScript. It demonstrates core React concepts—state management, Context API, custom hooks, and reusable components—with no backend: all data is stored in the browser’s localStorage. Use it to add, edit, and delete tasks, switch themes, and learn how a small React app is structured and run.

- **Live Demo:** [https://todo-crud-operation.vercel.app/](https://todo-crud-operation.vercel.app/)

---

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites & Installation](#prerequisites--installation)
- [How to Run](#how-to-run)
- [Environment Variables & .env](#environment-variables--env)
- [Functionalities & Walkthrough](#functionalities--walkthrough)
- [Components Overview](#components-overview)
- [Context API & State](#context-api--state)
- [Custom Hooks](#custom-hooks)
- [Reusing Components in Other Projects](#reusing-components-in-other-projects)
- [API, Backend & Data](#api-backend--data)
- [Scripts & Build](#scripts--build)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)
- [Happy Coding!](#happy-coding-)

---

## Features

- **CRUD operations:** Add, edit, and delete tasks with instant UI updates.
- **Theme switcher:** Six themes (light, medium, dark, and three gradients) applied to the page background.
- **Persistence:** Tasks and theme preference saved in `localStorage` and restored on refresh.
- **TypeScript:** Typed props, state, and context for safer refactors and better editor support.
- **Context API:** Global state for tasks and theme without prop drilling.
- **Custom hook:** `useLocalStorage` for syncing state with the browser’s storage.
- **Reusable UI:** `EmptyState` component for empty list messaging.
- **Educational copy:** In-app tips explaining state, Context, hooks, and localStorage.

---

## Technology Stack

| Technology                     | Purpose                                                 |
| ------------------------------ | ------------------------------------------------------- |
| **React 18**                   | UI library; components, hooks, and Context.             |
| **TypeScript**                 | Static typing for components, hooks, and context.       |
| **Vite 6**                     | Build tool and dev server (fast HMR, ESM).              |
| **Lucide React**               | Icon set (clipboard, plus, save, pencil, trash, etc.).  |
| **Custom CSS**                 | Styling in `App.css` and `index.css` (no UI framework). |
| **ESLint + TypeScript ESLint** | Linting and type-aware rules.                           |

**Dependencies (runtime):** `react`, `react-dom`, `lucide-react`.  
**Dev dependencies:** `vite`, `@vitejs/plugin-react`, `typescript`, `@types/react`, `@types/react-dom`, `@types/node`, `eslint`, `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `@eslint/js`, `globals`.

---

## Project Structure

```bash
taskmate/
├── public/                 # Static assets
│   ├── vite.svg            # Favicon / app icon
│   ├── robots.txt
│   └── assets/images/      # Optional images
├── src/
│   ├── components/         # React components
│   │   ├── Header.tsx      # Logo + theme switcher
│   │   ├── HomeIntro.tsx   # Educational intro block
│   │   ├── AddTask.tsx     # Form to add/update task
│   │   ├── ShowTask.tsx    # Task list + empty state
│   │   └── EmptyState.tsx  # Reusable empty-state UI
│   ├── context/            # React Context
│   │   ├── TaskContext.tsx # TaskProvider (task list + editing task)
│   │   ├── ThemeContext.tsx# ThemeProvider (current theme)
│   │   ├── taskState.ts    # TaskContext object + types
│   │   └── themeState.ts   # ThemeContext object + types
│   ├── hooks/
│   │   ├── useLocalStorage.ts  # Persist state in localStorage
│   │   ├── useTaskContext.ts   # Consume TaskContext
│   │   └── useThemeContext.ts  # Consume ThemeContext
│   ├── App.tsx             # Root: providers + layout
│   ├── App.css             # App-specific styles
│   ├── main.tsx            # Entry: mounts App in #root
│   ├── index.css           # Global styles + theme classes
│   ├── types.ts            # Task, ThemeName types
│   └── vite-env.d.ts       # Vite client types
├── index.html              # HTML shell + SEO meta
├── vite.config.ts          # Vite config + path alias
├── tsconfig.json           # TypeScript config
├── tsconfig.node.json      # TS config for Vite config
├── eslint.config.js        # ESLint flat config
├── vercel.json             # SPA rewrite for Vercel
├── package.json
└── README.md
```

---

## Prerequisites & Installation

- **Node.js** (e.g. 18+).
- **npm** (or yarn/pnpm).

**Install steps:**

```bash
git clone <your-repo-url>
cd taskmate
npm install
```

---

## How to Run

- **Development:** `npm run dev` — starts Vite dev server (default: <http://localhost:5173>).
- **Production build:** `npm run build` — outputs to `dist/`.
- **Preview build:** `npm run preview` — serves `dist/` locally.
- **Lint:** `npm run lint` — runs ESLint on `src` (TypeScript + React rules).

---

## Environment Variables & .env

**You do not need any environment variables or a `.env` file to run this project.** It works entirely in the browser and uses `localStorage` for data.

If you later add a backend or optional config (e.g. analytics, feature flags), you can:

1. Create a `.env` in the project root (and add `.env` to `.gitignore` if it contains secrets).
2. Prefix variables with `VITE_` so Vite exposes them to the client, e.g. `VITE_API_URL=https://api.example.com`.
3. Use them in code as `import.meta.env.VITE_API_URL`.

Example (optional, not used in current code):

```env
# Optional – not required for this project
VITE_APP_TITLE=Taskmate
```

---

## Functionalities & Walkthrough

1. **Add task:** Type in the input and click **Add** (or submit the form). A new task is created with an id, name, and timestamp, then appended to the list and saved to `localStorage`.
2. **Edit task:** Click the pencil icon on a task. Its content moves into the input and the button becomes **Update**. Submit to update that task and clear the form.
3. **Delete task:** Click the trash icon to remove the task from the list and from `localStorage`.
4. **Clear all:** **Clear All** removes every task (disabled when the list is empty).
5. **Theme:** Click a theme dot in the header to change the page background (light, medium, dark, or gradient). The choice is stored in `localStorage` and re-applied on load.

Data flow: `TaskProvider` holds `tasklist` and the current `task` (for editing). `AddTask` and `ShowTask` use `useTaskContext()` to read and update that state. `useLocalStorage` inside `TaskProvider` syncs `tasklist` to the `tasklist` key in `localStorage`. Similarly, `ThemeProvider` holds `theme` and syncs it to `theme` in `localStorage`, and applies a class to `<html>` for CSS themes.

---

## Components Overview

| Component      | Role                                                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Header**     | Logo (Taskmate) and theme selector dots; uses `useThemeContext()`.                                                        |
| **HomeIntro**  | “Learn by doing” card with short explanation and a localStorage tip.                                                      |
| **AddTask**    | Controlled input and Add/Update button; uses `useTaskContext()` to add or update a task.                                  |
| **ShowTask**   | Renders task count, Clear All, and either the task list or `EmptyState` when there are no tasks; uses `useTaskContext()`. |
| **EmptyState** | Reusable block: optional icon, title, description, and children. Used when `tasklist.length === 0`.                       |

All components are function components and use TypeScript for props and context.

---

## Context API & State

- **TaskContext** (from `taskState.ts`, provided by `TaskContext.tsx`):
  - `tasklist`, `setTasklist` — full list of tasks (persisted via `useLocalStorage`).
  - `task`, `setTask` — currently edited task (or empty object when adding new).

- **ThemeContext** (from `themeState.ts`, provided by `ThemeContext.tsx`):
  - `theme`, `setTheme` — current theme name (persisted via `useLocalStorage`); effect in `ThemeProvider` applies the theme class to `document.documentElement`.

Providers are composed in `App.tsx`: `ThemeProvider` wraps `TaskProvider`, which wraps the main layout (Header, HomeIntro, AddTask, ShowTask). Any child can consume context via `useTaskContext()` or `useThemeContext()`.

---

## Custom Hooks

- **useLocalStorage(key, initialValue, parse?, serialize?)**  
  Returns `[value, setValue]`. Reads from `localStorage` on mount, writes on every `setValue` change. Optional `parse`/`serialize` customize how values are read/written (e.g. for theme string or task list array).

- **useTaskContext()**  
  Returns the TaskContext value; throws if used outside `TaskProvider`.

- **useThemeContext()**  
  Returns the ThemeContext value; throws if used outside `ThemeProvider`.

---

## Reusing Components in Other Projects

- **EmptyState:** Copy `EmptyState.tsx` and the `.emptyState*` styles from `App.css`. Use it wherever you need an empty state (e.g. no search results, no items in a cart). Props: `icon`, `title`, `description`, `children`, `className`.

- **useLocalStorage:** Copy `useLocalStorage.ts`. Use for any state you want to persist in `localStorage` (e.g. theme, user preferences, draft form data). Ensure the key is unique and the parsed shape matches your types.

- **Context pattern:** Reuse the split: a `*State.ts` file that creates the context and exports the type, a `*Context.tsx` that implements the provider (and optionally uses `useLocalStorage`), and a `use*Context` hook in `hooks/` so the context file only exports the provider component (helps fast refresh and lint).

---

## API, Backend & Data

There is **no backend and no HTTP API**. All data is stored in the browser:

- **localStorage keys:** `tasklist` (JSON array of tasks), `theme` (string).
- **Task shape:** `{ id: number, name: string, time: string }`.

To plug in a real API later, you would replace or wrap the `useLocalStorage('tasklist', ...)` usage in `TaskProvider` with `useState` + `useEffect` (or a data-fetching library) that loads/saves tasks from your server.

---

## Scripts & Build

| Script  | Command           | Description                                              |
| ------- | ----------------- | -------------------------------------------------------- |
| dev     | `npm run dev`     | Start Vite dev server.                                   |
| build   | `npm run build`   | Type-check (`tsc --noEmit`) then `vite build` → `dist/`. |
| preview | `npm run preview` | Serve `dist/` locally.                                   |
| lint    | `npm run lint`    | Run ESLint (TS + React) with max-warnings 0.             |

Deployment (e.g. Vercel): `vercel.json` rewrites all routes to `/index.html` for SPA routing so refreshes and direct URLs work.

---

## Keywords

Todo list, Taskmate, React, Vite, TypeScript, Context API, custom hooks, CRUD, localStorage, state management, reusable components, educational project, React fundamentals, single-page application, theme switcher, Lucide icons.

---

## Conclusion

This project is a small, self-contained example of a React + TypeScript app: components, Context for global state, a custom hook for persistence, and reusable UI. It is suitable for learning and as a starting point for similar apps. Extend it by adding filters, due dates, or a backend API and wiring it into the same context and components.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

---

## Happy Coding! 🎉

This is an **open-source project** — feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊
