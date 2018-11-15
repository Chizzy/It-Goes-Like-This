import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Log In</Link>
        {/* <Link>Profile</Link>
        <Link>Search</Link>
        <Link>Sign Up</Link> */}
      </div>
    );
  }
}

export default NavBar;
