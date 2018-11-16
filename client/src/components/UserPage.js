import React, { Component } from 'react';
import axios from 'axios'

class UserPage extends Component {
    state = {
        user: {

        }
    }

    render() {
        return (
            <div>
                <div>{this.state.user.}</div>
                <div>{this.state.user.display_name}</div>
            </div>
        );
    }
}

export default UserPage;