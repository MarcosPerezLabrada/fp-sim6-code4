const { defineConfig } = require("cypress")
require('dotenv').config()

module.exports = defineConfig({
  env: {
    googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_SECRET,
  },
  e2e: {
    baseUrl: "http://localhost:3000/"
  },
  viewportWidth: 1100,
  viewportHeight: 800,
  requestTimeout: 3000,
  responseTimeout: 3000,
  defaultCommandTimeout: 3000,
  video: false,
  retries: 0
})



