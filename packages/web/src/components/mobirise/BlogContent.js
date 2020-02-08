/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React from 'react'
import Markdown from 'markdown-to-jsx'

export default function BlogContent({ error, ...props }) {
  const { content, excerpt, data } = props.data

  return (
    <section
      className="progress-bars3 cid-rezDHMdky7"
      id="progress-bars3-j"
      data-rv-view="234"
    >
      <div className="container">
        {error ? <h1>Error 404.</h1> : <Markdown>{content}</Markdown>}
      </div>
    </section>
  )
}
