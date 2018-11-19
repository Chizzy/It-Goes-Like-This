import React, { Component } from "react";
import Spotify from "spotify-web-api-js";

const spotifyWebApi = new Spotify();

class UserPage extends Component {
  constructor() {
    super();
    const params = localStorage.getItem("token");
    this.state = {
      loggedIn: params ? true : false,
      user: {
        id: "",
        name: "Testing",
        image: [{}],
        playlist: []
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
