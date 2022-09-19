import React from 'react'
import { Container, Space } from '@mantine/core';

export const About = () => {
  return (
    <>
      <Container id='About' className='about-container'>
        <h3>Hi, I'm Eric!</h3>
        <Space h="md" />
        <p>I'm a self taught full stack developer who has been developing React projects for the past 3 years. I designed my
          personal website with the goal of displaying my deep understanding of React and how to build complex, high-performing,
          and elegant front end solutions.</p>
        <Space h="md" />
        {/* <Text size='xl' weight={700}>Click on any component to get started!</Text> */}
      </Container>
    </>
  )
}