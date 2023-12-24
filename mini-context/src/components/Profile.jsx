import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
          {!user ? (
            <div className="text-center text-gray-600 text-lg">
              Please Login
            </div>
          ) : (
            <div className="text-center text-green-600 text-lg">
              Welcome {user.username}
            </div>
          )}
        </div>
      );
}

export default Profile