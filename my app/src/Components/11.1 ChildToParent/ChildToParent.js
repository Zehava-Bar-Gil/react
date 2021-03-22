import React, {Component} from 'react';
import Button from './Button';

const colors = ["blue", "red", "yellow"];

class ChildToParent extends Component {
    state={color: '' };

    onClick(color){
        this.setState({color:color})
    }

    render() {
        return(
            <div>
              {colors.map(color=> <Button
                 key={color}
                 color={color}
                 handleClick={this.onClick.bind(this)}/>
                )}
                <br/>
                <h1>{`The Color Selcted is: ${this.state.color}`}</h1>
            </div>
        );
    }

}

export default ChildToParent;