import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

function Main({ children }) {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/' && <Navbar />}
      {children}
    </div>
  );
}

export default Main;
