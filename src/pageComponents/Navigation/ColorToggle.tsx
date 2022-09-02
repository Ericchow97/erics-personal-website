import React, { useState, useEffect } from 'react'

export const ColorToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark])

  return (
    <>
      <input type="checkbox" className='color-toggle' onChange={e => setIsDark(e.target.checked)} />
    </>
  )
}