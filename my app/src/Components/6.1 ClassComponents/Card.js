import React, {Component} from 'react';

class Card extends Component {
    render(){
        return(
            <div className="card">
                <img className="card-image" src={this.props.img} alt ={this.props.img}/>
                <h2>{this.props.title}</h2>
                <h3>{this.props.description}</h3>
                <div className="links">
                    <a href={this.props.firstLink}>Share</a>
                    <a href={this.props.secondLink}>Explore</a>
                </div>
            </div>
        );
    }
}

export default Card
