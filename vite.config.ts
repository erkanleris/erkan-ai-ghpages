import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages: الموقع يُنشر على /erkan-ai-prelaunch/
  base: "/erkan-ai-ghpages/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
