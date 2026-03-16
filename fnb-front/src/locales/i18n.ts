// src/i18n.ts
import { createI18n } from "vue-i18n";

import zh from "./zh.json";
import en from "./en.json";

// Create i18n instance
const i18n = createI18n({
  legacy: false, // use Composition API mode
  globalInjection: true, // allows using $t in templates
  locale: "zh", // default language
  fallbackLocale: "en", // fallback language
  messages: {
    en,
    zh,
  },
});

export default i18n;
