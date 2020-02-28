import { axiosWithAuth } from '../../utils/axiosWithAuth'

export const POST_LOGIN_START = 'POST_LOGIN_START'
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS'
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE'

export const POST_REGISTER_START = 'POST_REGISTER_START'
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS'
export const POST_REGISTER_FAILURE = 'POST_REGISTER_FAILURE'

export const postLogin = credentials => dispatch => {
  dispatch({ type: POST_LOGIN_START })

  axiosWithAuth()
    .post('/auth/login', credentials)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.token)
      dispatch({ type: POST_LOGIN_SUCCESS, payload: res.data.id })
    })
    .catch(err => {
      console.log(err)
      localStorage.removeItem('token')
      dispatch({ type: POST_LOGIN_FAILURE, payload: err.data })
    })
}

export const postRegister = credentials => dispatch => {
  dispatch({ type: POST_REGISTER_START })

  axiosWithAuth()
    .post('/auth/register', credentials)
    .then(res => {
      console.log(res)
      dispatch({ type: POST_REGISTER_SUCCESS })
      postLogin(credentials)
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: POST_REGISTER_FAILURE, payload: err.data })
    })
}
