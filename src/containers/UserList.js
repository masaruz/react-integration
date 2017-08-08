import { connect } from 'react-redux'
import { get } from '../actions/userActions'

import UserTable from '../components/UserTable'

const mapStateToProps = state => {
  return {
    users: state.user.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refresh: id => {
      dispatch(get(id))
    }
  }
}
// connect to store provider and map state and dispatch to props
export default connect(mapStateToProps, mapDispatchToProps)(UserTable)