import React from 'react';
import {createRoot} from 'react-dom/client';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Contents from './pages/Contents';
import Forums from './pages/Forums';
import Home from './pages/Home';
import Goat from './pages/Goat';
import Brownsberry from './pages/Brownsberry';

const container = document.getElementById('root');
const root = createRoot(container);

// FOR FUTURE HIDDEN PAGES
const hiddenNavbarRoutes = ["/goat", "/future1", "/future2"];

function Layout({ children }) {
  const location = useLocation();
  const hideNavbar = hiddenNavbarRoutes.includes(location.pathname);
  return (
    <div>
      {!hideNavbar && <Navbar />}
      {children}
    </div>
  );
}

root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/goat" element={<Goat />} />
          <Route path="/brownsberrycounty" element={<Brownsberry />} />
          {/* FOR NEW ROUTHES ADD HERE */}
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
);
