/**
 * Vite config: React plugin for JSX/HMR; @ alias points to src/ for cleaner imports.
 */
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
