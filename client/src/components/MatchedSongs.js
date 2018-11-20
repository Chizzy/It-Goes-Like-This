import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js'
import axios from 'axios'

const spotifyWebApi = new Spotify()

class MatchedSongs extends Component {
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

    getTrack = (index) => {
        const token = localStorage.getItem('token')
        let findSong = this.props.results[index].result.title
        const query = findSong.replace(/\s/, "%20")
        const url = `https://api.spotify.com/v1/search?q=${query}&type=track`
        axios.get(url, {
            headers: {Authorization: `Bearer ${token}`}
        }).then((response) => {
            console.log(response.data.tracks.items)
        })
    }
    
    render() {
        // const matchedSongs = this.props.results.map((song, i) => {
        //     return (
        //     <div key={i}>
        //       <img src={} alt={} />
        //       <a  target="_blank"><h2 ></h2></a>
        //       <h3></h3>
        //     </div>
        //     )
        //   });
        return (
            <div>
                {/* {matchedSongs} */}
            </div>
        );
    }
}

export default MatchedSongs;