import React from 'react';
import './App.css';
import { Home, About, Navigation, Projects, Contact } from './pages'


//TODO: Mobile friendlty
const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
