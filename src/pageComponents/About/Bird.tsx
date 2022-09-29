import React, { useEffect } from 'react'

const birdHead = require('../../static/Bird/nanday-conure-head.png')
const birdBody = require('../../static/Bird/nanday-conure-body.png')

export const Bird = () => {

  useEffect(() => {
    const bird = document.querySelector('.bird-head') as HTMLElement
    if (!bird) return
    const birdRect = bird.getBoundingClientRect()
    const birdX = birdRect.left + birdRect.width / 2
    const birdY = window.pageYOffset + birdRect.top + birdRect.height / 2

    const calcAngle = (cx: number, cy: number, ex: number, ey: number) => {
      const dy = ey - cy
      const dx = ex - cx

      const rad = Math.atan2(dy, dx) + Math.PI

      return rad * 180 / Math.PI
    }

    const handleMouseMove = (e: MouseEvent | Event) => {
      const x = e instanceof MouseEvent ? e.pageX : window.innerWidth / 2
      const y = e instanceof MouseEvent ? e.pageY : window.scrollY + window.innerHeight / 2

      const degree = calcAngle(birdX, birdY, x, y)
      if (degree > 270) {
        // bird can only look down to 300 deg
        bird.style.transform = `rotate(${Math.max(degree, 300)}deg)`
      }
      else if (degree > 90) {
        if (degree > 180) {
          bird.style.transform = `scaleX(-1) rotate(${Math.max(180 - degree, -30)}deg)`
        } else bird.style.transform = `scaleX(-1) rotate(${Math.min(180 - degree, 30)}deg)`
      }
      else if (degree > 0) {
        // bird cannot look up more than 30 degrees
        bird.style.transform = `rotate(${Math.min(degree, 30)}deg)`
      }
    }

    document.addEventListener('mousemove', e => handleMouseMove(e))
    document.addEventListener('scroll', e => handleMouseMove(e))

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.addEventListener('scroll', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div className='bird-container'>
        <img src={birdHead} alt='Nanday Conure Head' className='bird-head' />
        <img src={birdBody} alt='Nanday Conure perched on custom IDE' className='bird-body' />
      </div>
    </>
  )
}