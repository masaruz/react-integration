import { actionString } from '../constants'
import { httpGet } from '../utilities/request'

export const getSuccess = payload => {
  return {
    type: actionString.USER_GET_SUCCESS,
    payload
  }
}

export const getFailure = e => {
  return {
    type: actionString.USER_GET_FAILURE,
    payload: e
  }
}

export const getProcessing = () => {
  return {
    type: actionString.USER_GET_PROCESSING
  }
}

/**
 * @param {string} id 
 * return async dispatch function
 */
export const get = id => {
  return async dispatch => {
    dispatch(getProcessing())
    try {
      const data = await httpGet(id)
      dispatch(getSuccess(data))
    } catch (e) {
      dispatch(getFailure(e))
    }
  }
}