import {
  POST_LOGIN_START,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
} from '../actions'

const initialState = {
  user: {
    id: null,
  },
  recipes: [],
  isFetching: false,
  error: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN_START:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: { id: action.payload },
      }
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default reducer
