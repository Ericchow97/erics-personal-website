import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { Image, Anchor, Button, Grid, Text, Center, Group, Space } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { ChevronRight, BrandGithub } from 'tabler-icons-react'
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { ThemeDarkContext } from '../General/ThemeDarkContext';
import { useInView } from 'react-intersection-observer';

interface IconsType {
  [key: string]: string
}

const Icons: IconsType = {
  AntD: require('../../static/Logos/antd-icon-light.png'),
  AWS: require('../../static/Logos/aws-icon-light.png'),
  Django: require('../../static/Logos/django-icon-light.png'),
  GraphQL: require('../../static/Logos/graphql-icon-light.png'),
  HerokuLight: require('../../static/Logos/heroku-icon-light.png'),
  HerokuDark: require('../../static/Logos/heroku-icon-dark.png'),
  Jest: require('../../static/Logos/jest-icon-light.png'),
  NextJSLight: require('../../static/Logos/nextjs-icon-light.png'),
  NextJSDark: require('../../static/Logos/nextjs-icon-dark.png'),
  PostgreSQLLight: require('../../static/Logos/postgresql-icon-light.png'),
  PostgreSQLDark: require('../../static/Logos/postgresql-icon-dark.png'),
  React: require('../../static/Logos/react-icon-light.png'),
  SendGridLight: require('../../static/Logos/sendgrid-icon-light.png'),
  SendGridDark: require('../../static/Logos/sendgrid-icon-dark.png'),
  ShopifyLight: require('../../static/Logos/shopify-icon-light.png'),
  ShopifyDark: require('../../static/Logos/shopify-icon-dark.png'),
  TypeScript: require('../../static/Logos/typescript-icon-light.png'),
}

interface IProps {
  image: string,
  alt: string,
  website: string,
  websitePreview: string,
  githubWebsite?: string,
  name: string,
  description: string,
  techStack: string[],
  className: string
}

const iconLookup = (icon: string, isDark: boolean) => {
  const icons = {
    AntD: 'AntD',
    AWS: 'AWS',
    Django: 'Django',
    GraphQL: 'GraphQL',
    Heroku: isDark ? 'HerokuDark' : 'HerokuLight',
    Jest: 'Jest',
    NextJS: isDark ? 'NextJSDark' : 'NextJSLight',
    PostgreSQL: isDark ? 'PostgreSQLDark' : 'PostgreSQLLight',
    React: 'React',
    SendGrid: isDark ? 'SendGridDark' : 'SendGridLight',
    Shopify: isDark ? 'ShopifyDark' : 'ShopifyLight',
    TypeScript: 'TypeScript'
  }

  return icons[icon as keyof typeof icons]
}

export const ProjectComponent = (props: IProps) => {
  const { hovered, ref } = useHover();
  const { isDark } = useContext(ThemeDarkContext)

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true
  })

  return (
    <>
      <div ref={inViewRef}>
        <div className={`project-component ${props.className} ${inView && 'animate-project'}`}>
          <Text size='xl' weight={700} align='left'>{props.name}</Text>
          <Grid >
            <Grid.Col span={3} className="project-logo-container">
              <div ref={ref} className="project-logo">
                <SwitchTransition>
                  <CSSTransition
                    key={hovered ? "unhovered" : "hovered"}
                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                    classNames='fade'
                  >
                    {!hovered ? (
                      <Center>
                        <Image
                          radius="md"
                          src={props.image}
                          alt={props.alt}
                        />
                      </Center>
                    ) : (
                      <div className='website-preview'>
                        <div className='bg-image' style={{ backgroundImage: `url(${props.websitePreview})` }}></div>
                      </div>
                    )}
                  </CSSTransition>
                </SwitchTransition>
              </div>
            </Grid.Col>
            <Grid.Col span={9} className="project-text-container">
              <div style={{ textAlign: 'left' }}>
                <Text size='lg'>{props.description}</Text>
                <Space h="xs" />
                <Text weight={700} size='xl'>Tech Stack</Text>
                <Group>
                  {props.techStack.map(icon => {
                    return (
                      <div key={icon}>
                        <Image src={Icons[iconLookup(icon, isDark)]} height='50px' ></Image>
                      </div>
                    )
                  })}
                </Group>
              </div>
            </Grid.Col>
          </Grid>
          <Space h="md" />
          <Group position='right'>
            {props.githubWebsite ? (
              <Anchor href={props.githubWebsite} target="_blank">
                <Button
                  radius="xl"
                  size="md"
                  color="dark"
                  leftIcon={<BrandGithub />}
                  styles={(theme) => ({
                    root: {
                      border: 0,
                      height: 42,
                      paddingLeft: 20,
                      paddingRight: 20,

                      '&:hover': {
                        backgroundColor: theme.fn.darken('#25262b', 0.95),
                      },
                    },
                    leftIcon: {
                      marginRight: 15,
                    },
                  })}
                >
                  View Source Code
                </Button>
              </Anchor>
            ) : (
              <Button
                radius="xl"
                size="md"
                color="dark"
                disabled
                leftIcon={<BrandGithub />}
                styles={(theme) => ({
                  root: {
                    border: 0,
                    height: 42,
                    paddingLeft: 20,
                    paddingRight: 20,
                    backgroundColor: '#25262b !important',
                    color: '#fff !important',

                    '&:hover': {
                      backgroundColor: theme.fn.darken('#25262b', 0.95),
                    },
                  },
                  leftIcon: {
                    marginRight: 15,
                  },
                })}
              >
                Available Upon Request
              </Button>
            )}
            <Anchor href={props.website} target="_blank">
              <Button
                radius="xl"
                size="md"
                variant='outline'
                rightIcon={<ChevronRight />}
                styles={() => ({
                  root: {
                    paddingRight: '8px',
                    background: "linear-gradient(to left, transparent 50%, #1c7ed6 50%) right",
                    backgroundSize: "200% 100%",
                    transition: ".5s ease-out",

                    '&:hover': {
                      backgroundPosition: 'left',
                      color: "white"
                    },
                  },
                  rightIcon: {
                    marginLeft: 0,
                  },
                })}
              >
                Visit Website
              </Button>
            </Anchor>
          </Group>
        </div>
      </div>
    </>
  )

}

ProjectComponent.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  websitePreview: PropTypes.string.isRequired,
  githubWebsite: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired
}