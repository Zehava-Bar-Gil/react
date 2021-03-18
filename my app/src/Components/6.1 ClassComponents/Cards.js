import React, {Component} from 'react';
import Card from './Card';

class Cards extends Component{
    render(){
        return(
            <div className="cards">
                <Card
                    img = "https://data.whicdn.com/images/316166388/original.jpg"
                    title="Sea"
                    description ="The sea, connected as the world ocean or simply the ocean, 
                    is the body of salty water that covers over 70 percent of the Earth's surface."
                    firstLink="https://en.wikipedia.org/wiki/Sea"
                    secondLink="https://weheartit.com/entry/316166388"/>
                    
                <Card   
                    img =  "https://data.whicdn.com/images/354001280/original.jpg"
                    title="Lake"
                    description ="A lake is an area filled with water, localized in a basin, surrounded by land, 
                    apart from any river or other outlet that serves to feed or drain the lake."
                    firstLink="https://en.wikipedia.org/wiki/Lake"
                    secondLink="https://weheartit.com/entry/354001280"/>
                
                <Card
                    img = "https://data.whicdn.com/images/353699590/original.jpg"
                    title="Waterfall"
                    description = "A waterfall is an area where water flows over a vertical drop or a series of steep drops in the course of a stream or river."
                    firstLink="https://en.wikipedia.org/wiki/Waterfall"
                    secondLink="https://weheartit.com/entry/353699590."/>
            </div>
        );
    }
}

export default Cards;