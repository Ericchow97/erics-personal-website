import React from 'react'

interface IProps {
  href?: string,
  children: React.ReactElement
  target?: string,
  classNames?: string,
  onClick?: (e: React.MouseEvent) => void
}

export const AnchorButton = ({ children, href, target, classNames, onClick}: IProps) => {
  return (
    <a className={`anchor-button ${classNames}`} href={href} target={target} onClick={onClick}>
      {children}
    </a>
  )
}