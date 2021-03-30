import React, {useState} from 'react';
import './style.css'

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore); 
    };

    return (
        <p className="text">
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "read more..." : "show less"}
            </span>
        </p>
    );
};
     
    const Content = () => {

        return (
            <div>
                <h2>
                    <ReadMore>
                    Odem Mountain Winery: founded by Edit and Michael Alfasi and their children in 2003, after much thought, deliberation and planning. 
                    We dreamed of establishing a family farming and tourism business, together with our children, who longed to root their lives in the Golan, out of a love of wine. 
                    All these came together – to create a boutique family winery specializing in unique, creative and quality wines.
                    But above all – delicious.
                    The winery was built at our home in Moshav Odem, in the heart of a beautiful oak forest in the northern Golan. 
                    It is the northernmost winery in Israel, 1,100 meters above sea level, 
                    surrounded by an impressive oak and pine forest. In winter the vineyard is wrapped in pure white snow, and in summer the weather is temperate and pleasant.
                    </ReadMore>
                </h2>
            </div>
        )
    }
    
        
    


export default Content;