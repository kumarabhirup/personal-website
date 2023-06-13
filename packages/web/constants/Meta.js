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
      I am a Full-Stack JavaScript Developer who loves to code and create cool
      projects. I am specialized in building full stack applications that use
      React in frontend and Node.js, GraphQL in the backend.
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
      </a>{' '}
      Currently working with a stealth Web3 + AI Startup, remotely from India.
      <br />
      <br />
      <a href={`mailto:${META.email}`}>{META.email}</a> ﹒{' '}
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
//       <a href={`${META.resume}`} target="_blank" rel="noopener">
//         Resume
//       </a>
    </>
  ),
  belowArticle: `
---

# 🏆 About me

I am **Kumar Abhirup, a 19-year-old Software Developer**, founder of [Beam](https://itsbeam.com). Currently working as a Software Engineer at a stealth startup. <br /> To connect, you may DM me on [twitter](https://kumareth.com/twitter).

_Love what I write? [Subscribe to **my newsletter**](https://kumareth.com/subscribe) and stay updated about my content in general, lol._
  `,
}
