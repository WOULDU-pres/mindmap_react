import React from 'react';
import { Link, Route, Routes, Outlet } from 'react-router-dom';
import Issue1 from '../MakingIssue/Issue1';
import Issue2 from '../MakingIssue/Issue2';
import Issue3 from '../MakingIssue/Issue3';
import Issue4 from '../MakingIssue/Issue4';
import './MakingIssue.css';

function MakingIssue() {
  return (
    <div className="making-issue-container">
      <div className="issue-navigation">
        <h2>Making Issue</h2>
        <Link to="/making-issue/issue1" className="issue-link">
          Issue 1
        </Link>
        <Link to="/making-issue/issue2" className="issue-link">
          Issue 2
        </Link>
        <Link to="/making-issue/issue3" className="issue-link">
          Issue 3
        </Link>
        <Link to="/making-issue/issue4" className="issue-link">
          Issue 4
        </Link>
      </div>
      <div className="issue-content">
        <Routes>
          <Route path="issue1" element={<Issue1 />} />
          <Route path="issue2" element={<Issue2 />} />
          <Route path="issue3" element={<Issue3 />} />
          <Route path="issue4" element={<Issue4 />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
}

export default MakingIssue;
