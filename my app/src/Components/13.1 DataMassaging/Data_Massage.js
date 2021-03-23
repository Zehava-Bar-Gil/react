import React, { Component } from 'react'
import data from './data'
import Names from './Names'
import Cards from './Card'
import './style.css'

export default class Data_Massage extends Component {

    state = {
       names: [],
       older: [],
    }

    componentDidMount(){
        this.setState({
            names: data.map(person => person.name),
            older: data.filter(person => parseInt(person.birthday.split('-')[2]) < 1990)

           }
        ) 
        console.log(data)    
    }
    
    render() {
        return (
            <div className = "Data">
              <div>
                  <Names
                    names = {this.state.names}
                  />
                  <Cards
                   older = {this.state.older}
                  />  
                </div>  
            </div>
        )
    }
}
