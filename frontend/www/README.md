1. shadcnui:

2. shadcnui,nextui and antdesign:
bun install @nextui-org/react framer-motion antd @ant-design/nextjs-registry

3. redux:
bun install react-redux

4. previous package.json
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
