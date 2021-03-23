import React, {Component} from 'react';
import Checkbox from './Checkbox';

const content =[
    'I read the term of the app',
    'I accept the term of the app',
    'I want to get the weekly news letter',
    'I want to get sales and offers'
]

 class Checkboxes extends Component {
     state={
         boxCheckedArray: [false, false, true, true]
     }

     onCheckChange(index) {
        let newArray = this.state.boxCheckedArray;
        newArray[index] = !newArray[index];
        this.setState({ boxCheckedArray: newArray })
    }
     
    render() {
        return (
            <form>
                {this.state.boxCheckedArray.map((boxChecked, index)=>{
                 return <Checkbox
                            key={index}
                            id={index}
                            value={content[index]}
                            boxChecked={boxChecked}
                            onCheckChangeFather={(i) => this.onCheckChange(i)} />
                }
            )}
                
            </form>
        );
    }
}

export default Checkboxes;