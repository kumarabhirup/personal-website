/* eslint-disable react/prop-types */

import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    const { data } = this.props
    return (
      <section
        className="mbr-section content5 cid-reFnGRJN1g mbr-parallax-background"
        id="content5-t"
        data-rv-view="240"
      >
        <div
          className="mbr-overlay"
          style={{ opacity: 0.5, backgroundColor: 'rgb(0, 0, 0)' }}
        ></div>
        <div className="container">
          <div className="media-container-row">
            <div className="title col-12 col-md-8">
              <h2 className="align-center mbr-bold mbr-white pb-3 mbr-fonts-style display-1">
                {data.title}
              </h2>
              {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
              <h3 className="mbr-section-subtitle align-center mbr-light mbr-white pb-3 mbr-fonts-style display-5">
                {data.text}
              </h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
