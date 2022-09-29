import React, { useState } from 'react'
import { Burger, Box } from '@mantine/core';
import { NavigationButton } from './NavigationButton';
import { ColorToggle } from './ColorToggle';


export const Navigation = () => {
  const [opened, setOpened] = useState(false)

  const handleOpen = () => {
    if (opened) document.querySelector('.side-nav-bar')?.classList.remove('open')
    else document.querySelector('.side-nav-bar')?.classList.add('open')
    setOpened((state) => !state)
  }

  //TODO: Logo

  return (
    <>
      <div className='nav-burger'>
        <Burger
          opened={opened}
          onClick={handleOpen}
        />
      </div>
      <div className='side-nav-bar'>
        <Box className='nav-container'>
          <div className='nav-border'>
            <ColorToggle />
          </div>
          <NavigationButton text='Home' onClickFunc={handleOpen} />
          <NavigationButton text='About' onClickFunc={handleOpen} />
          <NavigationButton text='Projects' onClickFunc={handleOpen} />
          <NavigationButton text='Contact' onClickFunc={handleOpen} />
        </Box>
      </div>
    </>
  )
}