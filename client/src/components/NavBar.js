import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to="/">It Goes Like This</Link>
        <Link to="/search">Search for Song</Link>
        <a href="http://localhost:8888/login">Log In with Spotify</a>
        <Link to='/user/:id'>Profile</Link>
        {/* <Link>Sign Up</Link> */}
      </div>
    );
  }
}

export default NavBar;
