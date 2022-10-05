import { useState } from 'react';
import './App.css';
import { Home, About, Projects, Contact, LoadingPage } from './pages'
import { ThemeContext, ContactForm } from './pageComponents/General';

//TODO: Mobile friendlty
const App = () => {
  const [isDark, setIsDark] = useState(true)
  const [showContactForm, setShowContactForm] = useState(false)

  const changeTheme = (bool: boolean) => {
    if (bool) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
    setIsDark(bool)
  }

  const handleContactClick = (e: React.MouseEvent) => {
    const htmlSelector = document.querySelector('html')
    if (!htmlSelector) return
    if (!showContactForm) {
      htmlSelector.style.overflow = 'hidden'
    } else {
      if (!(e.target as Element).classList.contains('contact-form-close')) return
      htmlSelector.style.overflow = 'visible'
    }
    setShowContactForm(state => !state)
  }

  //TODO: Update ICO
  //TODO: update README
  //TODO: test performance & rerenders
  return (
    <>
      {/* <LoadingPage /> */}
      <div className="App">
        <ThemeContext.Provider value={{ isDark, changeTheme, handleContactClick }}>
          <Home />
          <About />
          <Projects />
          <Contact />
          <ContactForm show={showContactForm} handleContactClick={handleContactClick} />
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
