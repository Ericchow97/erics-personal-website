import React from 'react'
import { IDEText, IDETabs, IDETitleBar } from './CustomIDEComponents'

interface IProps {
  inView: boolean
}

export const CustomIDE = ({ inView }: IProps) => {
  return (
    <>
      <div className='custom-ide'>
        <div className='custom-ide-title-bar-container'>
          <IDETitleBar />
        </div>
        <div className='custom-ide-tab-container'>
          <IDETabs />
        </div>
        {inView && <IDEText />}
      </div>
    </>
  )
}