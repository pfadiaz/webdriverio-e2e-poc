const merge = require("deepmerge");
const wdioConf = require("./main.conf");
const { generate } = require("multiple-cucumber-html-reporter");
const cucumberJson = require("wdio-cucumberjs-json-reporter").default;
const browserOptions = process.env.HEADLESS === "Yes" ? ["--headless"] : [];

exports.config = merge(wdioConf.config, {
  runner: "local",
  hostname: "localhost",
  port: 4444,
  path: "/wd/hub",
  exclude: [],
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 1,
  capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      browserName: "chrome",
      acceptInsecureCerts: true,
      "goog:chromeOptions": {
        args: [
          ...browserOptions,
          "--disable-gpu",
        ],
      },
    },
  ],
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ["selenium-standalone"],
  reporters: [
    "spec",
    "dot",
    [
      "cucumberjs-json",
      {
        jsonFolder: "./reports/cucumber",
        language: "en",
      },
    ],
  ],
    /**
     * Runs after a Cucumber step
     */
  afterStep: async function (uri,feature,{ error, result, duration, passed },stepData,context) {
    if (!passed) {
      cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    }
  },
  onComplete: async () => {
    //Generate the report when it all tests are done (for webkins)
    generate({
      jsonDir: "./reports/cucumber",
      reportPath: "./reports/cucumber",
    });
  },
});
