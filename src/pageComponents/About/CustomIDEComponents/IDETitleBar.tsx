import React from 'react'

export const IDETitleBar = () => {
  return (
    <>
      <div className='button-dot-container' style={{ flex: 1 }}>
        <div className='button-dot red'></div>
        <div className='button-dot yellow'></div>
        <div className='button-dot green'></div>
      </div>
      <div style={{ flex: 3, textAlign: 'center' }}>
        About.tsx - Eric Chow
      </div>
      <div style={{ flex: 1 }}></div>
    </>
  )
}