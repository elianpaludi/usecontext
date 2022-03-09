
//Components
import Profile from '../components/Profile.jsx'
import UserList from '../components/UserList.jsx'
//Context
import UserState from '../context/User/UserState'


export default function Home() {
  return (
    <>
      <UserList/>
      <Profile/>
    </>
  )
}
