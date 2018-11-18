import React, { Component } from 'react';
import SearchPage from './SearchPage';

class SearchContainer extends Component {
    state = {
        query: '',
        hasSearched: false,
        lyrics: [],
        songs: []
    }

    handleSearchInput = (searchedLyrics) => {
        this.setState({
            query: searchedLyrics
        })
    }

    onSubmitQuery = (searchedLyrics) => {
        const token = 
        const term = searchedLyrics.replace()
        const url = `https://api.genius.com/access_token=${token}/search/lyrics?q=` + term
    }

    render() {
        return (
            <div>
                <SearchPage onSubmitQuery={this.onSubmitQuery} handleSearchInput={this.handleSearchInput} query={this.state.query} />
            </div>
        );
    }
}

export default SearchContainer;