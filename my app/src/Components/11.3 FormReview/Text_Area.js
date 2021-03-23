import React, { Component } from 'react'

class Text_Area extends Component {
    render() {
        return (
            <label
              className="input"
            >
                {this.props.label}
                <textarea
                    name={this.props.name}
                    cols="30"
                    rows="5"
                    onChange={this.props.onChange}>
                </textarea>
            </label>
        );
    }
}

export default Text_Area;