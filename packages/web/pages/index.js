import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Gallery } from 'react-grid-gallery'

import Layout, { Icon } from '../components/Layout'
import { ELEMENTS } from '../constants/Meta'
import { META } from '../constants/metadata'
import { TECH, SOCIAL, PROJECTS } from '../constants/Stack'
import Subscribe from '../components/Subscribe'
import { DiscordInviteBox } from './subscribe'
import useMobile from '../hooks/useMobile'

const images = [
  {
    src: '/images/mark rachapoom founders.JPG',
    width: 4032,
    height: 3024,
  },
  {
    src: '/images/eric_jorgenson_2.JPG',
    width: 4032,
    height: 3024,
  },
  {
    src: '/images/sam_hinkie.jpeg',
    width: 2048,
    height: 1152,
    tags: [
      { value: 'Sam Hinkie', title: 'Sam Hinkie' },
      { value: 'FoundersOnly Event', title: 'FoundersOnly Event' },
    ],
    alt: 'Met Sam Hinkie in Austin, Texas.',
  },
  {
    src: '/images/bryan_johnson.jpeg',
    width: 2048,
    height: 1536,
    tags: [
      { value: 'Bryan Johnson', title: 'Bryan Johnson' },
      { value: "Don't Die", title: "Don't Die" },
    ],
  },
  {
    src: '/images/eric_jorgenson.jpeg',
    width: 2048,
    height: 1152,
    tags: [
      { value: 'Eric Jorgenson', title: 'Eric Jorgenon' },
      {
        value: 'The Almanak of Naval Ravikant',
        title: 'The Almanak of Naval Ravikant',
      },
    ],
  },
  {
    src: '/images/walk_with_naval.jpg',
    width: 801,
    height: 871,
    caption: 'Walk with Naval in San Francisco',
    tags: [
      { value: 'Naval Ravikant', title: 'Naval Ravikant' },
      // { value: 'Airchat', title: 'Airchat' },
    ],
  },
  {
    src: '/images/stanford treehacks.jpeg',
    width: 2048,
    height: 1152,
    tags: [
      { value: 'Stanford Treehacks', title: 'Stanford Treehacks' },
      {
        value: 'Judge',
        title: 'Judge',
      },
    ],
  },
  {
    src: '/images/agi house.jpeg',
    width: 4032,
    height: 3024,
    tags: [
      { value: 'AGI House', title: 'AGI House' },
      {
        value: 'Hackathon',
        title: 'Hackathon',
      },
    ],
  },
  {
    src: '/images/nonce.JPG',
    width: 3390,
    height: 2170,
    tags: [
      { value: 'Nonce', title: 'Nonce' },
      {
        value: 'Korea',
        title: 'Korea',
      },
    ],
  },
  {
    src: '/images/kumar usa.jpeg',
    width: 4284,
    height: 5712,
  },
  {
    src: '/images/korea_dinner.jpeg',
    width: 4032,
    height: 2268,
  },
  {
    src: '/images/arcadia dinner 2.jpeg',
    width: 2016,
    height: 1512,
    tags: [
      { value: 'Arcadia', title: 'Arcadia' },
      {
        value: 'Farewell',
        title: 'Farewell',
      },
    ],
  },
]

function About() {
  const isMobile = useMobile()

  return (
    <>
      <Layout secondaryPage>
        <div style={{ marginTop: 50, paddingLeft: '3px', paddingRight: '3px' }}>
          <h1 className="about-h1">
            {META.fname} {META.lname}
            {/* <TextTransitionAnimation /> */}
          </h1>

          <div className="about-intro">
            <Row>
              <Col md={12}>{ELEMENTS.about}</Col>
            </Row>

            <br />
            <hr />

            <center>
              <Gallery
                images={images}
                enableImageSelection={false}
                rowHeight={350}
              />
            </center>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About
