import React, { Component } from 'react';

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: this.props.address,
        };
    }

    render() {
        return (
            <div className="address">
            <p>{this.state.address.street}</p>
            <p>{this.state.address.city + ", " + this.state.address.state}</p>
            </div>
        )
    }

}

export default Address;