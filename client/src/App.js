import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";
import SearchPage from "./components/SearchPage";
import NavBar from "./components/NavBar";
import Spotify from "spotify-web-api-js";
import "./App.css";

const spotifyWebApi = new Spotify();

class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true : false,
      user: {
        id: ""
      }
    };
    if (params.access_token) {
      spotifyWebApi.setAccessToken(params.access_token);
    }
  }

  getHashParams = () => {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  };

  componentDidMount() {
    this.getUser();
    this.getToken();
  }

  getUser = () => {
    spotifyWebApi.getMe().then(response => {
      console.log(response)
      this.setState({
        user: {
          id: response.id
        }
      });
    });
  };

  getToken = () => {
    const params = this.getHashParams();
    const token = "token";
    localStorage.setItem(token, params.access_token);
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route
              exact
              path={`/user/${this.state.user.id}`}
              component={UserPage}
            />
            <Route exact path="/search" component={SearchPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
