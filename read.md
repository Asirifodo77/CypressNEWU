npm -i init
npm install cypress --save -dev

npx cypress open 

npx cypress run
npx cypress run --headed
npx cypress run --spec cypress/e2e/mytest.cy.js
npx cypress run --spec cypress/e2e/Doma/mytest.cy.js --browser chrome --headed

npx cypress run --browser chrome 
npx cypress run --browser chrome --headed

npx cypress run --spec "cypress/e2e/examples/actions.cy.js"
npx cypress run --spec "cypress/e2e/login/**/*"
npx cypress run --browser chrome --headed --spec "cypress/e2e/examples/actions.cy.js"

npx cypress run -e TAGS='@testtagone'
npx cypress run -e TAGS='@testtagone' --browser chrome --headed


--install xpath plugin
npm install -D cypress-xpath

--enviorment run
npx cypress run -e TAGS='@testtagone' --browser chrome --headed --env env=qa


-------------------------------------------------------------------------------------------------------
#idname
tagname#idname
.classname
tagname.classname ----div.product
tagname[attribute=value] --- div[class='product']
tagname tagname -- form div


--Assertions - Implicit
should,and (param : eq,include,contain,exist,have.length,have.value)
--Assertions - Explicit







---------------------------------------------------------------------------------------------------------
--Cucumber

1. Install cucumber : 
https://github.com/badeball/cypress-cucumber-preprocessor

npm install @badeball/cypress-cucumber-preprocessor
npm install @cypress/browserify-preprocessor


2. config.js

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/BDD/*.feature'
},


3. Install VS code cucumber plugin

4. The default configuration means that if you have a file cypress/e2e/xx.feature, it will match step definitions found in

cypress/e2e/xx/steps.js
cypress/e2e/xx.js
cypress/support/step_definitions/xx.js











-------------------------------------------------------------------------------------------------------
--Reporting

part 1 : mochawesome-reporter
https://www.npmjs.com/package/cypress-mochawesome-reporter

1. npm i --save-dev cypress-mochawesome-reporter

2. cypress.config.js

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});


3. Add to cypress/support/e2e.js

import 'cypress-mochawesome-reporter/register';

4. Custom options : 
https://github.com/adamgruber/mochawesome-report-generator#cli-flags

reporterOptions: {
    charts: true,
    code: false,
    reportTitle: 'XX',
    reportFilename: "XX",
    timestamp: "longDate"
  },



-----------------------------------------------------------------------------------------------

part 2 : Allure Report
https://github.com/Shelex/cypress-allure-plugin

1. Install : 
npm install -D @shelex/cypress-allure-plugin

2. cypress.config.js

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
        }
    }
});

3. e2e.js 
import '@shelex/cypress-allure-plugin';

4. To enable Allure results writing just pass 'environment variable allure=true', example:

npx cypress run --env allure=true
npx cypress run --spec 'cypress/e2e/BDD/*' --browser chrome --headed --env allure=true

5. Add Below scripts -> package.json

"scripts": {
    "allure:results": "allure generate allure-results --clean -o allure-report",
    "allure:report:open": "allure open allure-report"
  },

6. Run the test (Note to use '--env allure=true' >> If not allure-results will not generate)   

7. To generate allure-report > Run below : 

npm run allure:report:generate

(If any error here :> allure' is not recognized as an internal or external command, Run below : 
npm install -g allure-commandline --save-dev
)

8. To generate allure-report > Run below : 

npm run allure:report:open




------------------------------------------------------------------------------------------------------------

part 3 : html report

1. package.json
"cypress-cucumber-preprocessor": {
    "json": {
      "enabled": true,
      "output": "cypress/cucumberReports/results.json"
    }
  }

2. npm install multiple-cucumber-html-reporter --save -dev

3. create a file -> main folder : cucumber-html-report.js

and copy paste below
https://www.npmjs.com/package/multiple-cucumber-html-reporter

4. run this -> node cucumber-html-report.js --->>it will create the report


