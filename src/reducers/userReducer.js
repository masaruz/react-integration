import { actionString } from '../constants'

export default (state={
  users: [],
  processing: false
}, action) => {
  switch(action.type) {
    case actionString.USER_GET_SUCCESS: 
      return {
        users:[
           ...state.users,
          action.payload
        ],
        processing: false
      }
    case actionString.USER_GET_PROCESSING:
      return {
        ...state,
        processing: true
      }
    case actionString.USER_GET_FAILURE:
      return {
        ...state,
        processing: false
      }
    default:
      return state
  }
}