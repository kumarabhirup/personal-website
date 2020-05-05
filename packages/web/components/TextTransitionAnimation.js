import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { config } from 'react-spring'

import { SKILLS } from '../constants/Stack'

const TextTransition = dynamic(() => import('react-text-transition'), {
  ssr: false,
})

export default function TextTransitionAnimation() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(
      // eslint-disable-next-line no-shadow
      () => setIndex(index => index + 1),
      3000 // every 3 seconds
    )
  }, [index])

  return (
    <TextTransition
      text={SKILLS[index % SKILLS.length]}
      springConfig={config.gentle}
      style={{ display: 'inline-block' }}
    />
  )
}
