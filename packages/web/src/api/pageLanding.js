import React from 'react'
import { meta } from './meta'

export const homeLandingPage = {
  buttons: {
    1: {
      class: `btn-secondary`,
      icon: `mbri-rocket`,
      text: `Blog`,
      link: `blog`,
      linkOffset: 0,
    },
    2: {
      class: `btn-white-outline`,
      icon: `mbri-devices`,
      text: `PORTFOLIO`,
      link: `portfolio`,
      linkOffset: 140,
    },
  },
  arrowTakesWhere: 'about',
  marginTop: { marginTop: -100 },
}

export const portfolioLandingPage = {
  title: (
    <>
      <br />
      🖼️ My Portfolio
    </>
  ),
  button: {
    icon: `mbrib-user`,
    text: `WHO AM I?`,
    link: `${meta.domain}#about`,
  },
  iconsAndLabels: [
    { icon: `mbri-drag-n-drop2`, label: `Websites` },
    { icon: `mbri-tablet-vertical`, label: `Apps` },
    { icon: `mbri-apple`, label: `CLI` },
    { icon: `mbri-speed`, label: `Libraries` },
  ],
  arrowTakesWhere: 'portfolio',
}

export const usesLandingPage = {
  title: (
    <>
      <br />
      🦄 Things I use
    </>
  ),
  button: {
    icon: `mbrib-user`,
    text: `WHO AM I?`,
    link: `${meta.domain}#about`,
  },
  iconsAndLabels: [
    { icon: `mbri-wifi`, label: `Editing` },
    { icon: `mbri-devices`, label: `Hardware` },
    { icon: `mbri-laptop`, label: `Coding` },
    { icon: `mbri-speed`, label: `Other` },
  ],
  arrowTakesWhere: 'uses',
}

export const blogLandingPage = ({ title, arrowTakesWhereAnchor, author }) => ({
  title: (
    <>
      <br />
      {title}
    </>
  ),
  button: {
    icon: `mbrib-user`,
    text: `by ${author?.name}` || `WHO AM I?`,
    link: author?.link || `${meta.domain}#about`,
  },
  iconsAndLabels: [],
  arrowTakesWhere: arrowTakesWhereAnchor || 'uses',
})

export const page404LandingPage = {
  title: (
    <>
      <br />
      💩 Error 404
    </>
  ),
  button: {
    icon: `mbrib-smile-face`,
    text: `VISIT HOMEPAGE`,
    link: `${meta.domain}`,
  },
  iconsAndLabels: [
    { icon: `mbri-drag-n-drop2`, label: `Websites` },
    { icon: `mbri-tablet-vertical`, label: `Apps` },
    { icon: `mbri-apple`, label: `CLI` },
    { icon: `mbri-speed`, label: `Libraries` },
  ],
  arrowTakesWhere: '404',
}

export const arrowTakesWhere = {
  home: 'about',
}

export const homeButtons = {
  1: {
    class: `btn-secondary`,
    icon: `mbri-rocket`,
    text: `ABOUT ME`,
    link: `about`,
    linkOffset: -50,
  },
  2: {
    class: `btn-white-outline`,
    icon: `mbri-devices`,
    text: `PORTFOLIO`,
    link: `portfolio`,
    linkOffset: 140,
  },
}

export const arrowIcon = `mbrib-down`
export const homePageMarginTop = { marginTop: -100 }
