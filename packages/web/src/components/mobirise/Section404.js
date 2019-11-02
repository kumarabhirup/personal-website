/* eslint-disable react/prop-types */

import React, { Component } from 'react'
import { Element } from 'react-scroll'

export default class Section404 extends Component {
  render() {
    const { data } = this.props
    return (
      <Element name="404" id="404">
        <section
          className="mbr-section content4 cid-reFZ9g1O80"
          id="content4-1h"
          data-rv-view="291"
        >
          <div className="container">
            <div className="media-container-row">
              <div className="title col-12 col-md-8">
                <h2 className="align-center pb-3 mbr-fonts-style display-2">
                  {data.title}
                </h2>
                <h3 className="mbr-section-subtitle align-center mbr-light mbr-fonts-style display-5">
                  {data.body}
                </h3>
              </div>
            </div>
          </div>
        </section>
      </Element>
    )
  }
}
