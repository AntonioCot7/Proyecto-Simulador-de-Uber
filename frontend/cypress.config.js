import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "mtt98t",
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
});
