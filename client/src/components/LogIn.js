import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'

class LogIn extends Component {
    state = {
        user: []
    }

    login = () => {
        axios.get("http://localhost:8888").then((response) => {
            this.setState({ user: response.data })
        })
    }

    componentDidMount() {
        this.login()
    }

    render() {
        return (
            <div>
            <button onClick={this.login}>Log In</button>
            </div>
        );
    }
}

export default LogIn;