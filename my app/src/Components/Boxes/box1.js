import react from 'react'
import './Boxes.css'
import Box2 from './box2'


class Box1 extends react.Component
{
    constructor (props){
        super()
    }
    render(){
        return(<div className= 'Boxes Box1'><Box2/></div>)
    }
}

export default Box1