import React, {Component} from 'react';
import './style.css'

class Hide_Seek extends Component {
    constructor(){
        super();

        this.state ={displayBox: false}

        this.handleClick = this.handleClick.bind(this);    
    }

    handleClick() {
        this.setState({displayBox: !this.state.displayBox})
    }

    render(){
        return(
            <div className="container">
                <button onClick={this.handleClick}>
                    show/hide
                </button>
                {this.state.displayBox &&
                <div className="yellowBox">
                    </div>
                }
            </div>
        );
    }
}

export default Hide_Seek;