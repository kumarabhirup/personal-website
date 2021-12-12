require('dotenv').config()

const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withTM = require('next-transpile-modules')
const { META } = require('./constants/metadata')

module.exports = withCSS(
  withSass(
    withTM({
      transpileModules: ['react-flexbox-grid', 'react-syntax-highlighter'],
      webpack(config, { isServer }) {
        if (isServer) {
          // eslint-disable-next-line global-require
          require('./scripts/generateSitemap')
        }

        config.module.rules.push({
          test: /\.md$/,
          use: 'raw-loader',
        })

        return config
      },
      target: 'serverless',
      env: {
        RECAPTCHA_CLIENT_KEY: process.env.RECAPTCHA_CLIENT_KEY,
        GA_TRACKING_ID: process.env.GA_TRACKING_ID,
        TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
        TWITCH_OAUTH_ID: process.env.TWITCH_OAUTH_ID,
        KUMAR_BACKEND_URL: process.env.KUMAR_BACKEND_URL,
      },
      async redirects() {
        return [
          {
            source: '/twitter',
            destination: `https://twitter.com/${META.social.twitter}`,
            permanent: true,
          },
          {
            source: '/linkedin',
            destination: `https://linkedin.com/in/${META.social.linkedin}`,
            permanent: true,
          },
          {
            source: '/instagram',
            destination: `https://instagram.com/${META.social.instagram}`,
            permanent: true,
          },
          {
            source: '/youtube',
            destination: `https://youtube.com/${META.social.youtube}`,
            permanent: true,
          },
          {
            source: '/github',
            destination: `https://github.com/${META.social.github}`,
            permanent: true,
          },
          {
            source: '/twitch',
            destination: `https://twitch.tv/${META.social.twitch}`,
            permanent: true,
          },
          {
            source: '/facebook',
            destination: `https://facebook.com/${META.social.facebook}`,
            permanent: true,
          },
          {
            source: '/resume',
            destination: `${META.resume}`,
            permanent: true,
          },
          {
            source: '/email/:body',
            destination: `mailto:${META.email}?body=:body`,
            permanent: true,
          },
          {
            source: '/email',
            destination: `mailto:${META.email}`,
            permanent: true,
          },
          {
            source: '/devto',
            destination: `https://dev.to/${META.social.dev}`,
            permanent: true,
          },
          {
            source: '/discord',
            destination: `${META.discordLink}`,
            permanent: true,
          },
          {
            source: '/schedule',
            destination: `https://calendly.com/kumareth/chat`,
            permanent: true,
          },
          {
            source: '/calendly',
            destination: `https://calendly.com/kumareth/chat`,
            permanent: true,
          },
        ]
      },
    })
  )
)
