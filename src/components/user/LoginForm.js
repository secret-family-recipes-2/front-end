import React, { useState } from 'react'
import { connect } from 'react-redux'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

import { postLogin } from '../../store/actions'

const initialState = {
  username: '',
  password: '',
}

const LoginForm = props => {
  const [userInfo, setUserInfo] = useState(initialState)

  const handleChanges = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.postLogin(userInfo)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={userInfo.username}
          onChange={handleChanges}
        />

        <input
          type='password'
          name='password'
          placeholder='Password'
          value={userInfo.password}
          onChange={handleChanges}
        />
        <button> LogIn </button>
        {props.isFetching && <p>Loading...</p>}
        {props.error && <p>Error logging in</p>}
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}

export default connect(mapStateToProps, { postLogin })(LoginForm)
