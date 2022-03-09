import '../styles/globals.css'
//Components
import Profile from '../components/Profile.jsx'
import UserList from '../components/UserList.jsx'
//Context
import UserState from '../context/User/UserState'


function MyApp({ Component, pageProps }) {
  return (
  <UserState>
    <Component {...pageProps} />
  </UserState>
  )
}

export default MyApp
