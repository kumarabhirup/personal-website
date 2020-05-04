import React, { useState, useEffect } from 'react'
import simpleIcons from 'simple-icons'
import { Row, Col } from 'react-flexbox-grid'
import dynamic from 'next/dynamic'
import { config } from 'react-spring'

import Layout from '../components/Layout'
import { META, ELEMENTS } from '../constants/Meta'
import { TECH, SKILLS, SOCIAL, PROJECTS } from '../constants/Stack'

const TextTransition = dynamic(() => import('react-text-transition'), {
  ssr: false,
})

const Icon = ({ stack, style }) => {
  const icon = simpleIcons.get(stack)

  return (
    <div
      data-icon={stack}
      style={{
        fill: `#${icon.hex}`,
        display: 'inline-block',
        width: '50px',
        margin: '0 auto',
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  )
}

function About() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(
      // eslint-disable-next-line no-shadow
      () => setIndex(index => index + 1),
      3000 // every 3 seconds
    )
  }, [])

  return (
    <>
      <Layout secondaryPage>
        <div style={{ marginTop: 50 }}>
          <h1 className="about-h1">
            {META.fname}{' '}
            <TextTransition
              text={SKILLS[index % SKILLS.length]}
              springConfig={config.gentle}
              style={{ display: 'inline-block' }}
            />
          </h1>

          <div className="about-intro">
            <Row>
              <Col md={12}>{ELEMENTS.about}</Col>
            </Row>
            <hr />
            <>
              <h3>{TECH.title}</h3>
              <Row style={{ marginTop: 30 }}>
                {TECH.data.map(s => (
                  <Col
                    md={2}
                    xs={4}
                    key={s}
                    style={{ textAlign: 'center', marginBottom: 40 }}
                  >
                    <Icon stack={s} />
                    <div className="stack-name">{s}</div>
                  </Col>
                ))}
              </Row>
            </>
            <br />
            <>
              <h3>{PROJECTS.title}</h3>
              <Row style={{ marginTop: 30 }}>
                <ul
                  className="uses-list"
                  style={{ marginTop: '0px', marginBottom: '0px' }}
                >
                  {PROJECTS.data.map(({ image, name, description, link }) => (
                    <div key={link}>
                      <img
                        src={image}
                        alt={`Project - ${name}`}
                        style={{
                          width: '200px',
                          marginLeft: '10px',
                        }}
                      />
                      <li key={name}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                        >
                          {name}
                        </a>
                        <br />
                        <br />
                        <span className="darker">{description}</span>
                      </li>
                      <hr />
                    </div>
                  ))}
                </ul>
              </Row>
            </>
            <br />
            <>
              <h3>{SOCIAL.title}</h3>
              <Row style={{ marginTop: 30 }}>
                {SOCIAL.data.map(s => (
                  <Col
                    md={2}
                    xs={4}
                    key={s.link}
                    style={{ textAlign: 'center', marginBottom: 40 }}
                  >
                    <Icon stack={s.platform} />
                    <div className="stack-name">
                      <a
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {s.platform}
                      </a>
                    </div>
                  </Col>
                ))}
              </Row>
            </>
            <hr />
            Follow me on{' '}
            <a
              href={`https://twitter.com/${META.social.twitter}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Twitter
            </a>
            . That's where I usually hangout.
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About
