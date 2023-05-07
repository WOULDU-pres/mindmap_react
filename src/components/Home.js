import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Hyunwoo's Playground</h1>
      <h2>
        Let's <span className="highlight">Brain</span>storm ideas with AI
      </h2>
      <div className="home-buttons">
        <Link to="/mindmap">
          <button className="home-button">Let's go</button>
        </Link>
        <Link to="/who-is-hyunwoo">
          <button className="home-button">Want to know about the Dev</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
