import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    local_url: 'http://localhost:5173',
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
