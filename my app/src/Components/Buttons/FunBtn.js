import React from 'react';
import MyFunBtn from './MyFunBtn';
import './style.css';

const FunBtn = () => {
    return (
        <div className="buttons">
            <MyFunBtn bold={true}>Important</MyFunBtn>
            <MyFunBtn bold={false}>Not Important</MyFunBtn>
        </div>
    )
}

export default FunBtn;