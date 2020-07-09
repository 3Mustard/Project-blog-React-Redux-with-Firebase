import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Components
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import CreateProject from './components/projects/CreateProjects';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Profile from './components/userProfiles/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route  exact path='/' component={Dashboard} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
          <Route path='/user/:id' component={Profile} />
          <Route path='/new/project' component={CreateProject} />
          <Route path='/project/:id' component={ProjectDetails} /> 
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
