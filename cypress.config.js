const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'ndtjkb',
  "record": true,
  "key": "257e20be-3e74-4e3c-a987-9f73ab18848b",
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('cypress-allure-plugin')(on, config);
      allureWriter(on, config);
      return config;
    },
  },
});
