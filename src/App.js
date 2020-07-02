import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Components
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import CreateProject from './components/projects/CreateProjects';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route  exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} /> 
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/new/project' component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
