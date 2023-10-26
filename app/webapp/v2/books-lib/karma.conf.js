module.exports = function (config) {
  "use strict";

  config.set({
    frameworks: ["ui5"],
    preprocessors: {
      "src/**/controls/*.js": ["coverage"],
      "src/**/libs/*.js": ["coverage"],
    },
    coverageReporter: {
      includeAllSources: true,
      reporters: [
        {
          type: "text",
        },
      ],
      check: {
        global: {
          statements: 0,
          branches: 0,
          functions: 0,
          lines: 0,
        },
      },
    },
    reporters: ["progress", "coverage"],

    browsers: ["FirefoxDebugging"],

    browserConsoleLogOptions: {
      level: "error",
    },

    customLaunchers: {
      ChromeDebugging: {
        base: "Chrome",
        flags: ["--remote-debugging-port=9333"],
      },
      FirefoxDebugging: {
        base: "FirefoxHeadless",
        flags: ["--start-debugger-server 9333"],
      },
    },

    singleRun: true,
  });
};
