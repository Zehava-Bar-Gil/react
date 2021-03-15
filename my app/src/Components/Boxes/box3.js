import react from 'react'
import './Boxes.css'
import Box4 from './box4'

class Box3 extends react.Component
{
    constructor (props){
        super()
    }
    render(){
        return(<div className='Box3'><Box4/><Box4/></div>)
    }
}

export default Box3