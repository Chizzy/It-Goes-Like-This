import React, { Component } from "react";
import Spotify from "spotify-web-api-js";
import axios from "axios";

const spotifyWebApi = new Spotify();

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

  refreshPage =() =>{ 
    window.location.reload(); 
}

  render() {
    const results = this.props.results.map((result, i) => {
      return (
        <div className='card' key={i}>
          <img className="card-img-top"
            src={result.result.primary_artist.image_url}
            alt={result.result.title}
          />
            <h2 onClick={() => this.getTrack(i)}>
              {result.result.title}
            </h2>
          <h3>{result.result.primary_artist.name}</h3>
        </div>
      );
    });

    const matchedSongs = this.state.matchedSongs.map((song, i) => {
      return (
        <div key={i}>
          <img src={song.album.images[0].url} alt={song.name} />
          <a onClick={this.refreshPage} href={song.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            <h2>{song.name}</h2>
          </a>
          <h3>{song.artists[0].name}</h3>
        </div>
      );
    });

    return (
      <div>
        {this.state.showMatchedSongs ?
        (<div>
            <h1>Matched Songs</h1>
            {matchedSongs}
          </div>) :
          (<div>
            <h1>Results of Searched Lyrics</h1>
            {results}
          </div>)}
      </div>
    );
  }
}

export default Results;
