'use client'

import React from 'react'

const GridBackground = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: 'transparent',
      zIndex: -10,
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: `linear-gradient(#20202308 1px, transparent 1px), linear-gradient(to right, #20202308 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }}
    />
  </div>
)

export default GridBackground
