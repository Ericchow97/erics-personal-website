import React from "react";
import { Container, Text, Space, Group, Center } from '@mantine/core';
import { SocialButtons } from "../pageComponents/Contact";
import { ReactComponent as LinkedIn } from '../static/Contact/linkedin.svg'
import { ReactComponent as Github } from '../static/Contact/github.svg'
import { ReactComponent as Email } from '../static/Contact/email.svg'
//TODO: insert repository once published

export const Contact = () => {
  return (
    <>
      <Container className='about-container' style={{ padding: '2rem 9rem 1rem' }}>
        <Container className='contact-container'>
          <Text size='xl' weight={700}>Interested in learning more?</Text>
          <Space h='sm' />
          <Text size='md' weight={700}>Connect with me on my Socials below!</Text>
        </Container>
      </Container>
      <Container className='about-container' style={{ padding: '0 9rem 2rem' }}>
        <Center>
          <Group>
            <SocialButtons
              website='https://github.com/Ericchow97'
            >
              <Github />
            </SocialButtons>
            <SocialButtons
              website='https://www.linkedin.com/in/e-chow/'
            >
              <LinkedIn />
            </SocialButtons>
            <SocialButtons
              website='mailto: eric.chow803@gmail.com'
            >
              <Email />
            </SocialButtons>
          </Group>
        </Center>
        <Space h='sm' />
        <Text>Created with React.</Text>
        <Space h='sm' />
        <Text>See the code base here.</Text>
      </Container>
    </>
  )
}