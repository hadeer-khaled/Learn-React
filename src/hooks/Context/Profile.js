import {useContext} from 'react'
import UserContext from './UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    return (
      <div >
            From Profile {user}
      </div>
    );
  }
export default Profile;