src/App.js;
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import InstructorDashboard from './components/InstructorDashboard';
import StudentDashboard from './components/StudentDashboard';
import ContentCreatorDashboard from './components/ContentCreatorDashboard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/dashboard/admin" component={AdminDashboard} />
          <Route path="/dashboard/instructor" component={InstructorDashboard} />
          <Route path="/dashboard/student" component={StudentDashboard} />
          <Route path="/dashboard/content-creator" component={ContentCreatorDashboard} />
        </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
