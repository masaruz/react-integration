import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

import App from './components/App'

import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './utilities/store'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
