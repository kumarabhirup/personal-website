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

        <meta name="description" content={meta.meta_description} />
        <meta name="copyright" content={meta.name} />
        <meta name="robots" content="index,follow" />
        <meta name="author" content={`${meta.name}, ${meta.email}`} />
        <meta name="url" content={meta.website} />
        <meta name="identifier-URL" content={meta.website} />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />

        <meta property="og:title" content={meta.meta_ogTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.website} />
        <meta property="og:image" content={meta.image} />

        <meta name="twitter:title" content={meta.meta_ogTitle} />
        <meta name="twitter:description" content={meta.meta_description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:image:alt" content={meta.meta_ogTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@${meta.twitter}`} />
        <meta name="twitter:creator" content={`@${meta.twitter}`} />
      </Head>
    )
  }
}
