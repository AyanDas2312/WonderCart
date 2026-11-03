import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { defineConfig, lazyPlugins } from "vite-plus";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  staged: {
    "packages/client/**/*.{js,jsx,ts,tsx,json,css}": "vp check --fix",
  },
  fmt: {},
  lint: {
    plugins: ["react", "typescript", "oxc"],
    rules: {
      "react/rules-of-hooks": "error",
      "vite-plus/prefer-vite-plus-imports": "error",
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
    jsPlugins: [
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  plugins: lazyPlugins(() => [
    devtools({
      enhancedLogs: { enabled: true },
      logging: true,
      removeDevtoolsOnBuild: true,
    }),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react({ compiler: true }),
    tailwindcss(),
  ]),
});
