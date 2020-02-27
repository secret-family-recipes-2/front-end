import React, { useState } from 'react'

import RegistrationForm from './RegistrationForm'
import UserList from './UserList'

function Registration() {
  const [user, addUser] = useState([])
  const registerUser = registeredList => addUser([...user, registeredList])

  return (
    <div>
      <RegistrationForm registerUser={registerUser} />
      <UserList user={user} />
    </div>
  )

}

export default Registration