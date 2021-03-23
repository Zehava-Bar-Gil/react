import React, { Component } from 'react';
import axios from 'axios';

class ChuckNoriss extends Component {
state = {
    joke:'',
    term:'random',
    Categoris:[]
}

async componentDidMount(){
  let category = await axios.get('https://api.chucknorris.io/jokes/categories')

  this.setState({Categoris:category.data})    
}


GetJokeHandler = async() =>{

  let response; 
    if(this.state.term === 'random'){
        response =  await axios.get('https://api.chucknorris.io/jokes/random',{})
    }else{
        response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${this.state.term}`,{})
    }

    this.setState({
        joke:response.data.value
    })
    
}

CategoryHandler = (p) =>{
    this.setState({
        term:p.target.value
    })
}

render() {
    return (
        <div>
            <button onClick = {this.GetJokeHandler}>Get a random joke</button>
               <select name="" id="" onChange={this.CategoryHandler}>
                    <option value="random">random</option>
                    {
                        this.state.Categoris.map(p =>{
                            return <option value={p} key={p}>{p}</option>
                        })
                    }  
              </select>
               <p>{this.state.joke}</p>
       </div>
     );

  } 
}

export default ChuckNoriss;

