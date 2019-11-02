/* eslint-disable react/prop-types */

import React, { Component } from 'react'
import { Element } from 'react-scroll'

import { meta } from '../../api/meta'
import Card from './Card'

export default class About extends Component {
  render() {
    const { data } = this.props
    return (
      <Element name="about" id="about">
        <section
          className="toggle2 cid-rezPziFdFs"
          id="toggle2-o next"
          data-rv-view="228"
        >
          <div className="container">
            <div className="media-container-row">
              <div className="toggle-content">
                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                <h2 className="mbr-section-title pb-3 align-left mbr-fonts-style display-2">
                  {data.title}
                </h2>
                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                <h3 className="mbr-section-subtitle align-left mbr-fonts-style display-5">
                  {data.text}
                </h3>
                <div
                  id="bootstrap-toggle"
                  className="toggle-panel accordionStyles tab-content pt-5 mt-2"
                >
                  {data.questions.map((question, index) => (
                    <Card key={index} details={{ question, index }} />
                  ))}
                </div>
              </div>
              <div className="mbr-figure" style={{ width: '104%' }}>
                <img
                  src={data.image}
                  alt={meta.name}
                  title={meta.name}
                  media-simple="true"
                />
              </div>
            </div>
          </div>
        </section>
      </Element>
    )
  }
}
