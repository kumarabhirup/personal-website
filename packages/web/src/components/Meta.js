import React, { Component } from 'react'
import Head from 'next/head'
import ReactGA from 'react-ga'

import { meta } from '../api/meta'

export default class Meta extends Component {
  componentDidMount() {
    ReactGA.initialize(process.env.GA_TRACKING_ID)
  }

  render() {
    return (
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta name="og:title" property="og:title" content={meta.meta_ogTitle} />
        <meta name="description" content={meta.meta_description} />
        <meta name="author" content={meta.name} />
        <meta name="robots" content="index, follow" />

        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link rel="manifest" href="/static/manifest.json" />

        <title>{meta.title}</title>

        <link
          rel="stylesheet"
          href="/static/prebuilt/web/assets/mobirise-icons-bold/mobirise-icons-bold.css"
        />
        <link
          rel="stylesheet"
          href="/static/prebuilt/web/assets/mobirise-icons/mobirise-icons.css"
        />
        <link rel="stylesheet" href="/static/prebuilt/tether/tether.min.css" />
        <link
          rel="stylesheet"
          href="/static/prebuilt/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/static/prebuilt/bootstrap/css/bootstrap-grid.min.css"
        />
        <link
          rel="stylesheet"
          href="/static/prebuilt/bootstrap/css/bootstrap-reboot.min.css"
        />
        <link rel="stylesheet" href="/static/prebuilt/socicon/css/styles.css" />
        <link rel="stylesheet" href="/static/prebuilt/dropdown/css/style.css" />
        <link
          rel="stylesheet"
          href="/static/prebuilt/as-pie-progress/css/progress.min.css"
        />
        <link rel="stylesheet" href="/static/prebuilt/theme/css/style.css" />
        <link
          rel="stylesheet"
          href="/static/prebuilt/mobirise/css/mbr-additional.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="/static/styles/CircularProgressBar.css"
          type="text/css"
        />

        {/* <script src="https://www.google.com/recaptcha/api.js" async defer></script> */}
      </Head>
    )
  }
}
