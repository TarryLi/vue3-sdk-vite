import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { resolve } from "path";
import copyJs from "./copyJs";

export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin(), copyJs()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
  define: {
    "process.env": process.env,
  },
  build: {
    outDir: "./dist",
    minify: "terser",
    lib: {
      entry: "./src/index.ts",
      name: "__sdk__",
      fileName: "index",
      formats: ["umd"],
    },
  },
  server: {
    host: "0.0.0.0",
    port: 80,
    strictPort: true,
    cors: true,
  },
});
