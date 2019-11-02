/* eslint-disable react/prop-types */

import React, { Component } from 'react'
import { Link } from 'react-scroll'

import { arrowIcon } from '../../api/pageLanding'

export default class PageLanding extends Component {
  render() {
    const { title, iconsAndLabels, arrowTakesWhere, button } = this.props
    return (
      <section
        className="header12 cid-reFvVotcRe mbr-fullscreen mbr-parallax-background"
        id="header12-x"
        data-rv-view="254"
      >
        <div
          className="mbr-overlay"
          style={{ opacity: 0.6, backgroundColor: 'rgb(0, 0, 0)' }}
        ></div>

        <div className="container">
          <div className="media-container">
            <div className="col-md-12 align-center">
              {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
              <h1 className="mbr-section-title pb-3 mbr-white mbr-bold mbr-fonts-style display-1">
                {title}
              </h1>

              <div className="mbr-section-btn align-center py-2">
                <a
                  className="btn btn-md btn-secondary display-4"
                  href={button.link}
                >
                  <span
                    className={`${button.icon} mbr-iconfont mbr-iconfont-btn`}
                  ></span>
                  {button.text}
                </a>
              </div>

              <div className="icons-media-container mbr-white">
                {iconsAndLabels.map((icon, index) => (
                  <div key={index} className="card col-12 col-md-6 col-lg-3">
                    <div className="icon-block">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="#">
                        <span
                          className={`mbr-iconfont ${icon.icon}`}
                          media-simple="true"
                        ></span>
                      </a>
                    </div>
                    <h5 className="mbr-fonts-style display-5">{icon.label}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {arrowTakesWhere && (
          <div className="mbr-arrow hidden-sm-down" aria-hidden="true">
            <Link
              to={arrowTakesWhere}
              spy
              smooth
              duration={1000}
              offset={-90}
              href={`#${arrowTakesWhere}`}
            >
              <i className={`${arrowIcon} mbr-iconfont`}></i>
            </Link>
          </div>
        )}
      </section>
    )
  }
}
