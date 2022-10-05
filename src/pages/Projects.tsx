import { Container,  Space } from '@mantine/core';
import { ProjectsCarousel } from '../pageComponents/Projects';
import { useInView } from 'react-intersection-observer';

export const Projects = () => {

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })


  // TODO: Create 3d Transition for tech stack used
  //TODO: make projects hero & scrollable
  //TODO: have different animations to each project
  return (
    <>
      <Container id="Projects" ref={ref} className='projects-container' >
        <h3 className={`section-header ${inView && 'animate-header'}`}>Projects</h3>
        <ProjectsCarousel />
      </Container>
    </>
  )
}