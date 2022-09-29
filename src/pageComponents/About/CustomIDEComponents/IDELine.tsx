import React from 'react'

interface IProps {
  children: React.ReactElement
  textIndent?: number
}

export const IDELine = ({ children, textIndent }: IProps) => {
  return (
    <div className='custom-ide-text' style={{ paddingLeft: `${textIndent}rem` }}>{children}</div>
  )
} 