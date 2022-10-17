/* eslint-env node */
"use strict";

module.exports = function (environment) {
  let ENV = {
    modulePrefix: "fly-n-site-ui",
    environment,
    rootURL: "/",
    locationType: "history",
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV["ember-google-maps"] = {
      key: "AIzaSyCXNGgvV817p5J82ZatEHeYJl0YJ3yzFnE", // Using .env files in this example
      language: "en",
      region: "US",
      protocol: "https",
      version: "3.49",
      libraries: ["geometry"],
      // client: undefined,
      // channel: undefined,
      // baseUrl: '//maps.googleapis.com/maps/api/js'
    };
    ENV.APP["fly-n-site"] = {
      defaultLatitude: 37.5,
      defaultLongitude: -117.0,
    };
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
  }

  if (environment === "production") {
    // Production variables
  }

  return ENV;
};
