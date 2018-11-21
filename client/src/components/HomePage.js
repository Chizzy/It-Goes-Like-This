import React, { Component } from "react";
import Spotify from "spotify-web-api-js";
import styled from "styled-components";

const spotifyWebApi = new Spotify();

const ParallaxSpace = styled.h2`
@import url('https://fonts.googleapis.com/css?family=Fredoka+One|Monoton');
font-family: 'Fredoka One', cursive;
  padding: 200px;
  text-align: center;
  color: white;
  margin: 0;
  font-size: 3rem;
  text-shadow: 8px 8px 8px black;
`;

const Parainner = styled.div`
@import url('https://fonts.googleapis.com/css?family=Fredoka+One|Monoton');
font-family: 'Fredoka One', cursive;
padding: 300px;
text-align: center;
font-size: 3rem;
font-weight: 700;
text-shadow: 8px 8px 8px black;
`

const Para = styled.div`
background: url(https://media.giphy.com/media/y3QOvy7xxMwKI/giphy.gif) fixed;
background-size: 100%;
`

const Para2 = styled.div`
background: url(https://media.giphy.com/media/5bivKwxhVzshNk2Rjw/giphy.gif) fixed;
background-size: 100%;
`

class HomePage extends Component {
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
      console.log(response);
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
      <div>
        <Para>
          <Parainner>
          Do you ever forget the title of a song that you can't get out of your head?
          </Parainner>
        </Para>
        <ParallaxSpace>Guess what...</ParallaxSpace>
        <Para2>
          <Parainner>
          </Parainner>
        </Para2>
      </div>
    );
  }
}

export default HomePage;
