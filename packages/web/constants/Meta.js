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
    youtube: 'c/IQubex',
    dev: 'kumar_abhirup',
    facebook: 'krish.abhirup',
    tinyletter: 'kumar_abhirup',
    twitch: 'kumar_abhirup',
  },
  description:
    'Kumar is a Full-Stack JavaScript Developer from India who builds new stuff. Say hi 👋 to him!',
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
  discordLink: 'https://discord.gg/uS2qkhe',
}

export const ELEMENTS = {
  mainText: (
    <>
      Kumar <span className="amp">&</span> Thoughts
    </>
  ),
  about: (
    <>
      I am a Full-Stack JavaScript Developer from India 🇮🇳 who loves to code and
      create cool projects. I am specialized in building full stack applications
      that use React in frontend and Node.js, GraphQL in the backend.
      <br />
      <br />
      I am in the evergreen process of learning, and I am loving it!
      <br />
      <br />
      <a href={`mailto:${META.email}`}>{META.email}</a> ﹒{' '}
      <a href={`${META.resume}`} target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </>
  ),
  belowArticle: `
---

# 🏆 About me

I am **Kumar Abhirup, a 16-year-old JavaScript React developer** from India who keeps learning a new thing every single day.

- [Connect with me on Twitter 🐦](https://twitter.com/kumar_abhirup)

_Love what I write? [Subscribe to **Kumar&Thoughts**](https://kumarabhirup.me/subscribe) and stay updated about the tech community, me and coding in general._
  `,
}
