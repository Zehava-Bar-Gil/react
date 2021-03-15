import react from 'react'
import './Boxes.css'
import Box3 from './box3'

class Box2 extends react.Component
{
    constructor (props){
        super()
    }
    render(){
        return(<div className='Boxes Box2'><Box3/></div>)
    }
}

export default Box2