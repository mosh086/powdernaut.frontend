# AGENTS.md - Powdernaut Frontend

## Framework & Toolchain

- **Angular 20.3.x** with zoneless change detection
- **NgRx** for state management (store, effects, devtools)
- **NgRx localStorage sync** via `layout-reducers` for persistence
- SCSS styles, `pn` component prefix
- **Bootstrap 5** for UI components

## Commands

```bash
npm start          # dev server at localhost:4200
npm run build    # production build -> dist/powdernaut
npm run test     # Karma unit tests
npm run format   # Prettier write src/**/*.{ts,html}
```

## Build Output

- Production: `dist/powdernaut/browser/` (Azure deploy looks for this)
- CI workflow uses `npm run build:production` - verify this script works

## Path Aliases

Configured in `tsconfig.json`, use these for imports:
- `@/*` → `src/*`
- `@core/*` → `src/app/core/*`
- `@store/*` → `src/app/store/*`
- `@components/*` → `src/app/components/*`
- `@views/*` → `src/app/views/*`

## Testing

- Karma + Jasmine, specs in `*.spec.ts`
- Run single spec: `ng test --include='path/to/spec.spec.ts'`

## Build Constraints

- Initial bundle: 8MB max (strict)
- Component styles: 8KB max per component

## Config Files

- `angular.json` - build/serve/test config
- `tsconfig.json` - strict mode, path aliases
- `.prettierrc` - formatting rules

## App Structure

```
src/
  app/
    core/       # JWT/error interceptors, auth pages
    store/      # NgRx state (root reducer, effects)
    layouts/    # shell/layout components
    views/      # feature views
    components/ # shared components
```