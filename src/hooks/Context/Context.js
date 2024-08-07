import {useState} from 'react'
import UserContext from './UserContext'
import User from  './User' 
function Context() {
    const [user , SetUser] = useState('Hadeer')
    const userValues ={user}
    return (
        <>
        <UserContext.Provider value = {userValues} >
            <User></User>
        </UserContext.Provider>
         <div>Outside userContext</div>   
        </>
        
    );
  }
  
  export default Context;