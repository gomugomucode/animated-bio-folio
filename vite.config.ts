import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // This is the essential fix for gomugomucode.github.io/animated-bio-folio/
  base: "/animated-bio-folio/",

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [
    react(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // This increases the limit so you don't get warnings about large files
    chunkSizeWarningLimit: 2000,
  },
});