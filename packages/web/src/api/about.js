import React from 'react'

import { meta } from './meta'

export const aboutMe = {
  title: `👁️‍🗨️ Who am I?`,
  text: `I develop web apps, command line tools, mobile apps and games! ☕`,
  questions: [
    {
      question: ` My Resume 📄`,
      answer: (
        <>
          I have my resume, hosted on{' '}
          <a
            href="https://github.com/KumarAbhirup/resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            this GitHub repository
          </a>
          . It is always updated and you may also see the previous versions of
          it in the Git Commit Log.
        </>
      ),
    },
    {
      question: ` What are my everyday tools? 🤔`,
      answer: (
        <>
          Visit <a href={`${meta.domain}/uses`}>kumar.now.sh/uses</a>&nbsp;to
          get an insight of what dev tools, browser, terminal, apps and
          softwares I use.
        </>
      ),
    },
    {
      question: ` What have I built till date? 🚀`,
      answer: (
        <>
          Visit <a href={`${meta.domain}/portfolio`}>kumar.now.sh/portfolio</a>{' '}
          to check out all my projects.&nbsp;😄
        </>
      ),
    },
    {
      question: ` Where do I write? ✍`,
      answer: (
        <>
          I currently write my Web and React Development related posts on{' '}
          <a
            href="https://dev.to/kumar_abhirup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DEV
          </a>{' '}
          and I also republish them on{' '}
          <a
            href="https://medium.com/@kumar_abhirup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
          . I used to write on{' '}
          <a
            href="https://iqubex.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            IQubex.com
          </a>
          , so you may get to read what I have written, there too!
        </>
      ),
    },
  ],
  image: meta.image,
}
