import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
                <img className="card-image" src={props.img} alt ={props.img}/>
                <h2>{props.title}</h2>
                <h3>{props.description}</h3>
                <div className="links">
                    <a href={props.firstLink}>Share</a>
                    <a href={props.secondLink}>Explore</a>
                </div>
        </div>
    )
}

