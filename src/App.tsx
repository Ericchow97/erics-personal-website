import React from 'react';
import './App.css';
import { Home, About, Navigation, Projects, Contact, LoadingPage } from './pages'


//TODO: Mobile friendlty
const App = () => {
  return (
    <div className="App">
      <Navigation />
      <LoadingPage />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
