import React from 'react';
import './App.css';
import { Home, About, Projects, Contact, LoadingPage } from './pages'


//TODO: Mobile friendlty
const App = () => {
  return (
    <div className="App">
      {/* <LoadingPage /> */}
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
