import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import Graph from './componets/Graph'
import Home from './pages/Home'
import HomeEN from './pages/HomeEN'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/EN">
          <HomeEN></HomeEN>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
