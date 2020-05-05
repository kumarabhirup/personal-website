import React from 'react'
import dynamic from 'next/dynamic'

import { META } from '../constants/Meta'
import SubscribePage from './subscribe'

const ReactTwitchEmbedVideo = dynamic(
  () => import('react-twitch-embed-video'),
  { ssr: false }
)

function LivePage() {
  return (
    <>
      <ReactTwitchEmbedVideo
        channel={META.social.twitch}
        width="100%"
        height="600px"
        theme="dark"
        autoplay
        muted={false}
      />

      <SubscribePage />
    </>
  )
}

export default LivePage
