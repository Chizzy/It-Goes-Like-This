import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import UserPage from './components/UserPage'
import SearchPage from "./components/SearchPage";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/user/:id" component={ UserPage } />
            <Route exact path='/search' component={ SearchPage } />
            <Route path="/" component={ HomePage } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
