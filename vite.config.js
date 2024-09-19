// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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
    },
    chunkSizeWarningLimit: 1000,
  },
});
