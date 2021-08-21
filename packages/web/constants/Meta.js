import React from 'react'

export const META = {
  title: 'Kumar Abhirup',
  name: 'Kumar Abhirup',
  fname: 'Kumar',
  lname: 'Abhirup',
  website: 'https://kumarabhirup.me',
  social: {
    twitter: 'kumar_abhirup',
    linkedin: 'kumar-abhirup',
    github: 'KumarAbhirup',
    youtube: 'c/kumarabhirupz',
    dev: 'kumar_abhirup',
    facebook: 'krish.abhirup',
    instagram: 'kumarzup',
    tinyletter: 'kumar_abhirup',
    twitch: 'kumar_abhirup',
  },
  description:
    'Kumar is a Full-Stack JavaScript Developer from India who builds new stuff. Founder @ Beam. Say hi 👋 to him!',
  thumbnail: 'https://i.ibb.co/D7PL6kG/Kumar-Abhirup.jpg', // 'https://i.ibb.co/MPWCPr1/Kumar-Abhirup.jpg'
  pageOgs: {
    uses: 'https://i.ibb.co/dMmq8Vx/Kumar-Uses.jpg',
    writings: 'https://i.ibb.co/zPyzXxF/Kumar-Blog.jpg',
    subscribe: 'https://i.ibb.co/F5CGf8X/Subscribe-Kumar.jpg',
    live: 'https://i.ibb.co/6bjVnJp/Kumar-Join-Live-Stream.jpg',
  },
  email: 'hello@kumarabhirup.me',
  resume:
    'https://github.com/KumarAbhirup/resume/blob/master/Kumar%20Abhirup%20CV.pdf',
  githubUrl: 'KumarAbhirup/personal-website',
  discordLink: 'https://discord.gg/CCjJ2Ndh4S',
}

export const ELEMENTS = {
  mainText: (
    <>
      Essays <span className="amp">&</span> Writings
    </>
  ),
  about: (
    <>
      I am a Full-Stack JavaScript Developer who loves to code and create cool
      projects. I am specialized in building full stack applications that use
      React in frontend and Node.js, GraphQL in the backend.
      <br />
      <br />I am in the evergreen process of learning, and I am loving it!
      <br />
      Currently running{' '}
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href="https://propagate.at" target="_blank" rel="noopener">
        Beam, the Substack for SMS.
      </a>
      <br />
      <br />
      <a href={`mailto:${META.email}`}>{META.email}</a> ﹒{' '}
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href={`${META.resume}`} target="_blank" rel="noopener">
        Resume
      </a>
    </>
  ),
  belowArticle: `
---

# 🏆 About me

I am **Kumar Abhirup, an 18-year-old Software Developer**, founder of [Beam](https://itsbeam.com). <br /> To connect, you may DM me on [twitter](https://twitter.com/kumar_abhirup).

_Love what I write? [Subscribe to **my newsletter**](https://kumarabhirup.me/subscribe) and stay updated about my content in general, lol._
  `,
}
