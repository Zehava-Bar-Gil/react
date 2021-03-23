import React, { Component } from 'react'

export default class Names extends Component {

    state={
        names: this.props.names,
    }
    render() {
        return (
            <div className="names">
                
                <p>{this.props.names.join( " , " )}</p>
                
            </div>
        )
    }
}

