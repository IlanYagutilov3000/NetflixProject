import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import TopSeries from './components/TopSeries';
import About from './components/About';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Topseries" element={<TopSeries />}/>
          <Route path="/About" element={<About />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
