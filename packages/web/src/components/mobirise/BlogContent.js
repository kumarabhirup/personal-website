/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React from 'react'
import Markdown from 'react-markdown/with-html'
import moment from 'moment'
import styled from 'styled-components'
import Head from 'next/head'

import { meta } from '../../api/meta'
import CodeBlock from '../CodeBlock'

const MarkdownStyles = styled.article`
  width: 800px;
  max-width: 90%;
  margin: 0px auto;

  *::selection {
    color: #000;
    background: yellow;
  }

  h1,
  h2,
  h3 {
    margin-top: 100px;
    margin-bottom: 50px;
    font-weight: 100;
    /* text-transform: uppercase; */
    color: #fe3366;
    font-style: italic;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 58px;
    line-height: 54px;
    text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
  }

  h4,
  h5,
  h6 {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media print {
    #markdownStyles *,
    #markdownStyles *:before,
    #markdownStyles *:after {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
      text-align: justify !important;
    }

    #markdownStyles a,
    #markdownStyles a:visited {
      text-decoration: underline;
    }

    #markdownStyles a[href]:after {
      content: ' (' attr(href) ')';
    }

    #markdownStyles abbr[title]:after {
      content: ' (' attr(title) ')';
    }

    #markdownStyles a[href^='#']:after,
    #markdownStyles a[href^='javascript:']:after {
      content: '';
    }

    #markdownStyles pre,
    #markdownStyles blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    #markdownStyles thead {
      display: table-header-group;
    }

    #markdownStyles tr,
    #markdownStyles img {
      page-break-inside: avoid;
    }

    #markdownStyles img {
      max-width: 100% !important;
    }

    #markdownStyles p,
    #markdownStyles h2,
    #markdownStyles h3 {
      orphans: 3;
      widows: 3;
    }

    #markdownStyles h2,
    #markdownStyles h3 {
      page-break-after: avoid;
    }
  }

  #markdownStyles {
    font-size: 12px;
  }

  @media screen and (min-width: 32rem) and (max-width: 48rem) {
    #markdownStyles {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 48rem) {
    #markdownStyles {
      font-size: 16px;
    }
  }

  #markdownStyles {
    line-height: 1.85;
  }

  #markdownStyles p,
  #markdownStyles .air-p {
    font-size: 1rem;
    margin-bottom: 1.3rem;
  }

  #markdownStyles h1,
  #markdownStyles .air-h1,
  #markdownStyles h2,
  #markdownStyles .air-h2,
  #markdownStyles h3,
  #markdownStyles .air-h3,
  #markdownStyles h4,
  #markdownStyles .air-h4 {
    margin: 1.414rem 0 0.5rem;
    font-weight: inherit;
    line-height: 1.42;
  }

  #markdownStyles h1,
  #markdownStyles .air-h1 {
    margin-top: 0;
    font-size: 3.998rem;
  }

  #markdownStyles h2,
  .air-h2 {
    font-size: 2.827rem;
  }

  #markdownStyles h3,
  .air-h3 {
    font-size: 1.999rem;
  }

  #markdownStyles h4,
  .air-h4 {
    font-size: 1.414rem;
  }

  #markdownStyles h5,
  .air-h5 {
    font-size: 1.121rem;
  }

  #markdownStyles h6,
  #markdownStyles .air-h6 {
    font-size: 0.88rem;
  }

  #markdownStyles small,
  #markdownStyles .air-small {
    font-size: 0.707em;
  }

  /* https://github.com/mrmrs/fluidity */

  #markdownStyles img,
  #markdownStyles canvas,
  #markdownStyles iframe,
  #markdownStyles video,
  #markdownStyles svg,
  #markdownStyles select,
  #markdownStyles textarea {
    max-width: 100%;
  }

  #markdownStyles {
    color: #444;
    font-family: 'Open Sans', Helvetica, sans-serif !important;
    font-weight: 300;
    font-size: 20px;
    margin: 6rem auto 1rem;
    max-width: 48rem;
    text-align: center !important;
  }

  img {
    margin: 20px auto;
  }

  a,
  a:visited {
    color: #3498db;
  }

  a:hover,
  a:focus,
  a:active {
    color: #2980b9;
  }

  blockquote {
    margin: 20px 0;
    border-left: 5px solid #fe3366;
    font-style: italic;
    padding: 1.33em;
    text-align: left !important;
  }

  ul,
  ol,
  li {
    text-align: left;
  }

  p {
    color: #555;
  }
`

export default function BlogContent({ error, ...props }) {
  const { content, excerpt, data } = props.data

  return (
    <section
      className="progress-bars3 cid-rezDHMdky7"
      id="progress-bars3-j blog"
      data-rv-view="234"
      style={{ background: '#fff' }}
    >
      <Head>
        <title>{data?.title} — Kumar Abhirup</title>

        <meta name="description" content={excerpt} />
        <meta name="url" content={`${meta.website}${props?.url}`} />
        <meta name="identifier-URL" content={`${meta.website}${props?.url}`} />
        <meta
          name="revised"
          content={moment(data?.date, 'MM/DD/YYYY, h:mm a').format(
            'dddd, MMM Do YYYY'
          )}
        ></meta>

        <meta property="og:title" content={`${data?.title} — Kumar Abhirup`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${meta.website}${props?.url}`} />
        <meta property="og:image" content={data?.featuredImage} />

        <meta name="twitter:title" content={`${data?.title} — Kumar Abhirup`} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:image" content={data?.featuredImage} />
        <meta
          name="twitter:image:alt"
          content={`${data?.title} — Kumar Abhirup`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="container">
        <center>
          <h3 style={{ color: '#1C2E36', opacity: 0.4 }}>
            {moment(data?.date, 'MM/DD/YYYY, h:mm a').format(
              'dddd, MMM Do YYYY'
            )}{' '}
            ∙ {moment(data?.date, 'MM/DD/YYYY, h:mm a').fromNow()}
          </h3>
          <hr />
        </center>
        <br />
        {error ? (
          <h1>Error 404.</h1>
        ) : (
          <MarkdownStyles id="markdownStyles" className="markdown-body">
            <center>
              <Markdown
                escapeHtml={false}
                source={content}
                renderers={{ code: CodeBlock }}
              />
            </center>
          </MarkdownStyles>
        )}
      </div>
    </section>
  )
}
