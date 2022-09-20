import React, { useContext } from 'react'
import { Container, Divider, Space } from '@mantine/core';
import { ProjectComponent } from '../pageComponents/Projects';
import { ThemeDarkContext } from '../pageComponents/General/ThemeDarkContext';
import { useInView } from 'react-intersection-observer';

export const Projects = () => {
  const { isDark } = useContext(ThemeDarkContext)
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })


  return (
    <>
      <Container id="Projects" size="sm" px="xs">
        <div ref={ref} className='projects-container'>
          <h3 className={`section-header ${inView && 'animate-header'}`}>Projects</h3>
          <Space h="md" />
          <ProjectComponent
            image={require('../static/Trolley/trolley-logo.png')}
            alt="Trolley App logo"
            website='https://apps.shopify.com/trolley-1'
            websitePreview={require('../static/Trolley/trolley-landing-page.png')}
            name="Trolley"
            description="Trolley is a Shopify App that adds a customizable cart drawer to the merchant's store. Trolley aims to provide 
            an efficient and simplistic solution with unlimited customization options. Trolley's cart drawer enables 
            faster checkout times and allows merchants to cross sell or upsell additional products based on their own 
            predefined rules."
            techStack={['React', 'TypeScript', "Shopify", "GraphQL", 'NextJS', "Heroku", "AWS", "Jest", "SendGrid"]}
            className="left"
          />
          <Divider my="sm" />
          <ProjectComponent
            image={isDark ? require('../static/GiftIt/Giftit-Logo-dark.png') : require('../static/GiftIt/Giftit-Logo-light.png')}
            alt="Giftit App logo"
            website='https://apps.shopify.com/giftit-1'
            websitePreview={require('../static/GiftIt/Giftit-Page.png')}
            githubWebsite='https://github.com/Ericchow97/giftit'
            name="GiftIt"
            description="GiftIt is a Shopify App which provides merchants the ability to add a gifting service to their store.
            GiftIt offers shoppers an opportunity to send a personalized gift even when they don’t know their giftees shipping 
            address. With GiftIt, gifters will be able to select any item from the store catalog and purchase it as a gift."
            techStack={['React', 'TypeScript', "Shopify", "GraphQL", 'NextJS', "Heroku", "AWS", "Jest", "SendGrid"]}
            className="right"
          />
          <Divider my="sm" />
          <ProjectComponent
            image={require('../static/CAHL/CAHL_LOGO.gif')}
            alt="CAHL Website logo"
            website='http://cahl.net'
            websitePreview={require('../static/CAHL/CAHL.png')}
            githubWebsite='https://github.com/Ericchow97/cahl-website'
            name="CAHL.net"
            description="CAHL.net is a website built for a Saturday night hockey league to keep track of series stats,
            players stats and individual milestones. This project aimed to modernize the technology stack of its predecessor 
            which previously relied on .Net and Adobe Flash Player for its functionality."
            techStack={['React', "AntD", "Django", 'PostgreSQL', "AWS"]}
            className="left"
          />
        </div>
      </Container>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
    </>
  )
}