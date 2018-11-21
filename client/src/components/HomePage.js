import React, { Component } from 'react';
import Spotify from "spotify-web-api-js";

const spotifyWebApi = new Spotify();

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
            <div>
                <h1>Hello from Home</h1>
            </div>
        );
    }
}

export default HomePage;