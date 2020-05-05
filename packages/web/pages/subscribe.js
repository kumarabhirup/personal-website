import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import Layout from '../components/Layout'
import Subscribe from '../components/Subscribe'
import { META } from '../constants/Meta'

export function DiscordInviteBox() {
  return (
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
        href={META.discordLink}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        Kumar on Discord
      </a>
      . It's a fun community of learners, that I am building ✌️
    </div>
  )
}

function SubscribePage({ noColorModeChange, noLiveShow }) {
  return (
    <>
      <Layout noColorModeChange={noColorModeChange} noLiveShow={noLiveShow}>
        <Row>
          <Col md={12}>
            <div className="card">
              <Subscribe />
            </div>

            <br />
            <br />

            <DiscordInviteBox />
          </Col>
        </Row>
      </Layout>
    </>
  )
}

export default SubscribePage
