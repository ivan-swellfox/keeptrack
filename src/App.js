import React from 'react';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
 import { Provider } from 'react-redux';
 import { store } from './state';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import HomePage from './home/HomePage';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/" exact className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects/" className="button rounded">
          Projects
        </NavLink>
      </header>
       <div className="container">
         <Switch>
           <Route path="/" exact component={HomePage} />
           <Route path="/projects" exact component={ProjectsPage} />
         </Switch>
       </div>
    </Router>
    </Provider>
  );
};

export default App;
