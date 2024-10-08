import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import InstructorDashboard from './InstructorDashboard';
import StudentDashboard from './StudentDashboard';
import ContentCreatorDashboard from './ContentCreatorDashboard';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Switch>
        <Route path="/dashboard/admin" component={AdminDashboard} />
        <Route path="/dashboard/instructor" component={InstructorDashboard} />
        <Route path="/dashboard/student" component={StudentDashboard} />
        <Route path="/dashboard/content-creator" component={ContentCreatorDashboard} />
      </Switch>
    </div>
  );
}

export default Dashboard;