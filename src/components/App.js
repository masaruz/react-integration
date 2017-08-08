import React from 'react';
import User from './User'
import About from './About'

import {
  Route,
  Link
} from 'react-router-dom'

export default () => (
  <div>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
    </ul>

    <hr/>
    <Route exact path='/' component={User}/>
    <Route path='/about' component={About}/>
  </div>
)
