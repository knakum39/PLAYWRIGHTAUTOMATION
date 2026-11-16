// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
//Here config is a javascript object that have key-vlaue pair
const config = ({
  testDir: './tests',
  timeout: 30*1000,
  expect: {
    timeout: 5 * 1000,
  },
  reporter: 'html',
    
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot : 'on',
    video : 'off',
    trace : 'retain-on-failure', //Read trace logs while debugging


//By default, playwright test run in headless mode
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

  },

});

module.exports = config