import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spotify from "spotify-web-api-js";
import styled from "styled-components";

const spotifyWebApi = new Spotify();

const NavBarStyle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Fredoka+One|Monoton");
  display: flex;
  background-color: black;
  justify-content: space-evenly;
  font-family: "Monoton", cursive;
  font-size: 2rem;
  text-align: center;
  padding: 15px;
  a {
    text-decoration: none;
    color: white;
  }
`;

const Logo = styled.div`
  a {
    margin-left: 10px;
  }
`;

const SpotifyButton = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Fredoka+One|Monoton");
  font-family: "Fredoka One", cursive;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    margin-left: 5px;
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
        <Logo>
          <img src="./images/favicon.ico" width="45" height="45" alt="logo" />
          <Link to="/">It Goes Like This</Link>
        </Logo>
        {this.state.loggedIn ? (
          <Link to="/search">Search for Song</Link>
        ) : (
          <SpotifyButton className="btn btn-success btn-sm" role="button">
            <img
              src="./images/spotify-logo.png"
              width="25"
              height="25"
              alt="spotify-logo"
            />
            <a href="https://spotify-auth-backend.herokuapp.com/login">
              Log In with Spotify
            </a>
          </SpotifyButton>
        )}
        {this.state.loggedIn ? (
          <Link to={`/user/${this.state.user.id}`}>Search History</Link>
        ) : null}
      </NavBarStyle>
    );
  }
}

export default NavBar;
