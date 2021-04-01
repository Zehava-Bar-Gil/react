import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from './Link';

const ApiAlogolia = () => {
    const [stateData, setStateData] = useState(null);
    const [searchValue, setSearchValue ] = useState('');
    const [query, setQuery] = useState("hooks");

    const getAPI = async () => {
        try{
            const data = await axios.get(
                `https://hn.algolia.com/api/v1/search?query=${query}`
            );
            setStateData(data.data.hits);
        } catch (e) {
            console.log("api fetch Err", e)
        }
    };
    useEffect(()=>{
        getAPI();
    }, [query]);

    const getSearchValue = (e)=>{
        setSearchValue(e.target.value)
    }
    const getNewQuery =()=>{
        setQuery(searchValue);

    }
    return(
        <div>
            <input type="text" onChange={(e)=>{getSearchValue(e)}} />
            <input type="button" value="search" onClick={getNewQuery}/>
            {stateData == null ? (
                <div>Loading...</div>
            ):(
                stateData.map((link)=>{
                    return(
                        <Link
                          key={link.objectID}
                          when={link.created_at}
                          title={link.title}
                          url={link.url}
                          auth={link.author}
                          />

                    )
                })
            )
        }
        </div>
    )
}
export default ApiAlogolia;