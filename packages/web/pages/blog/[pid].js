/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react'
import matter from 'gray-matter'
import { useRouter } from 'next/router'

import NavBar from '../../src/components/mobirise/NavBar'
import PageLanding from '../../src/components/mobirise/PageLanding'
import Banner from '../../src/components/mobirise/Banner'
import Contact from '../../src/components/mobirise/Contact'
import BlogContent from '../../src/components/mobirise/BlogContent'

import { blogLandingPage } from '../../src/api/pageLanding'
import { navBar } from '../../src/api/navBar'
import { banner } from '../../src/api/banner'
import { contactSection } from '../../src/api/others'

function blogPage({ content, data, excerpt, fourOFour }) {
  const router = useRouter()

  useEffect(() => {
    if (fourOFour) router.replace('/404')
  })

  return (
    <>
      <NavBar data={navBar} />
      <PageLanding
        {...blogLandingPage({
          title: data?.title,
          arrowTakesWhereAnchor: 'blog',
          author: {
            name: data?.writtenBy,
            link: data?.authorLink,
          },
        })}
      />
      <BlogContent data={{ data, content, excerpt }} error={fourOFour} />
      <Banner data={banner} />
      <Contact data={contactSection} />
    </>
  )
}

blogPage.getInitialProps = async ({ query }) => {
  try {
    const post = await import(`../../content/${query.pid}.md`)
      .then(data => data.default)
      .catch(error => ({ fourOFour: true }))

    const document = await matter(post)

    return {
      ...document,
    }
  } catch (error) {
    return { fourOFour: true }
  }
}

export default blogPage
