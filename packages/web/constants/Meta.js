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
      I am a 19yo Software Engineer, having built many projects in past, I am on
      a path aiming to solve humanities' most pressing issues, in an iterative
      fashion, starting from most trivial things imaginable.
      <br />
      <br />
      Led a hackathon team in Korea Blockchain Week in August 2022, and won 2nd
      place at two hackathons for{' '}
      <a href="https://judiciary.app" target="_blank" rel="noopener noreferrer">
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
      <br />
      <br />
      Formerly worked as a{' '}
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href="https://serendipity.lol" target="_blank" rel="noopener">
        Software Engineer at Serendipity.
      </a>
      <br />
      Currently, Building{' '}
      <a
        href="https://deva.me/creators"
        target="_blank"
        rel="noopener noreferrer"
      >
        Deva.me
      </a>{' '}
      ⚒️
      <br />
      <br />
      <a href={`mailto:${META.email}`}>{META.email}</a> ﹒{' '}
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      {/*
        <a href={`${META.resume}`} target="_blank" rel="noopener">
        Resume
        </a>
      */}
    </>
  ),
  belowArticle: `
---

# 🏆 About me

I am Kumar Abhirup, a 19yo Software Engineer, having built many projects in past, I am on a path aiming to solve humanities' most pressing issues, in an iterative fashion, starting from most trivial things imaginable. <br /> To connect, you may DM me on [twitter](https://kumareth.com/twitter).

_Love what I write? [Subscribe to **my newsletter**](https://kumareth.com/subscribe) and stay updated about my content in general, lol._
  `,
}
