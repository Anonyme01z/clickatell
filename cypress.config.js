const { defineConfig } = require("cypress");

// Remove the Allure import
// const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'ndtjkb',
  record: true,
  key: '257e20be-3e74-4e3c-a987-9f73ab18848b',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
      return config;
    },
  },
  reporter: 'cypress-mochawesome-reporter', // Using Mochawesome as the reporter
  reporterOptions: {
    reportDir: 'cypress/reports',  // Directory where the reports will be saved
    overwrite: false,               // Don't overwrite existing reports
    html: true,                     // Generate an HTML report
    json: true,                     // Generate a JSON report
  },
});
