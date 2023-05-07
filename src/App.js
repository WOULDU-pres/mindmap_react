import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hyunwoo from './components/Hyunwoo';
import MakingIssue from './components/MakingIssue';
import Home from './components/Home';
import Mindmap from './components/Mindmap';
import Main from './Main';

function App() {
  

  return (
    <Router>
      <Main>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mindmap" element={<Mindmap />} />
            <Route path="/making-issue" element={<MakingIssue />} />
            <Route path="/who-is-hyunwoo" element={<Hyunwoo />} />
          </Routes>
        </div>
      </Main>
    </Router>
  );
}

export default App;
