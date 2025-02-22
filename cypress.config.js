const { defineConfig } = require("cypress");
const { registerArgosTask } = require("@argos-ci/cypress/task");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    video: false,
    setupNodeEvents(on, config) {
      registerArgosTask(on, config, {
        // Enable upload to Argos only when it runs on CI.
        uploadToArgos: !!process.env.CI,
      });
    },
  },
});
