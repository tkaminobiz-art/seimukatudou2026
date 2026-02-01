import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Trigger Restart: Tailwind v4 Fix
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
