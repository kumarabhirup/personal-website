import { useEffect, useState } from 'react'

import { META } from '../constants/metadata'

function useTwitchIsLive() {
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.twitch.tv/helix/streams?user_login=${META.social.twitch}`,
        {
          headers: {
            'Client-ID': process.env.TWITCH_CLIENT_ID,
            Authorization: `Bearer ${process.env.TWITCH_OAUTH_ID}`,
          },
        }
      )
        .then(res => res.json())
        .catch(e => {})

      if (data && data?.data && data?.data[0]) {
        setIsLive(true)
      } else {
        setIsLive(false)
      }
    }

    fetchData()
  }, [isLive])

  return isLive
}

export default useTwitchIsLive
