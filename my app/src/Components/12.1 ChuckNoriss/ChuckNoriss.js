import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

class ChuckNoriss extends Component {
    state = {
        joke: null,
        jokeByCategory: null,
        pickOption: null,
        categories: []
    }


async componentDidMount() {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/categories');
            
        this.setState({
            categories: response.data.map(category => 
            ({ value: category, label: category })),
            pickOption: response.data[0]
        });
        } 
        catch (err) {
        console.err(err);
        }
    }

    async onBtnClick() {
        try {
            const response = await axios.get('https://api.chucknorris.io/jokes/random');
            this.setState({ joke: response.data.value });
        } catch (err) {
            console.err(err);
        }
    }

    onSelectChange = async pickOption => {
        try {
            const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${selectedOption.value}`);
            
            this.setState({
                jokeByCategory: response.data.value,
               pickOption: pickOption,
            });
        } catch (err) {
            console.err(err);
        }
    };

    render() {
        return (
            <div>
                <button
                    onClick={() => this.onBtnClick()}
                >
                    Get a random joke
                </button>
                <div>
                    {this.state.joke}
                </div>
                <Select 
                    value={this.state.pickOption} 
                    onChange={this.onPickChange}
                    options={this.state.categories}
                />
                <div>
                    {this.state.jokeByCategory}
                </div>
            </div>
        );
    }
}

export default ChuckNoriss;