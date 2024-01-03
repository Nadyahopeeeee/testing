import React, {useState, useEffect} from "react";
import axios from 'axios'

const Users = () => {
  const [users, setUsers] = useState([])

  const loadUsers = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(res.data)
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div>
      {users.map(user => (
        <div key={user.id} dtat-testid='user-item'>{user.name}</div>
      ))}
    </div>
  )
}

export default Users;
