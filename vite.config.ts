// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    {
      name: 'tailwindcss',
      configurePostCss(postcssOptions) {
        postcssOptions.plugins.push(
            require('@tailwindcss/postcss')({
              tailwindConfig: './tailwind.config.ts' // Update path if needed
            })
        )
        return postcssOptions
      }
    }
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
