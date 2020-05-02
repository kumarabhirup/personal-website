import Head from 'next/head'

import { META } from '../constants/Meta'

import '../styles/base.css'

function MyApp({ Component, pageProps }) {
  const og = pageProps.data?.og
  const title = pageProps.data?.title

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="og:title" content={title || META.title} />
        <meta property="og:site_name" content={META.title} />
        <meta
          property="og:description"
          content={og ? og.description : META.description}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@${META.social.twitter}`} />
        <meta property="og:image" content={og ? og.image : META.avatar} />

        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>

        <title>{title || META.title}</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
