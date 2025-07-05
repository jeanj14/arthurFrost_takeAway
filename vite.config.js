import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
  alias: {
    "@app": resolve("src"),
    "@assets": resolve("src/assets"),
    "@components": resolve("src/components"),
    "@header": resolve("src/components/header"),
    "@footer": resolve("src/components/footer"),
    "@pages": resolve("src/pages"),
    "@api": resolve("src/api"),
    // "@store": resolve("src/store"),
    "@ui": resolve("src/ui"),
    "@utils": resolve("src/utils"),
  },

},
})
