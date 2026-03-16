import { createPinia, type Store } from "pinia";

const pinia = createPinia();
const stores: Store[] = [];

// Collect every store when it’s created
pinia.use(({ store }) => {
  stores.push(store);
});

// Helper to reset all stores
export function resetAllStores() {
  for (const store of stores) {
    if (typeof store.$reset === "function") {
      store.$reset();
    }
  }
}

export default pinia;
