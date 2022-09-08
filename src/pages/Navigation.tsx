import React from 'react'
import { Container, Grid, Button } from '@mantine/core';
import { ColorToggle } from '../pageComponents/Navigation';

export const Navigation = () => {

  //TODO: inlcude logo
  return (
    <>
    <Container>
      <Grid grow align="center">
        <Grid.Col span={1}>
          <Button variant="subtle" size="xl" uppercase compact>
            Home
          </Button>
        </Grid.Col>
        <Grid.Col span={1}>
          <Button variant="subtle" size="xl" uppercase compact>
            About
          </Button>
        </Grid.Col>    
          <Grid.Col span={1}>
          <Button variant="subtle" size="xl" uppercase compact>
            Projects
          </Button>
        </Grid.Col>      
        <Grid.Col span={1}>
          <Button variant="subtle" size="xl" uppercase compact>
            Contact
          </Button>
        </Grid.Col>
        <Grid.Col span={1}>
          <ColorToggle />
        </Grid.Col>
      </Grid>
    </Container>
    </>
  )

}