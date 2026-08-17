const { defineConfig } = require("cypress");
require("dotenv").config();
module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    baseUrl: process.env.CYPRESS_BASEURL,

    env: {
      USERNAME: process.env.CYPRESS_USERNAME,
      PASSWORD: process.env.CYPRESS_PASSWORD
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
