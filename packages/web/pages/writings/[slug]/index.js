/* eslint-disable react/destructuring-assignment */

import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import ProgressBar from 'react-scroll-progress-bar'
import readingTime from 'reading-time'

import { ELEMENTS } from '../../../constants/Meta'
import { META } from '../../../constants/metadata'
import Layout from '../../../components/Layout'
import CodeBlock from '../../../components/CodeBlock'
import Subscribe from '../../../components/Subscribe'
import { DiscordInviteBox } from '../../subscribe'
import { formatDate } from '../../writings'

function Writing({ content, data, slug }) {
  const frontmatter = data
  const { title, author, og, date } = frontmatter

  const imageTypeOnArticle =
    og?.imageTypeOnArticle === null || og?.imageTypeOnArticle === undefined
      ? 'LEADERBOARD'
      : og?.imageTypeOnArticle

  const avatar = `https://images.weserv.nl/?url=https://unavatar.io/twitter/${author.twitter}&w=40`

  return (
    <>
      <div className="writing-progress">
        <ProgressBar height="5px" />
      </div>

      {og.image &&
        !og?.noImageOnArticle &&
        imageTypeOnArticle === 'LEADERBOARD' && (
          <img className="writing-image featured" src={og.image} alt={title} />
        )}

      <Layout secondaryPage noHead>
        <div style={{ marginTop: 50 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link href="/" as="/">
              <a className="back-button">back</a>
            </Link>

            <a
              className="back-button"
              href={`https://github.com/${META.githubUrl}/edit/master/packages/web/writings/${slug}.md`}
              target="_blank"
              rel="noreferrer noopener"
            >
              edit this article
            </a>
          </div>

          {og.image &&
            !og?.noImageOnArticle &&
            imageTypeOnArticle === 'NORMAL' && (
              <>
                <br />
                <br />
                <br />
                <img className="nice" src={og.image} alt={title} />
              </>
            )}

          <h1 className="writing-title-h1">{title}</h1>

          <div className="author">
            <a
              href={`https://twitter.com/${author.twitter}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img src={avatar} alt="Avatar" />
              {author.name} &nbsp;🔥&nbsp; {formatDate(date)} &nbsp;🔥&nbsp;{' '}
              {Math.floor(readingTime(content).minutes) + 1} minute read
            </a>
          </div>

          <div className="writing-container">
            <ReactMarkdown
              source={`${content}${
                author.twitter === META.social.twitter
                  ? ELEMENTS.belowArticle
                  : ''
              }`}
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

            {/* <div className="card"> */}
            <Subscribe />
            {/* </div> */}

            <br />
            <br />

            <DiscordInviteBox />
          </div>
        </div>
      </Layout>
    </>
  )
}

Writing.getInitialProps = async context => {
  const { slug } = context.query
  const content = await import(`../../../writings/${slug}.md`)
  const data = matter(content.default)

  return { ...data, slug }
}

export default Writing
