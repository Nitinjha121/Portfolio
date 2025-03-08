import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
    host: true
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
