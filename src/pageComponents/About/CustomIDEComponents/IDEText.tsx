import React, { useEffect, useState } from 'react'
import { IDELine } from './IDELine'

export const IDEText = () => {
  // define minimum number of line numbers
  const [lineNumbers, setLineNumbers] = useState<number[]>([])

  // determine new line items once the window is resized.
  useEffect(() => {
    const handleResize = () => {
      // find height of content -32 px for padding
      const customIde = document.querySelector('.custom-ide-about-text-container')
      if (!customIde) return
      const computedProperties = window.getComputedStyle(customIde, null)
      const height = customIde.clientHeight - parseInt(computedProperties.getPropertyValue('padding')) * 2
      const fontSize = parseInt(computedProperties.getPropertyValue('font-size')) + 5

      const newLineNumbers = Math.round(height / fontSize)
      console.log(newLineNumbers)

      // define minimum number of line numbers
      const lineNumberCopy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

      const difference = newLineNumbers - lineNumberCopy.length
      for (let i = 0; i < difference; i++) lineNumberCopy.push(lineNumberCopy.length + 1)

      setLineNumbers(lineNumberCopy)
    }

    // run once on initialization
    handleResize()
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <>
      <div className='custom-ide-text-container'>
        <div className='custom-ide-about-number-container'>
          {lineNumbers.map(elem => <div className='custom-ide-line-number' key={elem}>{elem}</div>)}
        </div>
        <div className='custom-ide-about-text-container'>
          <IDELine >
            <>
              <div className='typewriter-container'>
                <div className='ide-typewriter' style={{
                  animation: 'typewriter 1.5s steps(25) 0.5s normal both, blinkTextCursor 500ms normal 5'
                }}>
                  <span className='ide-reserved'>import </span>
                  <span className='ide-variable'>React </span>
                  <span className='ide-reserved'>from </span>
                  <span className='ide-string'>{"'react'"}</span>
                </div>
              </div>
            </>
          </IDELine>
          <IDELine>
            <p></p>
          </IDELine>
          <IDELine >
            <>
              <div className='typewriter-container'>
                <div className='ide-typewriter' style={{
                  animation: 'typewriter 1.5s steps(31) 2.5s normal both, blinkTextCursor 500ms 2.5s normal 4'
                }}>
                  <span className='ide-reserved'>export </span>
                  <span className='ide-js-reserved'>const </span>
                  <span className='ide-react-reserved'>AboutMe </span>
                  <span>= </span>
                  <span className='ide-function'>( ) </span>
                  <span className='ide-js-reserved'>{'=>'} </span>
                  <span className='ide-function'>{'{'}</span>
                </div>
              </div>
            </>
          </IDELine>
          <IDELine textIndent={1}>
            <div className='typewriter-container'>
              <div className='ide-typewriter' style={{
                animation: 'typewriter 500ms steps(8) 4s normal both, blinkTextCursor 500ms 4s normal 3'
              }}>
                <span className='ide-reserved'>return (</span>
              </div>
            </div>
          </IDELine>
          <div className='reveal-rest'>
            <IDELine textIndent={2}>
              <span className='ide-html'>{'<>'}</span>
            </IDELine>
            <IDELine textIndent={3}>
              <>
                <span className='ide-html'>{'<'}</span>
                <span className='ide-js-reserved'>h3</span>
                <span className='ide-html'>{'>'}</span>
                <span>About Me</span>
                <span className='ide-html'>{'</'}</span>
                <span className='ide-js-reserved'>h3</span>
                <span className='ide-html'>{'>'}</span>
              </>
            </IDELine>
            <IDELine textIndent={3}>
              <>
                <span className='ide-html'>{'<'}</span>
                <span className='ide-js-reserved'>p</span>
                <span className='ide-html'>{'>'}</span>
              </>
            </IDELine>
            <IDELine textIndent={4}>
              <span>
                Hi I'm Eric! I'm a self taught full stack developer based in Toronto Canada who has been developing
                React projects for the past 3 years. I designed my personal website with the goal of displaying my deep
                understanding of React and how to build complex, high-performing, and interactive front end solutions.
              </span>
            </IDELine>
            <IDELine textIndent={3}>
              <>
                <span className='ide-html'>{'</'}</span>
                <span className='ide-js-reserved'>p</span>
                <span className='ide-html'>{'>'}</span>
              </>
            </IDELine>
            <IDELine textIndent={3}>
              <>
                <span className='ide-html'>{'<'}</span>
                <span className='ide-js-reserved'>p</span>
                <span className='ide-html'>{'>'}</span>
              </>
            </IDELine>
            <IDELine textIndent={4}>
              <span>
                My journey in full-stack development began when I was intrigued by the endless possibilities that were achievable
                with just a computer. As I continued along my journey and learnt more about the world of computer science; what
                started as a mere curiosity, turned into a passion with a purpose to build solutions that have a positive impact
                on the world around us.
              </span>
            </IDELine>
            <IDELine textIndent={3}>
              <>
                <span className='ide-html'>{'</'}</span>
                <span className='ide-js-reserved'>p</span>
                <span className='ide-html'>{'>'}</span>
              </>
            </IDELine>
            <IDELine textIndent={3}>
              <>
                <span className='ide-html'>{'<'}</span>
                <span className='ide-js-reserved'>p</span>
                <span className='ide-html'>{'>'}</span>
              </>
            </IDELine>
            <IDELine textIndent={4}>
              <span>
                Lets work together to build a better tomorrow today!
              </span>
            </IDELine>
            <IDELine textIndent={3}>
              <>
                <span className='ide-html'>{'</'}</span>
                <span className='ide-js-reserved'>p</span>
                <span className='ide-html'>{'>'}</span>
              </>
            </IDELine>
            <IDELine textIndent={2}>
              <span className='ide-html'>{'</>'}</span>
            </IDELine>
            <IDELine textIndent={1}>
              <span className='ide-reserved'>)</span>
            </IDELine>
            <IDELine>
              <span className='ide-function'>{'}'}</span>
            </IDELine>
          </div>
        </div>
      </div >
    </>
  )
}