import type { App } from "vue";
import i18n from "@/locales/i18n";
import router from "@/router";
import pinia from "@/stores";
import "@/index.css";
// import "vuestic-ui/styles/essential.css";
import "vuestic-ui/styles/typography.css";
import { createVuestic } from "vuestic-ui";

export async function preloadApp() {}
export function registerAppPlugins(app: App) {
  app.use(pinia);
  app.use(router);
  app.use(i18n);
  app.use(createVuestic());
  return app;
}

export async function initApp() {
  router.isReady().then(() => {
    const targetLocale = router.currentRoute.value.query.lang?.toString();
    if (targetLocale) {
    }

    const html = document.querySelector("html");
    if (html) {
    }
  });
}
