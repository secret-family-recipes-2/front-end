import React, { useState } from 'react'
import { connect } from 'react-redux'

import { postRegister } from '../../store/actions'

const RegistrationForm = props => {
  const { registerUser } = props
  const [chef, addChef] = useState({ username: '', password: '' })

  const submitChef = newbie => {
    newbie.preventDefault()
    props.postRegister(chef)
    registerUser(chef)
    addChef({ name: '', email: '', password: '' })
  }

  const updateChef = update =>
    addChef({ ...chef, [update.target.name]: update.target.value })

  return (
    <>
      <br></br>
      <form onSubmit={submitChef}>
        <label>
          Name:
          <input
            type='text'
            name='username'
            value={chef.username}
            onChange={updateChef}
          />
        </label>
        <br></br>
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={chef.password}
            onChange={updateChef}
          />
        </label>
        <br></br>
        <input type='submit' value='Submit' />
      </form>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}

export default connect(mapStateToProps, { postRegister })(RegistrationForm)
