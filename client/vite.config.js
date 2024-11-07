import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true, // Enable sourcemaps to troubleshoot CSS issues
  },
  build: {
    minify: false, // Helps to see if minification is affecting layout
  },
});
