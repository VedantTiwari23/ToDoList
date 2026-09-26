import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves project sites from https://<user>.github.io/ToDoList/,
  // so the built index.html must request its JS/CSS under the "/ToDoList/"
  // base path. Without this, assets are fetched from the domain root
  // (e.g. /assets/index-*.js), return 404 and the deployed page stays blank.
  // It always worked locally because `npm run dev` serves from "/".
  // If a custom domain is added later, change this to "/".
  base: '/ToDoList/',
  plugins: [react(),tailwindcss()],
})
