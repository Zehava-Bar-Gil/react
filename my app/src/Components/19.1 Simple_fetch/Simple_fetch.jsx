import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'

export default function Simple_fetch() {
    const [currentDate, setCurrentDate] = useState('loading...')

    useEffect(() => {
        const getData = async ()=>{
            let apiData = await axios.get(`https://swapi.dev/api/films/1/`);
            setCurrentDate(apiData.data.title);
        }

        getData()
    }, []
    )
    return (
        <div className= "Simple_fetch">
            <h2>{currentDate}</h2>   
        </div>
    )
}
