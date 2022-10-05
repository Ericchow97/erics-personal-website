import React, { useContext } from 'react'
import { ThemeContext } from '../General/ThemeContext'

export const ColorToggle = () => {
  const themeContext = useContext(ThemeContext)

  return (
    <>
      <input type="checkbox" className='color-toggle' checked={themeContext.isDark} onChange={e => themeContext.changeTheme(e.target.checked)} />
    </>
  )
}