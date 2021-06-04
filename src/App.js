import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Home, Receipe} from './pages'

const App = () => {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/receipe/:id">
              <Receipe />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
