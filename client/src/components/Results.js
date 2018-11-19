import React, { Component } from "react";

class Results extends Component {
  state = {
      results: [{
        lyricsUrl: "",
        title: "",
        artist: {
          image: "",
          name: ""
        }
      }]
  };
  render() {
    const results = this.props.results.map((result, i) => {
        console.log(this.props.results)
      return (
      <div key={i}>
        <img src={result.result.primary_artist.image_url} alt={result.result.title} />
        <div>{result.result.title}</div>
        <div>{result.result.primary_artist.name}</div>
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
