import React, { useState, useContext, useRef } from 'react'
import { ProjectComponent } from "./ProjectComponent"
import { ThemeContext } from '../General/ThemeContext'
import { ProjectComponentSelect } from './ProjectComponentSelect'
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export const ProjectsCarousel = () => {
  const { isDark } = useContext(ThemeContext)
  const nodeRef = useRef<HTMLDivElement>(null)

  const [componentIndex, setComponentIndex] = useState(0)
  const [transitionDirection, setTransitionDirection] = useState<'right' | 'left'>('right')
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const minSwipeDistance = 40

  const projects = [
    {
      name: "Trolley",
      description: `Trolley is a Shopify App that adds a customizable cart drawer to the merchant's store. Trolley aims to provide
      an efficient and simplistic solution with unlimited customization options. Trolley's cart drawer enables
      faster checkout times and allows merchants to cross sell or upsell additional products based on their own
      predefined rules.`,
      image: require('../../static/Trolley/trolley-logo.png'),
      alt: "Trolley App logo",
      website: 'https://apps.shopify.com/trolley-1',
      techStack: ['React', 'TypeScript', "Shopify", "GraphQL", 'NextJS', "Heroku", "AWS", "Jest", "SendGrid"]
    },
    {
      name: "GiftIt",
      description: `GiftIt is a Shopify App which provides merchants the ability to add a gifting service to their store.
      GiftIt offers shoppers an opportunity to send a personalized gift even when they don’t know their giftees shipping
      address. With GiftIt, gifters will be able to select any item from the store catalog and purchase it as a gift.`,
      image: isDark ? require('../../static/GiftIt/Giftit-Logo-dark.png') : require('../../static/GiftIt/Giftit-Logo-light.png'),
      alt: "Giftit App logo",
      githubWebsite: 'https://github.com/Ericchow97/giftit',
      website: 'https://apps.shopify.com/giftit-1',
      techStack: ['React', 'TypeScript', "Shopify", "GraphQL", 'NextJS', "Heroku", "AWS", "Jest", "SendGrid"]
    },
    {
      name: "CAHL.net",
      description: `CAHL.net is a website built for a Saturday night hockey league to keep track of series stats,
      players stats and individual milestones. This project aimed to modernize the technology stack of its predecessor
      which previously relied on .Net and Adobe Flash Player for its functionality.`,
      image: require('../../static/CAHL/CAHL_LOGO.gif'),
      alt: "CAHL Website logo",
      githubWebsite: 'https://github.com/Ericchow97/cahl-website',
      website: 'http://cahl.net',
      techStack: ['React', "AntD", "Django", 'PostgreSQL', "AWS"]
    }
  ]

  // traverse through carousel
  const handleNavigation = (num: number) => {
    const newSlideIndex = componentIndex + num
    setTransitionDirection(num === 1 ? 'right' : 'left')
    if (newSlideIndex < 0) setComponentIndex(projects.length - 1)
    else if (newSlideIndex === projects.length) setComponentIndex(0)
    else setComponentIndex(newSlideIndex)
  }

  // swipe events for mobile
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) {
      //swipe left
      nodeRef.current!.classList.add('left')
      handleNavigation(-1)
    } else if (distance < -minSwipeDistance) {
      // swipe right
      nodeRef.current!.classList.add('right')
      handleNavigation(1)
    }
  }

  return (
    <>
      <div className="projects-carousel-container">
        <button
          onClick={() => {
            nodeRef.current!.classList.add('left')
            handleNavigation(-1)
          }}
          className="icon-tabler-chevron left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <polyline points="15 6 9 12 15 18"></polyline>
          </svg>
        </button>
        <SwitchTransition mode='out-in'>
          <CSSTransition
            key={componentIndex}
            timeout={{
              enter: 0,
              exit: 100
            }}
            classNames={{
              enter: `project-view-enter ${transitionDirection}`,
              enterDone: `project-view-enter-done`,
              exit: `project-view-exit`,
              exitActive: `project-view-exit-active`,
            }}
          >
            <div ref={nodeRef} onTouchStart={e => onTouchStart(e)} onTouchMove={e => onTouchMove(e)} onTouchEnd={e => onTouchEnd(e)}>
              <ProjectComponent {...projects[componentIndex]} />
            </div>
          </CSSTransition>
        </SwitchTransition>
        <button onClick={() => {
          nodeRef.current!.classList.add('right')
          handleNavigation(1)
        }} className="icon-tabler-chevron right">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <polyline points="9 6 15 12 9 18"></polyline>
          </svg>
        </button>
      </div>
      <div className='projects-carousel-select'>
        {projects.map((project, index) => {
          return (
            <div key={index} >
              <button className='project-select-button' onClick={() => setComponentIndex(index)}>
                <ProjectComponentSelect img={project.image} alt={project.alt} />
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}