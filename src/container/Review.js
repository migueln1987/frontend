import React, { Component } from 'react';
import User from "./User";

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
        this.state.reviews.map((rev, index) => {
            return (
                <div className="reviews" key={index}>
                    <User user={rev.user}/>
                    <h4>Rating: {rev.rating}</h4>
                    <h4>{rev.comment}</h4>
                </div>
            )
        })
    )
    }

}

export default Review;