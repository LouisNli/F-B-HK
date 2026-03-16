import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import VueLayouts from "vite-plugin-vue-layouts";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import Layouts from "vite-plugin-vue-layouts";
import tailwindcss from "@tailwindcss/vite";

import fs from "fs";
import dotenv from "dotenv";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  dotenv.config({ path: path.resolve(__dirname, "env") + `/.env.${mode}` });
  return {
    define: {},
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) =>
              ["swiper-container", "swiper-slide", "ersChatbot"].includes(tag),
          },
        },
      }),
      VueRouter(),
      Layouts(),
      AutoImport({
        imports: ["vue", "vue-i18n", "pinia", VueRouterAutoImports],
        dirs: [
          "./src/api/**/*.ts",
          "./src/stores/**/*.ts",
          "./src/composables/**/*.ts",
          "./src/router/**/*.ts",
          "./src/utils/**/*.ts",
          "./src/consts/**/*.ts",
          "./src/themes/**/*.ts",
        ],
        dts: true,
        eslintrc: { enabled: true },
      }),
      Components({
        dts: true,
        dirs: ["./src/components"],
        resolvers: [],
      }),
      tailwindcss(),
    ],
    base: "/",
    envDir: path.resolve(__dirname, "env"),
    build: {
      outDir: path.resolve(__dirname, "dist", mode),
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        logo: path.resolve(__dirname, "./src/assets/logo"),
        icons: path.resolve(__dirname, "./src/assets/icons"),
        images: path.resolve(__dirname, "./src/assets/images"),
        backgrounds: path.resolve(__dirname, "./src/assets/backgrounds"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  };
});
