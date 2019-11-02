/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import Meta from './Meta'
import Footer from './mobirise/Footer'

const theme = {
  defaultColor: '#ffffff',
}

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Meta />
          <div>{this.props.children}</div>
          <Footer />
        </>
      </ThemeProvider>
    )
  }
}

export default Page
