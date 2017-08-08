import { getSuccess, getFailure, get } from '../userActions'
import { actionString } from '../../constants'

describe('return action', () => {

  it('should return success action object', () => {
    const data = getSuccess({id: 'userid'})
    expect(data).toBeDefined()
    expect(data.type).toEqual(actionString.USER_GET_SUCCESS)
    expect(data.payload).toEqual({id: 'userid'})
  })

  it('call async function to get object payload', async () => {
    const actionFunction = get('userid')
    expect(actionFunction).toBeDefined()
    actionFunction(action => {
      expect(action.type).toBeDefined()
    })
  })

  it('call async functiuon with exception', () => {
    const actionFunction = get()
    expect(actionFunction).toBeDefined()
    actionFunction(action => {
      expect(action.type).toBeDefined()
    })
  })

  it('should return failure action object', () => {
    const data = getFailure('something went wrong')
    expect(data).toBeDefined()
    expect(data.type).toEqual(actionString.USER_GET_FAILURE)
    expect(data.payload).toEqual('something went wrong')
  })
})