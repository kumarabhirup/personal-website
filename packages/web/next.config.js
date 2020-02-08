require('dotenv').config()

const withSass = require('@zeit/next-sass')
const withMDX = require('@next/mdx')()

module.exports = withMDX(
  withSass({
    target: 'serverless',
    env: {
      RECAPTCHA_CLIENT_KEY: process.env.RECAPTCHA_CLIENT_KEY,
      GA_TRACKING_ID: process.env.GA_TRACKING_ID,
      APILAYER_KEY: process.env.APILAYER_KEY,
      KUMAR_BACKEND_URL: process.env.KUMAR_BACKEND_URL,
    },
    cssModules: true,
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty',
          net: 'empty',
          tls: 'empty',
        }
      }

      return {
        ...config,
        module: {
          ...config.module,
          rules: [
            ...config.module.rules,
            {
              test: /\.md$/,
              use: 'raw-loader',
            },
          ],
        },
      }
    },
  })
)
