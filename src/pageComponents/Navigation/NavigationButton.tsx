import React from 'react'

interface IProps {
  text: string;
  onClickFunc: () => void
}

export const NavigationButton = ({ text, onClickFunc}: IProps) => {
  return (
    <>
      <a className='navigation-button nav-border' href={`#${text}`} onClick={onClickFunc}>{text}</a>
    </>
  )
}

