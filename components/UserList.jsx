import React, {useEffect} from 'react'
import { useContext } from 'react'
import { useUser } from '../context/user/UserContext'


const UserList = () => {

  const getUsers  = useUser();

  useEffect(() => {
    getUsers;
    console.log(getUsers)
  }, [])

  console.log("hello")
  return (
    <div>User List</div>
  )
}

export default UserList