const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:3000'
  },
  webServer: {
    command: 'npm run start -- --port 3000',
    port: 3000,
    reuseExistingServer: !process.env.CI
  }
});
