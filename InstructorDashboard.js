import React from 'react';
import { Link } from 'react-router-dom';

function InstructorDashboard() {
  return (
    <div>
      <h1>Instructor Dashboard</h1>
      <ul>
        <li>
          <Link to="/dashboard/instructor/courses">My Courses</Link>
        </li>
        <li>
          <Link to="/dashboard/instructor/assignments">Assignments</Link>
        </li>
        <li>
          <Link to="/dashboard/instructor/students">My Students</Link>
        </li>
      </ul>
    </div>
  );
}

export default InstructorDashboard;