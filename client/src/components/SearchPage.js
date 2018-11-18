import React, { Component } from 'react';

class SearchPage extends Component {

    // handleSubmit = () = {

    // }

    // handleSearchInput = (event) = {
    //     this.props.handleSearchInput(event.target.value)
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter lyrics here..." value={this.props.query} onChange={this.handleSearchInput} />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchPage;