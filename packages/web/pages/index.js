import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Gallery } from 'react-grid-gallery'

import Layout from '../components/Layout'
import { ELEMENTS } from '../constants/Meta'
import { META } from '../constants/metadata'

const images = [
  {
    src: '/images/walk_with_naval.jpg',
    width: 801,
    height: 871,
    caption:
      'A two hour walk with Naval in San Francisco, before joining Airchat.',
    tags: [{ value: 'Naval Ravikant', title: 'Naval Ravikant' }],
    alt: 'A two hour walk with Naval in San Francisco, before joining Airchat.',
  },
  {
    src: '/images/mark rachapoom founders.JPG',
    width: 4032,
    height: 3024,
    caption: 'FoundersOnly Event with Mark Rachapoom',
    alt: 'FoundersOnly Event with Mark Rachapoom',
  },
  {
    src: '/images/eric_jorgenson_2.JPG',
    width: 4032,
    height: 3024,
    caption: 'Eric Jorgenson, Mark Rachapoom, and Kumar Abhirup (me)',
    alt: 'Eric Jorgenson, Mark Rachapoom, and Kumar Abhirup (me)',
  },
  {
    src: '/images/bryan_johnson.jpeg',
    width: 2048,
    height: 1536,
    tags: [
      { value: 'Bryan Johnson', title: 'Bryan Johnson' },
      { value: "Don't Die", title: "Don't Die" },
    ],
    alt: "Bryan Johnson, Don't Die Blueprint",
    caption: `Bryan Johnson, Don't Die Blueprint`,
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
    alt: 'Eric Jorgenson, signing my The Almanak of Naval Ravikant',
    caption: 'Eric Jorgenson, signing my The Almanak of Naval Ravikant',
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
    alt: 'Judging at Stanford Treehacks',
    caption: 'Judging at Stanford Treehacks',
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
    alt: 'AGI House Hackathon, in Palo Alto, California.',
    caption: 'AGI House Hackathon, in Palo Alto, California.',
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
    alt: 'Nonce Korea 2022',
    caption: 'Nonce Korea 2022',
  },
  {
    src: '/images/korea_dinner.jpeg',
    width: 4032,
    height: 2268,
    alt: 'Nonce Korea Dinner',
    caption: 'Nonce Korea Dinner',
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
    alt: 'Arcadia Farewell Dinner',
    caption: 'Arcadia Farewell Dinner',
  },
  // {
  //   src: '/images/sam_hinkie.jpeg',
  //   width: 2048,
  //   height: 1152,
  //   tags: [
  //     { value: 'Sam Hinkie', title: 'Sam Hinkie' },
  //     { value: 'FoundersOnly Event', title: 'FoundersOnly Event' },
  //   ],
  //   alt: 'Met Sam Hinkie in Austin, Texas.',
  //   caption: 'Met Sam Hinkie in Austin, Texas.',
  // },
]

function About() {
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
            <br />

            <h2>Moments 📸</h2>
            <center>
              <Gallery
                images={images}
                enableImageSelection={false}
                rowHeight={350}
              />
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/XGvTdW9iBMI?si=82fHf5YwRIAI-gHQ?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ borderRadius: 20 }}
                allowfullscreen
              />
            </center>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About
