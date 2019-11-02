import React from 'react'
import getAge from 'get-age'

import { meta } from '../api/meta'

export const aboutMe = {
  title: `👁️‍🗨️ Who am I?`,
  text: `I develop web apps, simple command line tools and mobile apps ☕`,
  questions: [
    {
      question: ` Why do I code at the age of ${getAge('2003-11-13')}? 🖥️`,
      answer: (
        <>
          I started learning web development when I was 12.<br /> I have never looked back since then... 🙂<br />I love building and shipping stuffs. It's my hobby.<br />Here's <a href={`${meta.domain}/portfolio`}>what I shipped till date!</a>
        </>
      )
    },
    {
      question: ` What are your everyday tools? 🤔`,
      answer: (
        <>
          Visit <a href={`${meta.domain}/uses`}>kumar.now.sh/uses</a>&nbsp;to get an insight of what dev tools, browser, terminal, apps and softwares I use.
        </>
      )
    },
    {
      question: ` What have I built till date? 🚀`,
      answer: (
        <>
          Visit <a href={`${meta.domain}/portfolio`}>kumar.now.sh/portfolio</a> to check out all my projects.&nbsp;😄
        </>
      )
    },
    {
      question: ` My story 🏮`,
      answer: (
        <>
          I started out my coding journey with WordPress 🤟🏻 Here's <a href="https://heropress.com/essays/life-designed-wordpress/" target="_blank" rel="noopener noreferrer">my story</a> published on HeroPress. It's kinda old now, but I'll write another soon enough. 😅
        </>
      )
    }
  ],
  image: meta.image
}