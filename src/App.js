import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Component Imports 
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route  exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails}/>
          <Route path='/singin' component={SignIn} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
