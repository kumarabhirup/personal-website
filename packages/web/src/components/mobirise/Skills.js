/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React, { Component } from 'react'

import Skill from './Skill'

export default class Skills extends Component {
  render() {
    const { data } = this.props
    return (
      <section
        className="progress-bars3 cid-rezDHMdky7"
        id="progress-bars3-j"
        data-rv-view="234"
      >
        <div className="container">
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <h2 className="mbr-section-title pb-3 align-center mbr-fonts-style display-2">
            {data.title}
          </h2>
          <h3 className="mbr-section-subtitle mbr-fonts-style display-5">
            {data.text}
          </h3>
          <div className="media-container-row pt-5 mt-2">
            {data.skills.map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
          </div>
          <div
            style={{
              margin: '30px auto',
              textAlign: 'center',
              cursor: 'default',
            }}
          >
            <h4>
              Beginner level 👉{' '}
              {data.beginnerLevel.map(skill => (
                <>
                  <u>{skill}</u> &nbsp;
                </>
              ))}
            </h4>
            <div className="pt-3"></div>
            <h4>
              Also know 👉{' '}
              {data.alsoKnow.map(skill => (
                <>
                  <u>{skill}</u> &nbsp;
                </>
              ))}
            </h4>
            <div className="pt-3"></div>
            <h5>
              In my wishlist ❤️{' '}
              {data.wishlist.map(skill => (
                <>
                  <u>{skill}</u> &nbsp;
                </>
              ))}
            </h5>
          </div>
        </div>
      </section>
    )
  }
}
