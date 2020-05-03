import React from 'react'

export const META = {
  title: 'Kumar Abhirup',
  name: 'Kumar Abhirup',
  fname: 'Kumar',
  lname: 'Abhirup',
  social: {
    twitter: 'kumar_abhirup',
    linkedin: 'kumar-abhirup',
    github: 'KumarAbhirup',
    youtube: 'c/IQubex',
    dev: 'kumar_abhirup',
    facebook: 'krish.abhirup',
    tinyletter: 'kumar_abhirup',
  },
  description:
    'Writing about the tips I usually share on Twitter and some more.',
  avatar: 'https://telmo.im/og/default.png', // 'https://i.ibb.co/MPWCPr1/Kumar-Abhirup.jpg'
  pageOgs: {
    uses: 'https://telmo.im/og/uses.png',
  },
  email: 'kumarabhirup5@gmail.com',
}

export const ELEMENTS = {
  mainText: (
    <>
      Kumar, Kumar <span className="amp">&</span> Kumar
    </>
  ),
  about: (
    <>
      I am a Full-Stack JavaScript Developer from India 🇮🇳 who loved to code and
      create cool projects. I am specialized in building full stack applications
      that use React in frontend and Node.js, GraphQL in the backend.
      <br />
      <br />
      I am in the evergreen process of learning, and I am loving it!
      <br />
      <br />
      <a href={`mailto:${META.email}`}>{META.email}</a>
    </>
  ),
}
