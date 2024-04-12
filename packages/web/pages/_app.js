import Head from 'next/head'
import { useRouter } from 'next/router'

import { META } from '../constants/metadata'

import '../styles/base.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const og = pageProps.data?.og
  const title = pageProps.data?.title

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta
          name="description"
          content={og ? og.description : META.description}
        />
        <meta name="copyright" content={META.name} />
        <meta name="robots" content="index,follow" />
        <meta name="author" content={`${META.name}, ${META.email}`} />
        <meta
          name="url"
          content={`${META.website}${
            router.asPath?.length ? `/${router.asPath}` : ''
          }`}
        />
        <meta
          name="identifier-URL"
          content={`${META.website}${
            router.asPath?.length ? `/${router.asPath}` : ''
          }`}
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />

        <meta property="og:title" content={title || META.title} />
        <meta
          property="og:description"
          content={og ? og.description : META.description}
        />
        <meta property="og:site_name" content={META.title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${META.website}${
            router.asPath?.length ? `/${router.asPath}` : ''
          }`}
        />
        <meta property="og:image" content={og ? og.image : META.thumbnail} />

        <meta name="twitter:title" content={title || META.title} />
        <meta
          name="twitter:description"
          content={og ? og.description : META.description}
        />
        <meta name="twitter:image" content={og ? og.image : META.thumbnail} />
        <meta name="twitter:image:alt" content={title || META.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@${META.social.twitter}`} />
        <meta name="twitter:creator" content={`@${META.social.twitter}`} />

        <script async src="https://platform.twitter.com/widgets.js"></script>

        <title>{title || META.title}</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kode+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
