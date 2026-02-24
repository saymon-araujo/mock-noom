# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**mock-noom** is an Expo ~54 universal app (iOS, Android, Web) using React Native 0.81.5, React 19.1.0, TypeScript strict mode, and file-based routing via Expo Router. Styling is handled by NativeWind v4 (Tailwind CSS for React Native). The UI component library is React Native Reusables (RNR), which provides 35+ shadcn/ui-style components in `components/ui/`.

## Commands

```bash
pnpm start          # Start Expo dev server
pnpm run ios        # Run on iOS simulator
pnpm run android    # Run on Android emulator
pnpm run web        # Run in browser
pnpm run lint       # ESLint (expo config, flat format)
npx tsc --noEmit    # TypeScript type check (no test runner configured yet)
```

## Architecture

### Routing

File-based routing via Expo Router. Routes live in `app/`:
- `app/_layout.tsx` — Root layout: imports `global.css`, sets up `ThemeProvider` with `NAV_THEME`, includes `PortalHost` (required by overlay components like Select, Dialog, Popover)
- `app/(tabs)/_layout.tsx` — Bottom tab navigator (Home + Explore tabs)
- `app/modal.tsx` — Modal route example

### Styling Stack

NativeWind v4 pipeline: `global.css` → Tailwind CSS v3 → Metro (via `withNativeWind` in `metro.config.js`) → React Native styles.

- **CSS variables** for theming are defined in `global.css` (light in `:root`, dark in `.dark:root`)
- **`tailwind.config.js`** maps those CSS variables to Tailwind color tokens (`primary`, `secondary`, `destructive`, `muted`, `accent`, `card`, `popover`, `border`, `input`, `ring`)
- **Dark mode** uses `class` strategy. The color scheme hook at `hooks/use-color-scheme.ts` (with `.web.ts` variant for SSR hydration) drives theme selection
- **`lib/theme.ts`** provides `NAV_THEME` mapping for `@react-navigation/native`'s `ThemeProvider`
- **`lib/utils.ts`** exports `cn()` — the standard clsx + tailwind-merge utility used by all UI components

### UI Components (`components/ui/`)

All 35+ components were installed via `npx @react-native-reusables/cli add --all`. They follow these patterns:
- **CVA** (class-variance-authority) for variant/size props (see `button.tsx`, `badge.tsx`, `toggle.tsx`)
- **`cn()`** for merging Tailwind classes
- **`TextClassContext`** from `text.tsx` for inherited text styling within compound components
- **`Platform.select()`** for web-specific styles (hover states, focus-visible, transitions)
- **Slot** pattern from `@rn-primitives/slot` for `asChild` composition
- Overlay components (Dialog, AlertDialog, Select, Popover, Tooltip, DropdownMenu, ContextMenu, HoverCard, Menubar) require `<PortalHost />` in the root layout

### Path Aliases

`@/*` maps to the project root (configured in `tsconfig.json`). Use `@/components/ui/button`, `@/lib/utils`, `@/hooks/use-color-scheme`, etc.

### Platform-Specific Files

Expo's platform extensions are used: `.ios.tsx`, `.web.ts`, `.native.ts`. Examples: `icon-symbol.ios.tsx`, `use-color-scheme.web.ts`.

### Key Config Files

| File | Purpose |
|---|---|
| `babel.config.js` | NativeWind JSX import source + Reanimated plugin |
| `metro.config.js` | NativeWind CSS processing with `inlineRem: 16` |
| `tailwind.config.js` | Tailwind theme with CSS variable colors |
| `global.css` | CSS variables for light/dark themes |
| `components.json` | RNR CLI config (style: new-york, icon library: lucide-react-native) |

### Adding New RNR Components

```bash
npx @react-native-reusables/cli@latest add <component-name>
npx @react-native-reusables/cli doctor   # Verify setup
```

### Icons

Uses `lucide-react-native` for icons. RNR components that need icons (e.g., `Alert`) expect a `LucideIcon` type prop. Platform icons use `@expo/vector-icons` and `expo-symbols` via the `IconSymbol` component.
