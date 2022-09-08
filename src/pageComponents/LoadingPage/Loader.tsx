import React, { useState } from "react";

export const Loader = () => {
  const [inputText, changeInputText] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeInputText(event.target.value)
    if (event.target.value === 'npm start') {
      event.target.disabled = true
      document.querySelector('.loading-animation')?.classList.add('start')

      // update the terminal text
      setTimeout(() => {
        document.querySelectorAll('.terminal-text.line').forEach((elem, index) => {
          setTimeout(() => elem.classList.add('start'), 1000 * index)
        })
      }, 2000)

      // update status 
      setTimeout(() => {
        const ref = document.querySelector(".status-svg")
        ref?.classList.add('online');
        (ref?.nextSibling as HTMLElement).innerText = 'Online'

      }, 5500)

      // loading bar finish animation
      setTimeout(() => document.querySelector(".finish-loading-bar")?.classList.add('start'), 6000)

      // fade out animation
      setTimeout(() => {
        document.querySelector(".loading-top")?.classList.add('start')
        document.querySelector(".loading-bottom")?.classList.add('start')
        setTimeout(() => document.querySelector(".loader")?.classList.add('hide'), 2000)
      }, 8000)
    }
  }

  //TODO: be able to type anywhere to start the server 
  //TODO: Create logo

  return (
    <>
      <div className='loader'>
        <div className='loading-top'>
          <div className="flex-container" style={{ justifyContent: 'space-between', padding: '0px 16px' }}>
            <h1>Eric Chow Logo</h1>
            <div className="flex-container" style={{ alignItems: 'center' }}>
              <h3>Server Status:</h3>
              <svg viewBox="0 0 2 2" xmlns="http://www.w3.org/2000/svg" className="status-svg" height='15px' width='15px'>
                <circle cx="1" cy="1" r="1" />
              </svg>
              <h3>Offline</h3>
            </div>
          </div>
          <h1>Welcome to my personal website!</h1>
          <div>
            <p>Type 'npm start' to start the server!</p>
            <div style={{ width: '400px', margin: '0 auto' }}>
              <div className="flex-container">
                <p className="terminal-text" style={{ margin: 0 }}>~$ </p>
                <input type='text' className='terminal-input' value={inputText} onChange={handleChange}></input>
              </div>
              <div className="loading-bar">
                <div className="loading-animation"></div>
                <div className="finish-loading-bar"></div>
              </div>
            </div>
          </div>
        </div>
        <div className='loading-bottom'>
          <div style={{ width: '400px', margin: '0 auto' }}>
            <p className="terminal-text line">{">"} Loading Content...</p>
            <p className="terminal-text line">{">"} Loading Images...</p>
            <p className="terminal-text line">{">"} Running Scripts...</p>
            <p className="terminal-text line">{">"} Done!</p>
          </div>
        </div>
      </div>
    </>
  )
}