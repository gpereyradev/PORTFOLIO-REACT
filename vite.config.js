import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative output supports GitHub Pages repositories and custom domains.
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: { allowedHosts: ["terminal.local"] },
});
