import React, {Component} from 'react';

class Checkbox extends Component {

    state={
        id: this.props.id,
        value: this.props.value,
        boxChecked: this.props.boxChecked,
    }

    onCheckChange() {
        this.setState({
            boxChecked: !this.state.boxChecked});
            this.props.onCheckChange(this.state.id);
    }
    render() {
        return (
            <label style={{
                margin:'12px',
                display:'block'
            }}>
                <input type="checkbox"
                 checked={this.state.boxChecked}
                 onChange={()=>this.onCheckChange()
                }/>{this.state.value}
            </label>
                  
        );
    }
}

export default Checkbox;