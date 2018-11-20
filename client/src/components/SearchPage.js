import React, { Component } from "react";
import axios from "axios";
import SearchResults from './SearchResults'
import Spotify from "spotify-web-api-js";

const spotifyWebApi = new Spotify();

class SearchPage extends Component {
    constructor() {
        super();
        const params = localStorage.getItem("token");
        this.state = {
          loggedIn: params ? true : false,
          user: {
            id: "",
            name: ''
          },
        search: '',
        results: []
        };
        if (params) {
          spotifyWebApi.setAccessToken(params);
        }
      }

      getUser = () => {
        spotifyWebApi.getMe().then(response => {
          this.setState({
            user: {
              id: response.id,
            }
          });
        });
      };

  handleSearchInput = event => {
    const name = event.target.name;
    const newState = { ...this.setState };
    newState[name] = event.target.value;
    this.setState(newState);
  };

  handleSubmit = event => {
    event.preventDefault();
    const token = '';
    const search = this.state.search.replace(/\s/, "%20");
    const url = `https://api.genius.com/search?q=${search}&access_token=${token}`;
    axios.get(url).then(response => {
      const results = response.data.response.hits
      this.setState({results: results})
    }).catch(err => {
        console.log(err)
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="search"
              placeholder="Enter lyrics here..."
              value={this.state.search}
              onChange={this.handleSearchInput}
            />
            <button type="submit">Search</button>
          </div>
          <div>
              <SearchResults results={this.state.results} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchPage;
