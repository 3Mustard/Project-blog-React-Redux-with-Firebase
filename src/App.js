import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Component Imports 
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
