import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Home, Recipe} from './pages'

const App = () => {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/receipe/:id">
              <Recipe />
            </Route>
            <Route path="/category/:id">
              <Home />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
