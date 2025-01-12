import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import NotLoggedInDesktop from './pages/NotLoggedInDesktop';
import LoggedInUserScrolledLocation from './pages/LoggedInUserScrolledLocation';
import LoggedInUserScrolledFollow from './pages/LoggedInUserScrolledFollow';

function App() {
  // Define the state at the App level
  const [userLoggedIn, setUserLoggedIn] = useState("False");

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={<Home userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />} 
          />
          <Route 
            path="/not-logged-in" 
            element={<NotLoggedInDesktop userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />} 
          />
          <Route 
            path="/logged-in-location" 
            element={<LoggedInUserScrolledLocation userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />} 
          />
          <Route 
            path="/logged-in-follow" 
            element={<LoggedInUserScrolledFollow userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
