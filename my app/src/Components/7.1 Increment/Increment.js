import React, { Component } from 'react'
import './style.css';

class Increment extends Component {
    constructor() {
        super();

        this.state = { counter: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ counter: this.state.counter + 1});
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.handleClick}>
                    increment
                </button>
                <h3>{this.state.counter}</h3>
            </div>
        );
    }
}


export default Increment;