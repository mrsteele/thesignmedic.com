import React, { Component } from 'react'
import ReactDropdown from 'react-dropdown'

export default class Blurbs extends Component {
  render () {
    return (
      <form className='contact-form'>
        <label>
          Testing label
          <input />
        </label>
        <label>
          Dropdown thing
          <ReactDropdown placeholder='Select one...' options={['First', 'Second', 'Third']} />
        </label>
      </form>
    )
  }

}
