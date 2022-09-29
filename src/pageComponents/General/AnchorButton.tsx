import React from 'react'

interface IProps {
  href: string,
  children: React.ReactElement
  target?: string
}

export const AnchorButton = ({ children, href, target = '_self'}: IProps) => {
  return (
    <a className='anchor-button' href={href} target={target}>
      {children}
    </a>
  )
}