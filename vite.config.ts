import { defineConfig } from 'vite'
import { reactRouter } from "@react-router/dev/vite"
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // Disables react-router plugin when running Cypress tests
    process.env.CYPRESS_INTERNAL_ENV === undefined && reactRouter(),
    tailwindcss(),
  ],
  
  server: {
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  
})
