import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import Layout from '../../components/Layout'
import Subscribe from '../../components/Subscribe'
import { DiscordInviteBox } from '.'

function ThanksSubscribePage() {
  return (
    <>
      <Layout pageTitle="Thank you!">
        <Row>
          <Col md={12}>
            <div className="dynamicCenter">
              <h2>You are just one step away from joining our club!</h2>
              <p>Confirmation link is in your inbox, go check it out!</p>
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

export default ThanksSubscribePage
