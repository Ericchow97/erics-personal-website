import React, { useContext } from 'react'
import { ThemeDarkContext } from '../General/ThemeDarkContext'

export const ColorToggle = () => {
  const themeContext = useContext(ThemeDarkContext)

  return (
    <>
      <input type="checkbox" className='color-toggle' checked={themeContext.isDark} onChange={e => themeContext.changeTheme(e.target.checked)} />
    </>
  )
}