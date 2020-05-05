import React, { useState, useEffect } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Sun, Moon } from 'react-feather'
import Link from 'next/link'

import { ELEMENTS, META } from '../constants/Meta'

const menu = [
  {
    path: '/',
    name: 'start',
  },
  {
    path: '/writings',
    name: 'blog',
  },
  {
    path: '/uses',
    name: 'uses',
  },
]

function Layout({ children, isHomepage, secondaryPage, noHead = false }) {
  const onLoadTheme =
    typeof localStorage !== 'undefined' && localStorage.getItem('BLOG_THEME')

  const [theme, setTheme] = useState(onLoadTheme)

  const [mounted, setMounted] = useState(false)

  const switchTheme = () => {
    const setTo = theme === 'dark' ? 'light' : 'dark'

    setTheme(setTo)
  }

  useEffect(() => {
    // if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //   setTheme('dark')
    // }

    setMounted(true)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    localStorage.setItem('BLOG_THEME', theme)
  }, [theme])

  const containerProps = {
    ...(isHomepage && { md: 12 }),
    ...(!isHomepage && { md: 8, mdOffset: 2 }),
  }

  if (!mounted) return <div />

  return (
    <>
      <img
        className="about-avatar"
        src={`https://images.weserv.nl/?url=https://unavatar.now.sh/twitter/${META.social.twitter}`}
        alt="Avatar"
      />
      <div className="top-menu">
        <Row>
          <Col xs={6}>
            <ul>
              {menu.map(({ path, name }) => (
                <li key={name}>
                  <Link href={path} as={path}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={6} style={{ textAlign: 'right' }}>
            <button
              type="button"
              className="theme-switch-button"
              onClick={() => switchTheme()}
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
          </Col>
        </Row>
      </div>

      <Grid>
        <Row>
          <Col {...containerProps}>
            {!secondaryPage && (
              <h1
                className="blog-title"
                style={isHomepage && { textAlign: 'left' }}
              >
                {ELEMENTS.mainText}
              </h1>
            )}

            {children}
          </Col>
        </Row>
      </Grid>

      <footer>
        Code hosted on{' '}
        <a
          href={`https://github.com/${META.social.github}/personal-website`}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          GitHub
        </a>{' '}
        😎
      </footer>
    </>
  )
}

export default Layout
