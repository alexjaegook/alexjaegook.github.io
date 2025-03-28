import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'/alexjaegook.github.io/',
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    }
  },
  build: {
    outDir: 'docs',
  }
})
