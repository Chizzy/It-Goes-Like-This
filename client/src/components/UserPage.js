import React, { Component } from "react";
import Spotify from "spotify-web-api-js";
import styled from "styled-components";

const spotifyWebApi = new Spotify();

const UserStyles = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Fredoka+One|Monoton");
  font-family: "Fredoka One", cursive;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserImage = styled.div`
  margin-top: 2rem;
`;

const UserName = styled.div`
  margin-top: 2rem;
`;

class UserPage extends Component {
  constructor() {
    super();
    const params = localStorage.getItem("token");
    this.state = {
      loggedIn: params ? true : false,
      user: {
        id: "",
        name: "",
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
      <UserStyles>
        <UserImage>
          <img src={this.state.user.image} alt="user" />
        </UserImage>
        <UserName>{this.state.user.name}'s Search History</UserName>
      </UserStyles>
    );
  }
}

export default UserPage;
