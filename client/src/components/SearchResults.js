import React, { Component } from "react";
import Spotify from 'spotify-web-api-js'
import axios from 'axios'

const spotifyWebApi = new Spotify()

class Results extends Component {
    constructor() {
        super()
        const params = localStorage.getItem("token")
        this.state = {
            loggedIn: params.access_token ? true : false,
            results: []
        }
        if (params) {
            spotifyWebApi.setAccessToken(params)
        }
    }

//     getTrack = (index) => {
//     const token = localStorage.getItem('token')
//     let findSong = this.props.results[index].result.title
//     const query = findSong.replace(/\s/, "%20")
//     const url = `https://api.spotify.com/v1/search?q=${query}&type=artist,track,album`
//     axios.get(url, {
//         headers: {Authorization: `Bearer ${token}`}
//     }).then((response) => {
//         console.log(response.data.tracks.items)
//     })
// }

  render() {
    const results = this.props.results.map((result, i) => {
      return (
      <div key={i}>
        <img src={result.result.primary_artist.image_url} alt={result.result.title} />
        <a><h2 onClick={()=>this.getTrack(i)}>{result.result.title}</h2></a>
        <h3>{result.result.primary_artist.name}</h3>
      </div>
      )
    });
    return (
    <div>
    {results}
    </div>
    );
  }
}

export default Results;
