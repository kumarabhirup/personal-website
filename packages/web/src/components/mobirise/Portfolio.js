/* eslint-disable react/prop-types */

import React, { Component } from 'react'
import Router from 'next/router'
import { Element } from 'react-scroll'
import { Grid } from 'styled-css-grid'
import styled from 'styled-components'

const BigButton = styled.button`
  display: block;
  padding: 10px;
  color: black;
  border-radius: 6px;
  border: 2px solid black;
  width: 50%;
  min-width: 300px;
  margin: 30px auto;
  font-size: 16px;
  font-weight: bold;
  background: transparent;
  cursor: pointer;
  transition: all 0.5s;
  margin-top: 100px;
  &:hover {
    background: black;
    color: white;
    padding: 15px;
    font-size: 20px;
    width: 75%;
  }
`

const PortfolioCard = styled.div`
  border: 5px solid #f2efef; /*#FAFAFA;*/
  .card-box {
    background: #f2efef; /*#FAFAFA;*/
  }
  background: #f3efef;
`

class Portfolio extends Component {
  handleMoreClick = event => {
    event.preventDefault()
    Router.push(`/portfolio`).then(() => window.scrollTo(0, 0))
  }

  render() {
    const { data } = this.props
    const projectsToShow = data.portfolio.filter(
      (item, index) => index < data.projectsAtHomepage
    )

    return (
      <Element name="portfolio">
        <section
          className="features13 features3 cid-reFWtuV64z"
          id="features13-s"
          data-rv-view="237"
          style={{ background: '#fff' }}
        >
          <div className="container">
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <h2
              className="mbr-section-title pb-3 mbr-fonts-style display-2"
              style={{ alignSelf: 'center', textAlign: 'center' }}
            >
              {data.title}
            </h2>

            <Grid
              columns="repeat(auto-fill, 350px)"
              gap="20px"
              justifyContent="center"
            >
              {projectsToShow.map((project, index) => (
                <PortfolioCard key={index} className="card">
                  <div className="card-wrapper">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-img">
                        <img
                          src={project.image}
                          alt={project.title}
                          media-simple="true"
                        />
                      </div>
                    </a>
                    <div className="card-box">
                      <h4 className="card-title pb-3 mbr-fonts-style display-7">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#000', fontWeight: 700 }}
                        >
                          {project.title}
                        </a>
                      </h4>
                      <p className="mbr-text mbr-fonts-style display-7">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </PortfolioCard>
              ))}
            </Grid>
            {data.moreButtonText && (
              <a href="/portfolio">
                <BigButton>{data.moreButtonText}</BigButton>
              </a>
            )}
          </div>
        </section>
      </Element>
    )
  }
}

export default Portfolio
