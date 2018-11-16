import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import LogIn from "./components/LogIn";
import UserPage from './components/UserPage'
import NavBar from "./components/NavBar";
import { createGlobalStyle } from "styled-components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/user/:id" component={ UserPage } />
            <Route path="/" component={ HomePage } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
