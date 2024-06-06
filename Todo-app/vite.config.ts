import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      
      '/api': 'https://todo-list-nine-weld.vercel.app/'
    }
  },
  plugins: [react()],
})
