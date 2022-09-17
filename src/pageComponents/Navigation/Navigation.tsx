import React, { useState } from 'react'
import { Burger, Box } from '@mantine/core';
import { NavigationButton } from './NavigationButton';


export const Navigation = () => {
  const [opened, setOpened] = useState(false)

  const handleOpen = () => {
    if (opened) document.querySelector('.side-nav-bar')?.classList.remove('open')
    else document.querySelector('.side-nav-bar')?.classList.add('open')
    setOpened((state) => !state)
  }

  return (
    <>
      <div className='nav-burger'>
        <Burger
          opened={opened}
          onClick={handleOpen}
        />
      </div>
      <div className='side-nav-bar'>
        <Box sx={{ maxWidth: 250, width: "100%", borderTop:"rgba(0, 0, 0, 0.2) solid 1px"}}>
          <NavigationButton text='Home' />
          <NavigationButton text='About' />
          <NavigationButton text='Projects' />
          <NavigationButton text='Contact' />
        </Box>
      </div>
    </>
  )
}

// export const Navigation = () => {

//   //TODO: inlcude logo
//   return (
//     <>
//     <Container>
//       <Grid grow align="center">
//         <Grid.Col span={1}>
//           <Button variant="subtle" size="xl" uppercase compact>
//             Home
//           </Button>
//         </Grid.Col>
//         <Grid.Col span={1}>
//           <Button variant="subtle" size="xl" uppercase compact>
//             About
//           </Button>
//         </Grid.Col>
//           <Grid.Col span={1}>
//           <Button variant="subtle" size="xl" uppercase compact>
//             Projects
//           </Button>
//         </Grid.Col>
//         <Grid.Col span={1}>
//           <Button variant="subtle" size="xl" uppercase compact>
//             Contact
//           </Button>
//         </Grid.Col>
//         <Grid.Col span={1}>
//           <ColorToggle />
//         </Grid.Col>
//       </Grid>
//     </Container>
//     </>
//   )

// }