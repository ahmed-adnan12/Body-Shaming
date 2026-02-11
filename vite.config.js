
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // For React/Shikara Labs
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
