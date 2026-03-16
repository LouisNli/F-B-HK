import App from "./App.vue";
import { initApp, preloadApp, registerAppPlugins } from "./plugins";
// import "./style.css"; (replaced by index.css in plugins)

// Handle Top-level await issue
(async () => {
  await preloadApp();
})();
const app = createApp(App);
registerAppPlugins(app);

app.mount("#app");
initApp();
