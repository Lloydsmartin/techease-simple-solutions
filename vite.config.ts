import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/techease-simple-solutions/', // 👈 matches your repo name
  plugins: [react()],
})
