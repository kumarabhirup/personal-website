import React from 'react'
import matter from 'gray-matter'
import Link from 'next/link'
import { Row, Col } from 'react-flexbox-grid'

import Layout from '../components/Layout'
import { META } from '../constants/metadata'

export function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const today = new Date(date)

  return today.toLocaleDateString('en-US', options)
}

function Homepage({ writings, og }) {
  return (
    <>
      <Layout isHomepage>
        <Row>
          {writings.map(({ document, slug }) => {
            const {
              data: {
                title,
                date,
                og: { image },
              },
            } = document

            return (
              <Col md={6} key={slug}>
                <div className="writing-row" key={title}>
                  <Row>
                    <Col md={12}>
                      <div className="writing-date">{formatDate(date)}</div>
                    </Col>

                    {image && (
                      <Col md={12}>
                        <Link href="/writings/[slug]" as={`/writings/${slug}`}>
                          <a>
                            <img
                              className="nice writings"
                              src={image}
                              alt={title}
                              loading="lazy"
                            />
                          </a>
                        </Link>
                      </Col>
                    )}

                    <Col md={12}>
                      <Link href="/writings/[slug]" as={`/writings/${slug}`}>
                        <a>
                          <span className="writing-title">{title}</span>
                        </a>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Col>
            )
          })}
        </Row>
      </Layout>
    </>
  )
}

Homepage.getInitialProps = async context => {
  // eslint-disable-next-line no-shadow
  const writings = (context => {
    const keys = context.keys()
    const values = keys.map(context)
    const data = keys.map((key, index) => {
      const slug = key
        // eslint-disable-next-line no-useless-escape
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      const document = matter(value.default)
      return { document, slug }
    })

    return data
      .slice()
      .sort(
        (a, b) =>
          new Date(b.document.data.date) - new Date(a.document.data.date)
      )
      .filter(
        post =>
          post.document.data.isDraft === undefined ||
          post.document.data.isDraft === false ||
          post.document.data.isDraft === null
      )
  })(require.context('../writings', true, /\.md$/))

  return {
    writings,
    data: {
      title: 'Kumar Abhirup Essays',
      og: {
        image: META.pageOgs.writings,
      },
    },
  }
}
export default Homepage
