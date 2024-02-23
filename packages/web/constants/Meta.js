import React from 'react'
import { META } from './metadata'

export const ELEMENTS = {
  mainText: (
    <>
      Essays <span className="amp">&</span> Writings
    </>
  ),
  about: (
    <>
      I founded my first company (Beam Community, Inc.) when I was 16, <br />
      and successfully exited after running it for two years.
      <br />
      <br />
      I am a 20yo Serial Founder & a Software Engineer, having built many
      projects in past, I am on a path aiming to solve humanities' most pressing
      issues, in an iterative fashion, starting from most trivial things
      imaginable.
      <br />
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
      loving it!
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

# 🏆 About me

I am Kumar Abhirup, a 20yo Serial Founder and a Software Engineer, having built many projects in past, I am on a path aiming to solve humanities' most pressing issues, in an iterative fashion, starting from most trivial things imaginable. <br /> To connect, you may DM me on [twitter](https://kumareth.com/twitter).

_Love what I write? [Subscribe to **my newsletter**](https://kumareth.com/subscribe) and stay updated about my content in general, lol._
  `,
}
