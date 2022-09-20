import React, { useState } from 'react';
import './App.css';
import { Home, About, Projects, Contact, LoadingPage } from './pages'
import { ThemeDarkContext } from './pageComponents/General/ThemeDarkContext';

//TODO: Mobile friendlty
const App = () => {
  const [isDark, setIsDark] = useState(true)

  const changeTheme = (bool: boolean) => {
    if (bool) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
    setIsDark(bool)
  }

  //TODO: on scroll, animation text to scroll in
  //TODO: Update ICO
  return (
    <>
      {/* <LoadingPage /> */}
      <div className="App">
        <ThemeDarkContext.Provider value={{ isDark, changeTheme }}>
          <Home />
          <About />
          <Projects />
          <Contact />
        </ThemeDarkContext.Provider>
      </div>
    </>
  );
}

export default App;
