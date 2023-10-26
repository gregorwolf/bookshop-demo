module.exports = function (config) {
  'use strict'

  config.set({
    frameworks: ['ui5'],
    preprocessors: {
      'src/**/controls/*.js': ['coverage'],
      'src/**/libs/*.js': ['coverage']
    },
    coverageReporter: {
      includeAllSources: true,
      reporters: [
        {
          type: 'text'
        }
      ],
      check: {
        global: {
          statements: 0,
          branches: 0,
          functions: 0,
          lines: 0
        }
      }
    },
    reporters: ['progress', 'coverage'],

    browsers: ['FirefoxHeadless'],

    browserConsoleLogOptions: {
      level: 'error'
    },

    singleRun: true
  })
}
