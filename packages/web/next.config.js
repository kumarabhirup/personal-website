require('dotenv').config()
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  target: 'serverless',
  env: {
    RECAPTCHA_CLIENT_KEY: process.env.RECAPTCHA_CLIENT_KEY,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    APILAYER_KEY: process.env.APILAYER_KEY,
    KUMAR_BACKEND_URL: process.env.KUMAR_BACKEND_URL,
  },
  cssModules: true,
})
