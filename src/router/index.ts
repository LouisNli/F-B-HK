// src/router/index.ts
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "vue-router/auto-routes";
import { setupLayouts } from "virtual:generated-layouts";

const basePath = import.meta.env.BASE_URL;
const computedRoutes = setupLayouts(routes);
const router = createRouter({
  history: createWebHashHistory(basePath),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash };
    } else if (savedPosition) {
      savedPosition.behavior = "instant";
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes: computedRoutes,
});

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to, from) => {
  to.meta.forward = history?.state?.forward;
  if (from.name === undefined) {
    to.meta.firstRoute = true;
  }
  if (
    to.meta?.tabIndex != undefined &&
    to.meta.tabIndex < (from.meta?.tabIndex ?? -1)
  ) {
    to.meta.fromLeft = true;
  }
  updateMeta();
});

export default router;

export function updateMeta() {
  document.title = "Testing project base";
}
