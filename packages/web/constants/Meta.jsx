import React from 'react'
import Link from 'next/link'
import { META } from './metadata'

export const ELEMENTS = {
  mainText: (
    <>
      Essays <span className="amp">&</span> Writings
    </>
  ),
  about: (
    <>
      I founded my first company (Beam Community, Inc.) when I was 16, and
      successfully exited after running it for two years.
      <br />
      <br />I am a 21yo Founder and Engineer, having built many projects in
      past, I am on a path aiming to solve humanities' most pressing issues, in
      an iterative fashion, starting from most trivial things imaginable.
      {/* <br />
      <br />
      Led a hackathon team in Korea Blockchain Week in August 2022, and won 2nd
      place at two hackathons for{' '}
      <a
        href="https://judiciaryapp.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        judiciary.app
      </a>
      , spent three months in{' '}
      <a
        href="https://nonce.community"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nonce Korea hackerhouse
      </a>{' '}
      in Seoul, South Korea. I am in the evergreen process of learning, and I am
      loving it! */}
      <br />
      <br />— Co-founder of{' '}
      <a href="https://merse.co" target="_blank" rel="noopener noreferrer">
        Merse.co (YC S24)
      </a>{' '}
      (
      <a
        href="https://www.businessinsider.com/promising-creator-economy-influencer-marketing-startups-per-top-vcs-2024-10"
        target="_blank"
        rel="noopener noreferrer"
      >
        Business Insider
      </a>
      )
      <br />— Previously building{' '}
      <a
        href="https://techcrunch.com/2024/04/13/airchat-launch/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Airchat (acquired)
      </a>{' '}
      with <a href="https://twitter.com/naval">Naval</a>.
      <br />— Founder{' '}
      <a href="https://itsbeam.com" target="_blank" rel="noopener noreferrer">
        itsbeam.com
      </a>{' '}
      (acquired)
      <br />— Recipient of{' '}
      <a
        href="https://www.extraordinary.club"
        target="_blank"
        rel="noopener noreferrer"
      >
        The O1 Visa
      </a>{' '}
      🇺🇸
      <br />—{' '}
      <a
        href="https://nonce.community"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nonce Korea
      </a>{' '}
      2022 Fellow
      <br />— Alumni of{' '}
      <a
        href="https://livetheresidency.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        The First Residency Cohort
      </a>{' '}
      in Berkeley, CA
      <br />— EthSeoul Hackathon 2022, Public Goods Track Winner
      {/* <br />— Granted $5k by{' '}
      <a
        href="https://twitter.com/founderspodcast?lang=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        David Senra
      </a>{' '}
      of Founders Podcast, to go to the major{' '}
      <a
        href="https://www.foundersonly.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        FoundersOnly
      </a>{' '}
      conference in Austin, Texas. */}
      <br />
      <br />I write{' '}
      <Link href="/writings" target="_blank" rel="noopener noreferrer">
        here
      </Link>
      .
      <br />
      {/* <br />
      <br />
      Currently, Software Engineer at{' '}
      <a
        href="https://getairchat.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Airchat
      </a>{' '}
      ⚒️ */}
      <br />
      <br />
      <a href={`mailto:${META.email}`}>{META.email}</a>﹒{' '}
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a
        href={`https://twitter.com/${META.social.twitter}`}
        target="_blank"
        rel="noopener"
      >
        Twitter
      </a>
    </>
  ),
  belowArticle: `
---

# Author

I am Kumar Abhirup, a 21yo Founder and Engineer, having built many projects in past, I am on a path aiming to solve humanities' most pressing issues, in an iterative fashion, starting from most trivial things imaginable. To connect, you may DM me on [twitter](https://kumareth.com/twitter).

_Like what I write? [Subscribe to **my newsletter**](https://kumareth.com/subscribe)._
  `,
}
