import React from 'react'
import { Container, Text,Space  } from '@mantine/core';

export const About = () => {
  return (
    <>
    <Container className='about-container'>
      <Text size='xl' weight={700}>Hi, I'm Eric!</Text>
      <Space h="md" />
      <Text>I'm a self taught full stack developer who's been developing React projects for the past 3 years. I designed my 
        personal website with the goal of displaying my deep understanding of React and how to build complex, high-performing
        and elegant front end solutions</Text>
        <Space h="md" />
      <Text size='xl' weight={700}>Click on any component to get started!</Text>
    </Container>
    </>
  )
}