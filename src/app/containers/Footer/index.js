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
              <img src='/logo-red.png' />
            </li>
            <li>Made with <FontAwesome className='brand-primary' name='heart' /> by <a href='https://mrsteele.dev' target='_blank'>mrsteele.dev</a></li>
          </ul>
        </div>
      </footer>
    )
  }
}
