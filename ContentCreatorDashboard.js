import React from 'react';
import { Link } from 'react-router-dom';

function ContentCreatorDashboard() {
  return (
    <div>
      <h1>Content Creator Dashboard</h1>
      <ul>
        <li>
          <Link to="/dashboard/content-creator/courses">My Courses</Link>
        </li>
        <li>
          <Link to="/dashboard/content-creator/content">My Content</Link>
        </li>
        <li>
          <Link to="/dashboard/content-creator/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default ContentCreatorDashboard;