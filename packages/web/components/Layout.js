import React, { useState, useEffect } from 'react'
import simpleIcons from 'simple-icons'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Sun, Moon } from 'react-feather'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { ELEMENTS, META } from '../constants/Meta'

export const Icon = ({ stack, style }) => {
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

const menu = [
  {
    path: '/',
    name: 'start',
  },
  {
    path: '/writings',
    name: 'blog',
  },
  { path: META.discordLink, name: 'discord', newTab: true },
  {
    path: '/subscribe',
    name: 'subscribe',
  },
]

function Layout({
  children,
  isHomepage,
  secondaryPage,
  pageTitle,
  noColorModeChange,
  noHead = false,
}) {
  const router = useRouter()

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
          <Col className="menubar" xs={6}>
            <ul style={{ marginLeft: '5px', marginTop: '-2px' }}>
              {menu.map(({ path, name, newTab }) => (
                <li key={name}>
                  <Link href={path} as={path}>
                    <a target={newTab ? '_blank' : ''}>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col
            xs={6}
            style={{
              textAlign: 'right',
              marginTop: '-3px',
            }}
          >
            <a
              className="theme-switch-button"
              href={`https://twitter.com/${META.social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginRight: '30px',
              }}
            >
              <Icon stack="twitter" style={{ width: '22px' }} />
            </a>

            {!noColorModeChange && (
              <button
                type="button"
                className="theme-switch-button"
                onClick={() => switchTheme()}
                style={{
                  width: '22px',
                  marginRight: '20px',
                }}
              >
                {theme === 'dark' ? <Sun /> : <Moon />}
              </button>
            )}
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
                {pageTitle || ELEMENTS.mainText}
              </h1>
            )}

            {children}
          </Col>
        </Row>
      </Grid>

      <footer>
        Code hosted on{' '}
        <a
          href={`https://github.com/${META.githubUrl}`}
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
