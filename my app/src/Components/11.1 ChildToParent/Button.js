import React, { Component } from 'react'

class Button extends Component {
    render() {
        return (
           
                <button
                style = {{backgroundColor: this.props.color,
                          padding: '10px',
                          width: '140px',
                          height: '40px',
                          fontSize: '20px',
                          fontWeight: '400',
                          display: 'block',
                          border: "4px solid #777"
                }}
            
            onClick={()=>this.props.handleClick(this.props.color)}>{this.props.color}</button>        
           
        );
    }
}

export default Button;