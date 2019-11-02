import React, { Component } from 'react'

import NavBar from '../src/components/mobirise/NavBar'
import PageLanding from '../src/components/mobirise/PageLanding'
import PortfolioExtended from '../src/components/mobirise/PortfolioExtended'
import Banner from '../src/components/mobirise/Banner'
import Contact from '../src/components/mobirise/Contact'

import { portfolioLandingPage } from '../src/api/pageLanding'
import { navBar } from '../src/api/navBar'
import { banner } from '../src/api/banner'
import { contactSection } from '../src/api/others'
import { portfolio } from '../src/api/portfolio'

export default class portfolioPage extends Component {
  render() {
    return (
      <>
        <NavBar data={navBar} />
        <PageLanding {...portfolioLandingPage} />
        <PortfolioExtended data={portfolio} />
        <Banner data={banner} />
        <Contact data={contactSection} />
      </>
    )
  }
}
