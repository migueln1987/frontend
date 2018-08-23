import React, { Component } from 'react';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
        }
    }

    componentDidMount() {
        this.setState({reviews: this.props.reviews});
    }

    render() {
        return (
            <div className="reviews">
                {this.state.reviews}
            </div>
        )
    }

}

export default Review;