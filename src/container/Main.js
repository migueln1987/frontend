import React, { Component } from 'react';
import '../css/App.css';
import Address from "./Address";
import Review from "./Review";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:9000/restaurants/all').then(results => {
            return results.json();
        }).then(data => {
            let restaurants = data.map((restaurant) => {
                return(
                    <div key={restaurant.name}>
                        <h2>{restaurant.name}</h2>
                        <Address address={restaurant.address}/>
                        <Review reviews={restaurant.reviews}/>
                    </div>
                )
            });
            this.setState({restaurants: restaurants});
            console.log("state", this.state.restaurants);
        })
    }

    render() {
        return (
            <div className="Main">
                <div className="container1">
                    {this.state.restaurants}
                </div>
            </div>
        );
    }
}

export default Main;