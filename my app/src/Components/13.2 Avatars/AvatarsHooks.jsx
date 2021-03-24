import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'

const Avatar = (props) => {
    const { image, name } = props
    return <div >{name}<img src={image}/></div>

}

const Avatars = (props) => {
    const { setAvatars, avatars } = props

    const refreshAvatars = async () => {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        console.log(response.data)
        setAvatars(response.data.results.map(person => {
            return ({
                name: person.name.first + person.name.last,
                image: person.picture.large
            })
        }))
    }

    const effect = () => {
        refreshAvatars()
        setInterval(refreshAvatars, 10 * 1000)
    }

    useEffect(effect, [])


    return avatars.map((avatar, index) => <Avatar
        key={index} name={avatar.name} image={avatar.image} 

        />
      )
    }

const Filter = (props) => {
    const { filter, setFilter } = props

    const handleChange = e => setFilter(e.target.value)
    return <div>
        Filter:
    <input type="text" value={filter} onChange={handleChange}
       style={{
        width: "200px",
        height: "40px",
        margin: "auto",
        marginTop: "2%"
    }}
    />
    </div>
}

const MainView = () => {
    const [filter, setFilter] = useState('')
    const [avatars, setAvatars] = useState([])

    const renderedAvatars = avatars.filter(avatar =>
        avatar.name.toLowerCase().includes(filter)
    )
    return <div>
        <Filter setFilter={setFilter} filter={filter}></Filter>
        <Avatars avatars={renderedAvatars} setAvatars={setAvatars}></Avatars>
    </div>

}
export default MainView


