import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//this plugin converts SVGs into ReactComponents
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
})
