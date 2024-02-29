import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    define: {
      global: {},
    },
    build: {
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        name: "my-library",
        fileName: "index",
      },
      rollupOptions: {
        external: ["react", "antd"],
      },
    },
    plugins: [
      react(),
      viteMockServe({
        enable: command === "serve",
      }),
    ],
  };
});
