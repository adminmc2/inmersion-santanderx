import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Añade esta línea con el nombre exacto de tu repositorio
  base: '/LIA-SML/',
})
