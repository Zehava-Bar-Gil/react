import React, { Component } from 'react'

export default class Card extends Component {

    state ={
        older: [],
    }

    componentDidMount(){
        this.setState({
            older: this.props.older
        })
    }

    renderPerson = () => {
        return this.props.older.map((person, index)=> 
            
            <div className= 'cards ui card' key={index.toString()}>
                <h2>{`Name: ${person.name}`}</h2>
                <hr />
                <br />
                <p>{`Birthday: ${person.birthday}`}</p>
                <p>{`Favorite fish: ${person.favoriteFoods.fish.join(",")}`}</p>  
                <p>{`Favorite meats: ${person.favoriteFoods.meats.join(",")}`}</p>               
            </div>
        );
    }

    render() {
        return(
            <div>
                {this.renderPerson()}
            </div>
        )
    }
}

