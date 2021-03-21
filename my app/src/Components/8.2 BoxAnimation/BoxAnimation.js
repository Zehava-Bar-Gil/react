import React, { Component } from 'react';
import './style.css'


export class BoxAnimation extends React.Component {
    state = {size: 0};

    componentDidMount() {
        const boxes = document.querySelectorAll('.box');
        setTimeout(() => {
            boxes.forEach(box => box.classList.add('style'));
        }, 1000);
        setTimeout(() => {
            boxes.forEach(box => box.classList.remove('style'));
        }, 5000);
    }


    render() {
        console.log(this.props.size);
        return (
            <div className="box" style={{width: this.props.size, height: this.props.size}}></div>
        );
    }

}

export default BoxAnimation;