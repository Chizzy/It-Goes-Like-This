import React, { Component } from "react";
import axios from "axios";
import Spotify from "spotify-web-api-js";

const spotifyWebApi = new Spotify();

class UserPage extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true : false,
      user: {
        name: 'Testing',
        image: [{}],
        playlist: []
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

  getUser = () => {
    spotifyWebApi.getUser().then(response => {
      this.setState({
        user: {
          name: response.display_name,
          image: response.images[0].url
        }
      });
    });
  };

  render() {
    return (
      <div>
        <div>
          <img src={this.state.user.image} />
        </div>
        <div>{this.state.user.name}</div>
      </div>
    );
  }
}

export default UserPage;