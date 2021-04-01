import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ApiRequest(props) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await axios.get("https://www.n12.co.il");
    console.log(data.results)
    return data.results;
  }
  useEffect(() => {
    setUsers(getUsers());
  }, [])

  return (
    <div>
      {users.map(user => <div>{user}</div>)}
    </div>
  )
}

export default ApiRequest