import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spotify from "spotify-web-api-js";
import axios from 'axios'

const spotifyWebApi = new Spotify();

class NavBar extends Component {
  constructor() {
    super();
    const params = localStorage.getItem("token");
    this.state = {
      loggedIn: params ? true : false,
      user: {
        id: "",
        name: ''
      }
    };
    if (params) {
      spotifyWebApi.setAccessToken(params);
    }
  }

  componentWillMount() {
    this.getUser();
  }

  getUser = () => {
    spotifyWebApi.getMe().then(response => {
      this.setState({
        user: {
          id: response.id,
          name: response.display_name
        }
      });
    });
  };

getPlayedTracks = () => {
  spotifyWebApi.getMyRecentlyPlayedTracks().then((response) => {
    const token = localStorage.getItem('token')
    axios.get('https://api.spotify.com/v1/me/player/recently-played', {
      headers: { Authorization: `Bearer ${token}` }
    })
  })
}

  render() {
    return (
      <div>
        <Link to="/">It Goes Like This</Link>
        {this.state.loggedIn ? null : (<a href="http://localhost:8888/login">Log In with Spotify</a>)}
        <Link to="/search">{this.state.loggedIn ? 'Search for Song' : null}</Link>
        <Link to={`/user/${this.state.user.id}`}>{this.state.loggedIn ? `${this.state.user.name}'s Profile` : null}</Link>
        {/* <Link>Sign Up</Link> */}
      </div>
    );
  }
}

export default NavBar;
