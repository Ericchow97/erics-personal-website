import React from 'react'
import PropTypes from 'prop-types';
import { Image, Anchor, Button, Grid, Text, Center, Group, Space } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { ChevronRight, BrandGithub } from 'tabler-icons-react'
import { SwitchTransition, CSSTransition } from 'react-transition-group';

interface IconsType {
  [key: string]: string
}

const Icons: IconsType = {
  AntD: require('../../static/Logos/antd-icon-light.png'),
  AWS: require('../../static/Logos/aws-icon-light.png'),
  Django: require('../../static/Logos/django-icon-light.png'),
  GraphQL: require('../../static/Logos/graphql-icon-light.png'),
  Heroku: require('../../static/Logos/heroku-icon-light.png'),
  Jest: require('../../static/Logos/jest-icon-light.png'),
  NextJS: require('../../static/Logos/next-icon-light.png'),
  PostgreSQL: require('../../static/Logos/postgresql-icon-light.png'),
  React: require('../../static/Logos/react-icon-light.png'),
  SendGrid: require('../../static/Logos/sendgrid-icon-light.png'),
  Shopify: require('../../static/Logos/shopify-icon-light.png'),
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
  techStack: string[]
}

export const ProjectComponent = (props: IProps) => {
  const { hovered, ref } = useHover();

  return (
    <>
      <Text size='xl' weight={700} align='left'>{props.name}</Text>
      <Grid >
        <Grid.Col span={3} >
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
        <Grid.Col span={9}>
          <div style={{ textAlign: 'left' }}>
            <Text>{props.description}</Text>
            <Space h="xs" />
            <Text weight={700}>Tech Stack</Text>
            <Group>
              {props.techStack.map(icon => {
                return (
                  <div key={icon}>
                    <Image src={Icons[icon]} height='50px' ></Image>
                  </div>
                )
              })}
            </Group>
          </div>
        </Grid.Col>
      </Grid>
      <Space h="md" />
      <Group position='right'>
        {props.githubWebsite && (
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
}