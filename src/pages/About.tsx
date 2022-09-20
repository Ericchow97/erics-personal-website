import React from 'react'
import { Container, Space } from '@mantine/core';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <>
      <Container id='About' className='about-container' ref={ref}>
        <h3 className={`section-header ${inView  && 'animate-header'}`}>Hi, I'm Eric!</h3>
        <Space h="md" />
        <p className={`about-text ${inView  && 'animate-about-text'}`}>I'm a self taught full stack developer who has been developing React projects for the past 3 years. I designed my
          personal website with the goal of displaying my deep understanding of React and how to build complex, high-performing,
          and elegant front end solutions.</p>
        <Space h="md" />
        {/* <Text size='xl' weight={700}>Click on any component to get started!</Text> */}
      </Container>
    </>
  )
}