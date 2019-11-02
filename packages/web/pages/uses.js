import React, { Component } from 'react'

import NavBar from '../src/components/mobirise/NavBar'
import PageLanding from '../src/components/mobirise/PageLanding'
import Faq from '../src/components/mobirise/FAQ'
import Banner from '../src/components/mobirise/Banner'
import Contact from '../src/components/mobirise/Contact'

import { usesLandingPage } from '../src/api/pageLanding'
import { navBar } from '../src/api/navBar'
import { banner } from '../src/api/banner'
import { contactSection } from '../src/api/others'
import { uses } from '../src/api/uses'

export default class usesPage extends Component {
  render() {
    return (
      <>
        <NavBar data={navBar} />
        <PageLanding {...usesLandingPage} />
        <Faq {...uses} />
        <Banner data={banner} />
        <Contact data={contactSection} />
      </>
    )
  }
}
