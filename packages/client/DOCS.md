# VRST Starter Template DOCS

---
## ⚡ Prerequisite

- **Bundler:** [Vite](https://vitejs.dev/) - Lightning-fast HMR and build speeds
- **Framework:** [React](https://react.dev/) - Component-driven UI development
- **Language:** [TypeScript](https://www.typescriptlang.org/) - End-to-end type safety
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling workflow
- **Routing & State:** [TanStack Router](https://tanstack.com/router) / [TanStack Query](https://tanstack.com/query)
- **Package Management:** [PNPM](https://pnpm.io/) - Fast, disk space-efficient package manager

---
## Installation
```bash
  pnpm dlx degit SoumabhaSaha15/VRST app
  cd app
  pnpm up
```

---
## 📁 Project Structure

```text
├── public/              # Static public assets
├── src/
│   ├── assets/          # Static files (images, icons, fonts)
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks, query hooks
│   ├── routes/          # Application pages and routing configuration
│   ├── shared/          # Common pages eg: NotFound, Error etc.
│   ├── contexts/        # Put custom react contexts
│   ├── stores/          # State-stores eg:redux-stores
│   ├── validators/      # Schema-validations
│   ├── types/           # Global TypeScript definitions and interfaces
│   ├── utils/           # Helper functions and utilities
│   ├── App.tsx          # Root application component
│   └── main.tsx         # Application entry point
├── .gitignore
├── package.json
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.ts   # Tailwind configuration
└── vite.config.ts       # Vite configuration
```