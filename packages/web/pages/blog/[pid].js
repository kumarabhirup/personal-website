/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import { useRouter } from 'next/router'

import NavBar from '../../src/components/mobirise/NavBar'
import PageLanding from '../../src/components/mobirise/PageLanding'
import Faq from '../../src/components/mobirise/FAQ'
import Banner from '../../src/components/mobirise/Banner'
import Contact from '../../src/components/mobirise/Contact'

import { blogLandingPage } from '../../src/api/pageLanding'
import { navBar } from '../../src/api/navBar'
import { banner } from '../../src/api/banner'
import { contactSection } from '../../src/api/others'
import { uses } from '../../src/api/uses'

function blogPage({ content, data, data: { title, writtenBy }, fourOFour }) {
  const router = useRouter()

  useEffect(() => {
    if (fourOFour) router.replace('/404')
  })

  return (
    <>
      <NavBar data={navBar} />
      <PageLanding
        {...blogLandingPage({
          title,
          arrowTakesWhereAnchor: 'blog',
          author: {
            name: writtenBy,
            link: data?.authorLink,
          },
        })}
      />
      <Faq {...uses} />
      <Banner data={banner} />
      <Contact data={contactSection} />
    </>
  )
}

blogPage.getInitialProps = async ({ query }) => {
  try {
    const post = await import(`../../content/${query.pid}.md`).then(
      data => data.default
    )

    const document = await matter(post)

    console.log(document)

    return {
      ...document,
    }
  } catch (error) {
    return { fourOFour: true }
  }
}

export default blogPage
