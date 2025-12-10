import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './Navbar';
import Contents from './Contents';
import Forums from './Forums';
import Home from './Home';

ReactDOM.render(
  <React.StrictMode>
        <Router>
      <div>
        {/* Navbar Routes so I 1) can have an integrated Navbar and 2) can change their styles based on what site is active, more of this contained in Navbar.js, but nothing exhilirating or needed for the project */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/forums" element={<Forums />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
