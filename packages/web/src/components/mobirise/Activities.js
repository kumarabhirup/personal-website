/* eslint-disable react/prop-types */

import React, { Component } from 'react'
import { Element } from 'react-scroll'
import Link from 'next/link'
import Markdown from 'react-markdown'
import styled from 'styled-components'

const LightButton = styled.button`
  @keyframes MoveUpDown {
    0% {
      /* Nothing */
    }

    100% {
      transform: scale(1.05);
      margin-top: 10px;
    }
  }

  border: none;
  background: none;
  background: #fff;
  padding: 10px 50px;
  font-size: 25px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  -webkit-animation: MoveUpDown 1s linear infinite alternate;
  animation: MoveUpDown 1s linear infinite alternate;
  transition: all 1s;

  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`

export default class Activities extends Component {
  render() {
    const { data } = this.props

    return (
      <Element name="blog">
        <section
          className="timeline1 cid-reFoOc20K5"
          id="timeline1-u blog"
          data-rv-view="246"
        >
          <div className="container align-center">
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <h2 className="mbr-section-title pb-3 mbr-fonts-style display-2">
              {data.title}
            </h2>
            <h3 className="mbr-section-subtitle pb-5 mbr-fonts-style display-5">
              {data.text}
            </h3>

            <div className="container timelines-container" mbri-timelines="">
              {data.activities.map((activity, index) => {
                const separLine =
                  data.activities.length !== index + 1 ? 'separline' : null
                const reverse =
                  index === 0 || index % 2 === 0 ? 'reverse' : null
                return (
                  <div
                    key={index}
                    className={`row timeline-element ${reverse} ${separLine}`}
                  >
                    <div className="timeline-date-panel col-xs-12 col-md-6  align-left">
                      <div className="time-line-date-content">
                        <p className="mbr-timeline-date mbr-fonts-style display-5">
                          {activity.timestamp}
                        </p>
                      </div>
                    </div>
                    <span className="iconBackground"></span>
                    <div className="col-xs-12 col-md-6 align-right">
                      <div
                        className="timeline-text-content"
                        style={{ padding: 0 }}
                      >
                        {activity.featuredImage && (
                          <Link href={`/blog/${activity?.slug}`}>
                            <a>
                              <img
                                alt={activity.title}
                                src={activity.featuredImage}
                                style={{
                                  width: '100%',
                                  // maxWidth: '400px',
                                  // zoom: 1.3,
                                }}
                                className="display-5 align-right col-xs-12"
                              />
                            </a>
                          </Link>
                        )}
                        <div style={{ padding: '20px' }}>
                          <h4 className="mbr-timeline-title pb-3 mbr-fonts-style display-5">
                            <Link href={`/blog/${activity?.slug}`}>
                              <a style={{ color: '#000', lineHeight: '35px' }}>
                                {activity.title}
                              </a>
                            </Link>
                          </h4>
                          <p
                            className="mbr-timeline-text mbr-fonts-style display-7"
                            style={{
                              textAlign: 'justify',
                              lineHeight: '45px',
                              fontSize: '18px',
                            }}
                          >
                            <Markdown source={activity.body} />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

              <br />
              <br />

              <LightButton>Load More 🔰</LightButton>
            </div>
          </div>
        </section>
      </Element>
    )
  }
}
