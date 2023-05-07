import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hyunwoo from './components/Hyunwoo';
import MakingIssue from './components/MakingIssue';
import Navbar from './components/Navbar';
import Mindmap from './components/Mindmap';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/mindmap" element={<Mindmap />} />
          <Route path="/who-is-hyunwoo" element={<Hyunwoo />} />
          <Route path="/making-issue" element={<MakingIssue />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
