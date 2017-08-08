import React from 'react'
import { connect } from 'react-redux'
import { get } from '../actions/userActions'

import Button from '../components/Button'

let input
const RetrieveUser = ({ getUser, processing }) => (
  <div>
    <input ref={node => {
      input = node
    }} />
    <Button getUser={getUser} processing={processing}/>
  </div>
)

const mapStateToProps = state => {
  return {
    processing: state.user.processing
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => {
      dispatch(get(input.value))
      input.value = ''
    }
  }
}
// connect to store provider and map state and dispatch to props
export default connect(mapStateToProps, mapDispatchToProps)(RetrieveUser)