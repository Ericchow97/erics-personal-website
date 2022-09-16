import React, { useRef, useEffect } from 'react'
import { Container } from '@mantine/core';
import  {ReactComponent as Avatar} from '../static/Home/avatar.svg';
import { Tendrils } from '../pageComponents/Home/Tendrils';

export const Home = () => {
  const canvas = useRef<HTMLCanvasElement>(null)
  const mousePosition: [number, number] = [0, 0]
  const tendrils = Array.from(Array(50), (_, i) => new Tendrils(0.45 + 0.025 * (i / 50), mousePosition));

  //resize canvas to window size once defined
  useEffect(() => {
    const ctx = canvas.current!.getContext('2d')
    if (!ctx) return
    ctx.canvas.width = document.documentElement.clientWidth
    ctx.canvas.height = window.innerHeight
  }, [canvas])

  // define draw & interval
  useEffect(() => {
    const draw = (ctx: CanvasRenderingContext2D) => {
      if (!canvas.current) return
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
      ctx.strokeStyle = 'hsla(206, 77%, 56%,0.25)';
      ctx.lineWidth = 1;

      for (let i = 0, tendril; i < 30; i++) {
        tendril = tendrils[i];
        tendril.update(mousePosition);
        tendril.draw(ctx);
      }
    }

    const ctx = canvas.current!.getContext('2d')
    if (!ctx) return
    const drawInterval = setInterval(() => draw(ctx), 20)

    return () => clearInterval(drawInterval)
  }, [canvas, mousePosition, tendrils])

  // mouse move for canvas animation
  const handleMouseMove = (canvas: HTMLCanvasElement | null, e: React.MouseEvent<HTMLDivElement>) => {
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    // update mouse position 
    mousePosition[0] = e.clientX - canvas.getBoundingClientRect().left
    mousePosition[1] = e.clientY - canvas.getBoundingClientRect().top
  }

  // mouse over for waving animation
  const handleMouseOver = () => {
    const ref = document.querySelector("#ArmWave")
    if (ref?.classList.contains('start')) return

    ref?.classList.add('start')
    setTimeout(() => ref?.classList.remove('start'), 5250)
  }

  //TODO: change from front end to full stack once backend is implemented
  return (
    <>
      <Container className='section-full' onMouseMove={(event) => handleMouseMove(canvas.current, event)}>
        <Container className='home-container' onMouseOver={handleMouseOver} onTouchStart={handleMouseOver}>
          <div>
            <Avatar />
          </div>
          <div className='text-container'>
            <h1 className='intro-text'>Hi I'm Eric!</h1>
            <h2>Front End/Full Stack Web Developer.</h2>
          </div>
        </Container>
        <a className='anchor-button' href='#About'>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-down" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <polyline points="7 7 12 12 17 7"></polyline>
            <polyline points="7 13 12 18 17 13"></polyline>
          </svg>
          <p>View my Projects</p>
        </a>
        <canvas id='home-canvas' ref={canvas}></canvas>
      </Container>
    </>
  )
}