import React from 'react'

export const META = {
  title: 'Kumar Abhirup',
  name: 'Kumar Abhirup',
  fname: 'Kumar',
  lname: 'Abhirup',
  website: 'https://kumar.now.sh',
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
  thumbnail: 'https://i.ibb.co/k5cMnNm/default.jpg', // 'https://i.ibb.co/MPWCPr1/Kumar-Abhirup.jpg'
  pageOgs: {
    uses: 'https://i.ibb.co/9t04yDL/uses.jpg',
  },
  email: 'kumarabhirup5@gmail.com',
  resume:
    'https://github.com/KumarAbhirup/resume/blob/master/Kumar%20Abhirup%20CV.pdf',
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
}
