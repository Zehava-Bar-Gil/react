import React, {Component} from 'react';
import MyBtn from './MyBtn';
import './style.css';

class Buttons extends Component {
    render(){
        return(
            <div className="buttons">
                <MyBtn bold={true}>Important</MyBtn>
                <MyBtn bold={false}>Not Important</MyBtn> 
            </div>
        );
    }
}

export default Buttons; 