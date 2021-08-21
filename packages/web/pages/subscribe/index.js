import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import Layout from '../../components/Layout'
import Subscribe from '../../components/Subscribe'
import { META } from '../../constants/metadata'

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
      I have a Discord server called{' '}
      <a
        href={META.discordLink}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        kumar & friends
      </a>
      . It's a fun community of learners, that I am building ✌️ It's super small
      as of now, glad to have you in!
    </div>
  )
}

function SubscribePage({ noColorModeChange, noLiveShow }) {
  return (
    <>
      <Layout noColorModeChange={noColorModeChange} noLiveShow={noLiveShow}>
        <Row>
          <Col md={12}>
            {/* <div className="card"> */}
            <Subscribe />
            {/* </div> */}

            <br />
            <br />

            <DiscordInviteBox />
          </Col>
        </Row>
      </Layout>
    </>
  )
}

SubscribePage.getInitialProps = () => ({
  data: {
    title: `Subscribe to Kumar & Thoughts`,
    og: {
      description: `Subscribe to ${META.fname}'s newsletter! No spam, promise!`,
      image: META.pageOgs.subscribe,
    },
  },
})

export default SubscribePage
