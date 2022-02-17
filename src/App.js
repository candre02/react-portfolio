import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import HomePage from './components/HomePage';

import {Route, BrowserRouter as Router} from "react-router-dom";




function App() {
  return (
      <Router>
      <Nav />
        <Route exact path="/" component={HomePage}  />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
      </Router>
  
  );
}

export default App
