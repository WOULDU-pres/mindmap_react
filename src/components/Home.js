import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-h1" v>
        Welcome to Hyunwoo's Playground
      </div>
      <div className="home-h2" v>
        Let's <span className="highlight">Brain</span>storm ideas with AI
      </div>
      <div className="home-buttons">
        <Link to="/mindmap">
          <button className="home-button">Let's go</button>
        </Link>
        <Link to="/who-is-hyunwoo">
          <button className="home-button">Who is Hyunwoo?</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
