import React, { Component } from 'react'

import { homeLandingPage } from '../src/api/pageLanding';
import { activities } from '../src/api/activities';
import { contactSection } from '../src/api/others';
import { banner } from '../src/api/banner';
import { portfolio } from '../src/api/portfolio';
import { skills } from '../src/api/skills';
import { socialLinks } from '../src/api/socialLinks';
import { aboutMe } from '../src/api/about';

import HomepageParallax from '../src/components/mobirise/HomepageParallax';
import About from '../src/components/mobirise/About';
import SocialLinks from '../src/components/mobirise/SocialLinks';
import Skills from '../src/components/mobirise/Skills';
import Portfolio from '../src/components/mobirise/Portfolio';
import Banner from '../src/components/mobirise/Banner';
import Contact from '../src/components/mobirise/Contact';
import Activities from '../src/components/mobirise/Activities';

export default class homePage extends Component {
  render() {
    return (
      <>
        <HomepageParallax {...homeLandingPage} />
        <About data={aboutMe} />
        <SocialLinks data={socialLinks} />
        <Skills data={skills} />
        <Portfolio data={portfolio} />
        <Banner data={banner} />
        <Contact data={contactSection} />
        <Activities data={activities} />
      </>
    )
  }
}