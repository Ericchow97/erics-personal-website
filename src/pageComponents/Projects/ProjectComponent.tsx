import { useContext } from 'react'
import PropTypes from 'prop-types';
import { ChevronRight, BrandGithub } from 'tabler-icons-react'
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

interface IProps {
  name: string,
  description: string,
  image: string,
  alt: string,
  techStack: string[],
  website: string,
  githubWebsite?: string,
}

export const ProjectComponent = (props: IProps) => {
  const { isDark } = useContext(ThemeDarkContext)

  //TODO: require alt for pictues
  return (
    <>
      <div className="project-container">
        <h3 className='project-name'>{props.name}</h3>
        <div className='project-item-container'>
          <div className='project-logo-container'>
            <img src={props.image} alt={props.alt} width='100%' />
          </div>
          <div className='project-description-container'>
            <p className='project-description'>{props.description}</p>
            <h3 className='project-tech-stack-title'>Tech Stack</h3>
            <div className='project-tech-stack-container'>
              {props.techStack.map(icon => {
                return (
                  <div key={icon}>
                    <img src={Icons[iconLookup(icon, isDark)]} 
                    className='project-tech-stack-image'></img>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className='project-button-container'>
          <a href={props.githubWebsite} target='_blank' rel='noreferrer' className='project-button-link-wrapper'>
            <button className='project-button github' disabled={!props.githubWebsite}>
              <BrandGithub />
              {props.githubWebsite ? <p>View Source Code</p> : <p>Available Upon Request</p>}
            </button>
          </a>
          <a href={props.website} target='_blank' rel='noreferrer' className='project-button-link-wrapper'>
            <button className='project-button website' disabled={!props.githubWebsite}>
              <p>Visit Website</p>
              <ChevronRight />
            </button>
          </a>
        </div>
      </div>
    </>
  )
}

ProjectComponent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  techStack: PropTypes.array.isRequired,
  website: PropTypes.string.isRequired,
  githubWebsite: PropTypes.string,
}