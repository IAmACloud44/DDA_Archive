import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './Navbar';
import Contents from './Contents';
import Forums from './Forums';
import Home from './Home';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
