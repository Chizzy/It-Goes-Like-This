import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spotify from "spotify-web-api-js";

const spotifyWebApi = new Spotify();

class NavBar extends Component {
  constructor() {
    super();
    const params = localStorage.getItem("token");
    this.state = {
      loggedIn: params ? true : false,
      user: {
        id: ""
      }
    };
    if (params) {
      spotifyWebApi.setAccessToken(params);
    }
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    spotifyWebApi.getMe().then(response => {
      this.setState({
        user: {
          id: response.id
        }
      });
    });
  };

  render() {
    return (
      <div>
        <Link to="/">It Goes Like This</Link>
        <Link to="/search">Search for Song</Link>
        <a href="http://localhost:8888/login">Log In with Spotify</a>
        <Link to={`/user/${this.state.user.id}`}>Profile</Link>
        {/* <Link>Sign Up</Link> */}
      </div>
    );
  }
}

export default NavBar;
