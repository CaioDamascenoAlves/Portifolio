// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  base: "/Portifolio/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Divida as bibliotecas grandes em chunks separados
            if (id.includes("@mui")) {
              return "mui";
            }
            if (id.includes("react-syntax-highlighter")) {
              return "syntax-highlighter";
            }
            return "vendor";
          }
        },
      },
      treeshake: true,
    },
    chunkSizeWarningLimit: 1000,
  },
});
