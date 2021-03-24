import React, {Component} from 'react'
import axios from 'axios'

export default class Avatars extends Component {

    state = {
        sreach: "",
        people: []
    }

    async componentDidMount() {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        this.setState({
            avatars: response.data.results.map(person=>{
                return({
                    name: person.name.first + person.name.last,
                    avatar: person.image.large
                })
            })
        })
    }

    onInputChange(e){
        this.setState({search: e.target.value})
    }

    render() {
        return (
            <div>
                <Searchbar
                   value={this.props.value}
                   onChange={(e)=> this.onInputChange(e)}
                   />

                   <div

                     style={{
                         margin: "3% 6%",
                         display: "flex",
                         width: "80%",
                         flexWrap: "wrap"
                     }}>
                        
                        {
                            this.state.people
                            .filter(person =>
                                person.name.toLowerCase().includes(this)
                                )
                        }
                     </div>
            </div>
        )
    }
}
