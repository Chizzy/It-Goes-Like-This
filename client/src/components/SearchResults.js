import React, { Component } from "react";
import Spotify from "spotify-web-api-js";
import axios from "axios";
import styled from "styled-components";

const spotifyWebApi = new Spotify();

const CardStyle = styled.div`
  color: black;
  width: 275px;
  margin-top: 2rem;
  a {
    text-decoration: none;
    color: black;
  }
  h2:hover {
    text-shadow: 5px 5px #85ffc7;
  }
`;

class Results extends Component {
  constructor() {
    super();
    const params = localStorage.getItem("token");
    this.state = {
      loggedIn: params.access_token ? true : false,
      showMatchedSongs: false,
      results: [],
      matchedSongs: []
    };
    if (params) {
      spotifyWebApi.setAccessToken(params);
    }
  }

  getTrack = index => {
    const token = localStorage.getItem("token");
    let findSong = this.props.results[index].result.title;
    const query = findSong.replace(/\s/, "%20");
    const url = `https://api.spotify.com/v1/search?q=${query}&type=artist,track,album`;
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        const matchedSongs = response.data.tracks.items;
        this.setState({ matchedSongs: matchedSongs });
      });
    this.setState({ showMatchedSongs: !this.state.showMatchedSongs });
  };

  render() {
    const results = this.props.results.map((result, i) => {
      return (
        <CardStyle className="card" key={i}>
          <img
            className="card-img-top"
            src={result.result.primary_artist.image_url}
            alt={result.result.title}
            width="275"
            height="275"
          />
          <div className="card-body">
            <h2 onClick={() => this.getTrack(i)} className="card-title">
              {result.result.title}
            </h2>
            <h3 className="card-subtitle mb-2 text-muted">
              {result.result.primary_artist.name}
            </h3>
          </div>
        </CardStyle>
      );
    });

    const matchedSongs = this.state.matchedSongs.map((song, i) => {
      return (
        <CardStyle className="card" key={i}>
          <img
            className="card-img-top"
            src={song.album.images[0].url}
            alt={song.name}
          />
          <div className="card-body">
            <a
              href={song.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="card-title">{song.name}</h2>
            </a>
            <h3 className="card-subtitle mb-2 text-muted">
              {song.artists[0].name}
            </h3>
          </div>
        </CardStyle>
      );
    });

    return (
      <div>
        {this.state.showMatchedSongs ? (
          <div>
            <h1>Matched Songs</h1>
            <div className="d-flex flex-wrap justify-content-center justify-content-around">
              {matchedSongs}
            </div>
          </div>
        ) : (
          <div>
            <h1>Results of Searched Lyrics</h1>
            <div className="d-flex flex-wrap justify-content-center justify-content-around">
              {results}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Results;
