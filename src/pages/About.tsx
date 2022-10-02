import React from 'react'
import { Container } from '@mantine/core';
import { useInView } from 'react-intersection-observer';
import { Bird, CustomIDE } from '../pageComponents/About';
import { AnchorButton } from '../pageComponents/General';
import Resume from '../static/Eric-Chow-Resume.pdf'

export const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  //TODO: Check if this inView causes a rerender
  return (
    <>
      <Container id='About' className='about-container' ref={ref}>
        <h3 className={`section-header ${inView && 'animate-header'}`}>About Me</h3>
        <Bird />
        <CustomIDE inView={inView} />
        {inView && (
          <div className='about-cta'>
            <AnchorButton href={Resume} target="_blank">
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentcolor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  <line x1="12" y1="11" x2="12" y2="17" />
                  <polyline points="9 14 12 17 15 14" />
                </svg>
                <p>Resume</p>
              </>
            </AnchorButton>
            <AnchorButton href='#Contact'>
              <p>Contact Me!</p>
            </AnchorButton>
          </div>
        )}
      </Container>
    </>
  )
}