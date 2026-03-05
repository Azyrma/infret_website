# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Type-check and build for production (tsc -b && vite build)
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

## Stack

- React 19 + TypeScript + Vite 7
- `@vitejs/plugin-react` (Babel-based Fast Refresh)
- ESLint with `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`

## Structure

This is a minimal Vite + React + TypeScript scaffold. Application code lives in `src/`, with `src/main.tsx` as the entry point and `src/App.tsx` as the root component. Static assets go in `public/`.

There is no test runner configured yet.
