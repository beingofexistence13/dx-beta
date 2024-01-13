1. first create a new nextjs project:
bunx create-next-app@latest www

2. shadcnui,nextui and antdesign:

bunx shadcn-ui@latest init

bunx shadcn-ui@latest add tooltip toggle-group toggle toast textarea tabs table switch sonner slider skeleton sheet separator select scroll-area resizable radio-group progress popover pagination navigation-menu menubar label input hover-card form dropdown-menu drawer dialogue date-picker data-table context-menu command combobox collapsible checkbox carosel card calendar button badge avatar aspect-ratio alert-dialog alert accordion 

bun install @nextui-org/react framer-motion antd @ant-design/nextjs-registry

3. redux:
bun install react-redux @reduxjs/toolkit

4. previous package.json:
{
  "name": "dx",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@ant-design/nextjs-registry": "^1.0.0",
    "@nextui-org/react": "^2.2.9",
    "antd": "^5.12.8",
    "framer-motion": "^10.18.0",
    "next": "14.0.4",
    "react": "^18",
    "react-dom": "^18",
    "react-redux": "^9.1.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "eslint": "^8",
    "eslint-config-next": "14.0.4"
  }
}

5. new package.json:
{
  "name": "dx",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@ant-design/nextjs-registry": "^1.0.0",
    "@hookform/resolvers": "^3.3.4",
    "@nextui-org/react": "^2.2.9",
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-aspect-ratio": "^1.0.3",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-collapsible": "^1.0.3",
    "@radix-ui/react-context-menu": "^2.1.5",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-hover-card": "^1.0.7",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-menubar": "^1.0.4",
    "@radix-ui/react-navigation-menu": "^1.1.4",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-progress": "^1.0.3",
    "@radix-ui/react-radio-group": "^1.1.3",
    "@radix-ui/react-scroll-area": "^1.0.5",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slider": "^1.1.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.5",
    "@radix-ui/react-toggle": "^1.0.3",
    "@radix-ui/react-toggle-group": "^1.0.4",
    "@radix-ui/react-tooltip": "^1.0.7",
    "@reduxjs/toolkit": "^2.0.1",
    "antd": "^5.12.8",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "cmdk": "^0.2.0",
    "date-fns": "^3.2.0",
    "embla-carousel-react": "^8.0.0-rc19",
    "framer-motion": "^10.18.0",
    "lucide-react": "^0.309.0",
    "next": "14.0.4",
    "next-themes": "^0.2.1",
    "react": "^18",
    "react-day-picker": "^8.10.0",
    "react-dom": "^18",
    "react-hook-form": "^7.49.3",
    "react-redux": "^9.1.0",
    "react-resizable-panels": "^1.0.9",
    "sonner": "^1.3.1",
    "tailwind-merge": "^2.2.0",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.8.0",
    "zod": "^3.22.4"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "eslint": "^8",
    "eslint-config-next": "14.0.4"
  }
}
