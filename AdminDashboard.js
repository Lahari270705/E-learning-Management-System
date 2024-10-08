import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="/dashboard/admin/users">Manage Users</Link>
        </li>
        <li>
          <Link to="/dashboard/admin/courses">Manage Courses</Link>
        </li>
        <li>
          <Link to="/dashboard/admin/settings">Platform Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminDashboard;