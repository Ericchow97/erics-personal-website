import React, { useState } from 'react'

import { Burger, Box} from '@mantine/core';


export const Navigation = () => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Burger
        opened={opened}
        onClick={() => setOpened((state) => !state)}
      />
      <Box sx={{ maxWidth: 240, width: "100%" }}>
      </Box>
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