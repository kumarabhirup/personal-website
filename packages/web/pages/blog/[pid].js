/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react'
import matter from 'gray-matter'
import { useRouter } from 'next/router'

import NavBar from '../../src/components/mobirise/NavBar'
import PageLanding from '../../src/components/mobirise/PageLanding'
import SocialLinks from '../../src/components/mobirise/SocialLinks'
import Contact from '../../src/components/mobirise/Contact'
import BlogContent from '../../src/components/mobirise/BlogContent'

import { blogLandingPage } from '../../src/api/pageLanding'
import { navBar } from '../../src/api/navBar'
import { socialLinks } from '../../src/api/socialLinks'
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
        featuredImage={data?.featuredImage}
      />
      <BlogContent
        data={{ data, content, excerpt }}
        url={router.asPath}
        error={fourOFour}
      />
      <SocialLinks data={socialLinks} />
      <Contact data={contactSection} />
    </>
  )
}

blogPage.getInitialProps = async ({ query }) => {
  try {
    const post = await import(`../../content/${query.pid}.md`)
      .then(data => data.default)
      .catch(error => ({ fourOFour: true }))

    const document = await matter(post, { excerpt: true })

    return {
      ...document,
    }
  } catch (error) {
    return { fourOFour: true }
  }
}

export default blogPage
