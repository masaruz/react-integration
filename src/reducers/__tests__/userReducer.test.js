import reducer from '../userReducer'
import { actionString } from '../../constants'

describe('dispatch state to reducer', () => {
  it('return processing true when processing', () => {
    const state = reducer(undefined, { type: actionString.USER_GET_PROCESSING } )
    expect(state.processing).toEqual(true)
  })

  it('return processing false when success or failure', () => {
    const state = reducer(undefined, { type: actionString.USER_GET_SUCCESS } )
    expect(state.processing).toEqual(false)
  })

  it('return processing false when success or failure', () => {
    const state = reducer(undefined, { type: actionString.USER_GET_FAILURE } )
    expect(state.processing).toEqual(false)
  })
})

