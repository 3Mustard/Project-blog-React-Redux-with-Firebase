import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Component Imports 
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route  exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
