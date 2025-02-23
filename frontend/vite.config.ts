import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    compression({ algorithm: "gzip" }),
    compression({ algorithm: "brotliCompress" })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: 'terser', // Use Terser for minification
    cssCodeSplit: true, // Split CSS to reduce file size
  }
  
});
