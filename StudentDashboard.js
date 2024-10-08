import React from 'react';
import { Link } from 'react-router-dom';

function StudentDashboard() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <ul>
        <li>
          <Link to="/dashboard/student/courses">My Courses</Link>
        </li>
        <li>
          <Link to="/dashboard/student/assignments">Assignments</Link>
        </li>
        <li>
          <Link to="/dashboard/student/progress">My Progress</Link>
        </li>
      </ul>
    </div>
  );
}

export default StudentDashboard;