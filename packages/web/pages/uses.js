import React from 'react'

import Layout from '../components/Layout'
import { USES } from '../constants/Uses'
import { META } from '../constants/metadata'

function Uses({ og }) {
  return (
    <>
      <Layout secondaryPage>
        <h1 className="uses-h1">What I use</h1>
        <div className="uses-intro">
          I use a lot of stuff everyday. Softwares, gears, setup and so much
          more!
        </div>
        {USES.map(({ title, stack }) => (
          <ul className="uses-list" key={title}>
            <li className="head">{title}</li>

            {stack.map(({ name, description, link }) => (
              <li key={name}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {name}
                </a>
                <span>{description}</span>
              </li>
            ))}
          </ul>
        ))}
        <div className="uses-intro">
          This page is regularly updated. If there's anything you feel I forgot
          to write on this page, you can DM me on{' '}
          <a
            href={`https://twitter.com/${META.social.twitter}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Twitter
          </a>
          .
        </div>
      </Layout>
    </>
  )
}

Uses.getInitialProps = () => ({
  data: {
    title: `Things Kumar uses`,
    og: {
      description: `Here's a list of everything that ${META.fname} ${META.lname} uses!`,
      image: META.pageOgs.uses,
    },
  },
})

export default Uses
