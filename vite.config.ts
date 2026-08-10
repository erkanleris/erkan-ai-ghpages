import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages: الموقع يُنشر على /erkan-ai-prelaunch/
  base: "/erkan-ai-ghpages/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
