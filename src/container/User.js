import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
        };
    }

    componentDidMount() {
        this.setState({user: this.props.user})
    }
    render() {
        console.log(this.state.user)
        return (
            <div className="user">
                <h4>UserName: {this.state.user.name}</h4>
            </div>
        )
    }

}

export default User;