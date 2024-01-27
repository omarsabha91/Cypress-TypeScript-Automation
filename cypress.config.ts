import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://seller.stocksmaze.com/',
    specPattern: 'cypress/integration/stocksMazeSeller/Tests/*.ts',
    setupNodeEvents(on, config) {

    },
  },
});
