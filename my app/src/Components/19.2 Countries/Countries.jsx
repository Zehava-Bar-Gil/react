import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Countries() {
    const [ countries, setCountries] = useState([]);
    const [term, setTerm] = useState('');

    useEffect(() =>{
      (async () => {
        const { data } = await axios.get(`https://restcountries.eu/rest/v2/all`);
        setCountries(data.map(country => country.name));
       });
    }, [])

    const allCountries = () => {
        if(!countries.length)
         return <div>Loading...</div>

         else
         return(
             countries
              .filter(country => country.toLowerCase().includes(term.toLowerCase()))
              .map(country => <li>{country}</li>)
         ) 
    }
    return (
        <div>
           <input
             type="text"
             value={term}
             onChange={e => setTerm(e.target.value)}
             />
             <ul>
               {allCountries()}
            </ul> 
        </div>
    )
}
