/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react'
import moment from 'moment'

import { homeLandingPage } from '../src/api/pageLanding'
import { activities } from '../src/api/activities'
import { contactSection } from '../src/api/others'
import { banner } from '../src/api/banner'
import { portfolio } from '../src/api/portfolio'
import { skills } from '../src/api/skills'
import { socialLinks } from '../src/api/socialLinks'
import { aboutMe } from '../src/api/about'

import getActivities from '../src/lib/getActivities'

import HomepageParallax from '../src/components/mobirise/HomepageParallax'
import About from '../src/components/mobirise/About'
import SocialLinks from '../src/components/mobirise/SocialLinks'
import Skills from '../src/components/mobirise/Skills'
import Portfolio from '../src/components/mobirise/Portfolio'
import Banner from '../src/components/mobirise/Banner'
import Contact from '../src/components/mobirise/Contact'
import Activities from '../src/components/mobirise/Activities'

export default class homePage extends Component {
  static async getInitialProps() {
    const content = await getActivities()

    return {
      activities: content,
    }
  }

  // this.props.activities.slice(
  //  (pageNumber - 1) * limit,
  //  pageNumber * limit
  // )

  state = {
    activities: {
      data: this.props.activities.slice((1 - 1) * 1, 1 * 1),
      page: 1,
      shouldLoadMore: false,
    },
  }

  componentDidMount() {
    // decide shouldLoadMore
    this.setState(prevState => ({
      activities: {
        ...prevState?.activities,
        shouldLoadMore:
          prevState.activities.data.length !== this.props.activities.length,
      },
    }))
  }

  paginateActivities(pageNumber = 1, limit = 1) {
    const posts = [...this.props.activities]
    return posts.slice((pageNumber - 1) * limit, pageNumber * limit)
  }

  render() {
    const statefulActivities = this.state?.activities?.data
    const pageNumber = this.state?.activities?.page

    return (
      <>
        <HomepageParallax {...homeLandingPage} />
        <About data={aboutMe} />
        <SocialLinks data={socialLinks} />
        <Skills data={skills} />
        <Portfolio data={portfolio} />
        <Banner data={banner} />
        <Contact data={contactSection} />
        <Activities
          data={{
            ...activities,
            page: pageNumber,
            activities: statefulActivities
              ? statefulActivities?.map(activity => ({
                  title: activity.data?.title,
                  timestamp: moment(
                    activity.data?.date,
                    'MM/DD/YYYY, h:mm a'
                  ).fromNow(),
                  body: activity.excerpt,
                  featuredImage: activity.data?.featuredImage,
                  slug: activity?.slug,
                }))
              : [],
          }}
          loadMore={async () => {
            const content = this.paginateActivities(
              this.state?.activities?.page + 1
            )

            this.setState(prevState => ({
              activities: {
                ...prevState?.activities,
                data: [...prevState?.activities?.data, ...(content || [])],
                page: prevState?.activities?.page + 1,
              },
            }))

            // decide shouldLoadMore
            this.setState(prevState => ({
              activities: {
                ...prevState?.activities,
                shouldLoadMore:
                  prevState.activities.data.length !==
                  this.props.activities.length,
              },
            }))
          }}
          shouldLoadMore={this.state?.activities?.shouldLoadMore}
        />
      </>
    )
  }
}
