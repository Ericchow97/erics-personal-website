import React from 'react'
import { Container } from '@mantine/core';
import { ReactComponent as Avatar } from '../static/Home/avatar.svg';
import { ReactComponent as Illustration } from '../static/Home/illustration.svg';

export const Home = () => {

  //TODO: change from front end to full stack once backend is implemented
  return (
    <>
      <Container>
        <h1>Front End/Full Stack Web Developer</h1>
        <h3>I design beautiful simplistic websites using the latest technologies </h3>
        <Container style={{margin:'3rem auto'}}>
          <Avatar />
        </Container>
        <Container style={{maxWidth: '650px'}}>
          <Illustration style={{width: '100%'}}/>
        </Container>
      </Container>
    </>
  )
}