import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class Navigation extends Component {
  render () {
    return (
      <nav className='navigation'>
        <div className='container'>
          <h1><FontAwesome name='heartbeat' size='2x' /></h1>
          <ul>
            <li>
              <a>Link 1</a>
            </li>
            <li>
              <a>Link 2</a>
            </li>
            <li className='active'>
              <a>Link 3</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
