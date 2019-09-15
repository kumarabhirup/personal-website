import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import '../sass/index.sass'

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Next.js on Now</title>
      </Head>
      <h1>Next.js on Now</h1>
      <h2>
        Developed & Deployed with{' '}
        <a
          href="https://zeit.co/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          ZEIT Now
        </a>
      </h2>
      <Link href="/post/[pid]" as="/post/test">
        <a>Test post</a>
      </Link>
    </main>
  )
}
