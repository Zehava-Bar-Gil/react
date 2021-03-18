import React from 'react';

const MyFunBtn = (props) => {
    return (
        <button className={props.bold ? 'bold' : ''}>
                {props.children}
        </button>
    )
}

export default MyFunBtn;