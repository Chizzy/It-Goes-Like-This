import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spotify from "spotify-web-api-js";
import styled from "styled-components";

const spotifyWebApi = new Spotify();

const NavBarStyle = styled.div`
@import url("https://fonts.googleapis.com/css?family=Monoton");
  display: flex;
  background-color: black;
  justify-content: space-evenly;
  font-family: 'Monoton', cursive;
  font-size: 2rem;
  text-align: center;
   a {
     text-decoration: none;
     color: white;
   }
`;

class NavBar extends Component {
  constructor() {
    super();
    const params = localStorage.getItem("token");
    this.state = {
      loggedIn: params ? true : false,
      user: {
        id: "",
        name: ""
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
          id: response.id,
          name: response.display_name
        }
      });
    });
  };

  render() {
    return (
      <NavBarStyle>
        <div>
        <img src="./images/favicon.ico" width="45" height="45" alt="logo" />
          <Link to="/">
            It Goes Like This
          </Link>
        </div>
        {this.state.loggedIn ? (
          <Link to="/search">
            Search for Song
          </Link>
        ) : (
          <a
            href="http://localhost:8888/login"
            className="btn btn-success btn-sm"
            role="button"
          >
            <img src="./images/spotify-logo.png" width="25" height="25" alt="spotify-logo" />
            Log In with Spotify
          </a>
        )}
        {this.state.loggedIn ? (
          <Link to={`/user/${this.state.user.id}`}>
            Search History
          </Link>
        ) : null}
      </NavBarStyle>
    );
  }
}

export default NavBar;
