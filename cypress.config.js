const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  require('cypress-mochawesome-reporter/plugin')(on);
  allureWriter(on, config);
  on('task', {downloadFile});
  on('task', {
    log(message) {
      console.log(message)
      return null
    },
  })
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    code: false,
    charts: true,
  },
  video : false,
  env: {
    env: 'dev'
  },
  e2e: {
    setupNodeEvents,
    //specPattern: 'cypress/e2e/BDD/*.feature'
  },

});
