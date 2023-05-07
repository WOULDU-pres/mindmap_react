import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/mindmap" className="nav-links">
              Mindmap AI
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/who-is-hyunwoo" className="nav-links">
              Who is Hyunwoo?
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/making-issue" className="nav-links">
              Making Issue
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
