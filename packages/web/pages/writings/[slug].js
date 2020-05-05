/* eslint-disable react/destructuring-assignment */

import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import ProgressBar from 'react-scroll-progress-bar'

import { META, ELEMENTS } from '../../constants/Meta'
import Layout from '../../components/Layout'
import CodeBlock from '../../components/CodeBlock'
import Subscribe from '../../components/Subscribe'

function Writing({ content, data, slug }) {
  const frontmatter = data
  const { title, author } = frontmatter

  const avatar = `https://images.weserv.nl/?url=https://unavatar.now.sh/twitter/${author.twitter}&w=40`

  return (
    <>
      <div className="writing-progress">
        <ProgressBar height="5px" />
      </div>

      <Layout secondaryPage noHead>
        <div style={{ marginTop: 50 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link href="/" as="/">
              <a className="back-button">⏪ back</a>
            </Link>

            <a
              className="back-button"
              href={`https://github.com/${META.githubUrl}/edit/master/packages/web/writings/${slug}.md`}
              target="_blank"
              rel="noreferrer noopener"
            >
              edit this article 📝
            </a>
          </div>

          <h1 className="writing-title-h1">{title}</h1>

          <div className="author">
            <a
              href={`https://twitter.com/${author.twitter}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img src={avatar} alt="Avatar" />
              {author.name}
            </a>
          </div>

          <div className="writing-container">
            <div className="twitter-follow">
              Make sure you follow me on{' '}
              <a
                href={`https://twitter.com/${META.social.twitter}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Twitter
              </a>
              , that's where I usually hang out ✌️
            </div>

            <br />
            <br />

            <ReactMarkdown
              source={`${content}${ELEMENTS.belowArticle}`}
              escapeHtml={false}
              renderers={{
                code: CodeBlock,

                // eslint-disable-next-line react/display-name
                link: props => {
                  if (!props.href.startsWith('http')) {
                    return props.href
                  }

                  return (
                    <a
                      href={props.href}
                      rel="nofollow noreferrer noopener"
                      target="_blank"
                    >
                      {props.children}
                    </a>
                  )
                },
              }}
            />

            <br />

            <div className="card">
              <Subscribe />
            </div>

            <br />
            <br />

            <div
              className="twitter-follow"
              style={{
                background:
                  'url("https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png")',
                backgroundSize: '90px',
                backgroundPosition: '105% 180%',
                backgroundRepeat: 'no-repeat',
              }}
            >
              Chat with me and my friends at{' '}
              <a
                href="https://discord.gg/Ub9WWU4"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Kumar on Discord
              </a>
              . It's a fun community of learners, that I am building ✌️
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

Writing.getInitialProps = async context => {
  const { slug } = context.query
  const content = await import(`../../writings/${slug}.md`)
  const data = matter(content.default)

  return { ...data, slug }
}

export default Writing
