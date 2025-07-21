// playwright.config.js
require('dotenv').config();
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    headless: false,
    baseURL: 'https://www.bbc.co.uk',
    trace: 'retain-on-failure', 
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
   // { name: 'firefox', use: { browserName: 'firefox' } },
    //{ name: 'webkit', use: { browserName: 'webkit' } },
  ],
});
