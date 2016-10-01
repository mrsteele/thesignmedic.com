import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <div className='container'>
          <ul>
            <li>Copyright &copy; {new Date().getFullYear()}</li>
            <li className='no-mobile'>
              <FontAwesome name='heartbeat' />
            </li>
            <li>Made with <FontAwesome name='heart' /> by <a href='http://omnionline.us' target='_blank'>Omni Online</a></li>
          </ul>
        </div>
      </footer>
    )
  }
}
