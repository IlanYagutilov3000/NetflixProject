import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import TopSeries from './components/TopSeries';
import About from './components/About';
import PageNotFound from './components/PageNotFound';
import SeriesDetails from './components/SeriesDetails';
import Login from './components/Login';

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true)
  };

  const handleLogout = () => {
    setIsLoggedIn(false)
  };

  return (
    <div className="App">
      <Router>
        {isLoggedIn && <Navbar isLogged={isLoggedIn} onLogout={handleLogout} />}
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          {isLoggedIn &&
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/topseries">
                <Route index element={<TopSeries />} />
                <Route path=":rank" element={<SeriesDetails />} />
              </Route>
              <Route path="/about" element={<About />} />
            </>}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
