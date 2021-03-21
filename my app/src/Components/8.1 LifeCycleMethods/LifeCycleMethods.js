import React, {Component} from 'react';

class LifeCycleMethods extends Component {
    constructor(){
        super();

        this.state = { favouriteColor:'blue' };
        this.myRef = React.createRef();
    }

    componentDidMount(){
        setTimeout(() => this.setState({
            favouriteColor: 'yellow'
        }), 1000);
    }

    componentDidUpdate(){
        this.myRef.current.textContent = `My favorite color is ${this.state.favouriteColor}`;
    }

    render() {
        return(
            <div>
                <h1>{ `My favorite color is ${this.state.favouriteColor}`}</h1>
                <div id="div" ref={this.myRef}></div>
            </div>
        );
    }

}

export default LifeCycleMethods;