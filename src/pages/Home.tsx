import React, { useRef, useEffect, useContext } from 'react'
import { Container } from '@mantine/core';
import { ReactComponent as Avatar } from '../static/Home/avatar.svg';
import { Tendrils } from '../pageComponents/Home/Tendrils';
import { Navigation } from '../pageComponents/Navigation/Navigation';
import { ThemeDarkContext, AnchorButton } from '../pageComponents/General';

export const Home = () => {
  const canvas = useRef<HTMLCanvasElement>(null)
  const mousePosition: [number, number] = [0, 0]
  const tendrils = Array.from(Array(50), (_, i) => new Tendrils(0.45 + 0.025 * (i / 50), mousePosition));

  const darkContext = useContext(ThemeDarkContext)

  // resize canvas to window size once defined or when window is resized itself
  useEffect(() => {
    const handleResize = () => {
      const ctx = canvas.current!.getContext('2d')
      if (!ctx) return
      ctx.canvas.width = document.documentElement.clientWidth
      ctx.canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [canvas])

  // define draw & interval
  useEffect(() => {
    const draw = (ctx: CanvasRenderingContext2D) => {
      if (!canvas.current) return

      // define background based on current background context
      if (darkContext.isDark) {
        ctx.fillStyle = "#1f2023"
        ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);
      } else ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);

      // define stroke style
      ctx.strokeStyle = 'hsla(206, 77%, 56%,0.25)';
      ctx.lineWidth = 2;

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
  }, [canvas, mousePosition, tendrils, darkContext])

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
  //TODO: add resume somewhere

  // first wave on load
  useEffect(() => {
    handleMouseOver()
  }, [])

  return (
    <>
      <Navigation />
      <Container id="Home" className='section-full' onMouseMove={(event) => handleMouseMove(canvas.current, event)}>
        <Container className='home-container' onMouseOver={handleMouseOver} onTouchStart={handleMouseOver}>
          <div>
            <Avatar />
          </div>
          <div className='text-container'>
            <h1 className='intro-text'>Hi I'm Eric!</h1>
            <div className='intro-role-container'>
              <span className='intro-role-animation'></span>
              <h2 className='intro-role-text'>Front End/Full Stack Web Developer.</h2>
            </div>
          </div>
        </Container>
        <AnchorButton href='#Projects'>
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon-tabler-chevrons-down" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <polyline points="7 7 12 12 17 7"></polyline>
              <polyline points="7 13 12 18 17 13"></polyline>
            </svg>
            <p>View my Projects</p>
          </>
        </AnchorButton>
        <canvas id='home-canvas' ref={canvas}></canvas>
      </Container>
    </>
  )
}