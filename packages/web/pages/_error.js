/* eslint-disable no-nested-ternary */

import React, { Component } from 'react'

import NavBar from '../src/components/mobirise/NavBar'
import PageLanding from '../src/components/mobirise/PageLanding'
import Section404 from '../src/components/mobirise/Section404'

import { page404LandingPage } from '../src/api/pageLanding'
import { navBar } from '../src/api/navBar'
import { page404Text } from '../src/api/others'

export default class page404 extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <>
        <NavBar data={navBar} />
        <PageLanding {...page404LandingPage} />
        <Section404 data={page404Text} />
      </>
    )
  }
}
