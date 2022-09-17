import React from 'react'

interface IProps {
  text: string
}

export const NavigationButton = ({ text }: IProps) => {
  return (
    <>
      <a className='navigation-button' href={`#${text}`}>{text}</a>
    </>
  )
}

