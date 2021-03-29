import React from 'react';
import {Link} from 'react-router-dom'

export default class ProductDetail extends Component {

    state = {
        id: this.props.match.params.id
    }

    render() {
        return (
            <div>
                <h3>{data[this.state.id-1].title}</h3>
                <img src={data[this.state.id-1].imageUrl}alt=""/>
                <p>Price: {data[this.state.id-1].price}</p>
                <Link to="/products"><button>Back</button></Link>
            </div>
        )
    }
}
