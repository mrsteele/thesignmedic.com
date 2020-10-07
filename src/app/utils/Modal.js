import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class Modal extends Component {
  render () {
    const { showing, children, close } = this.props

    if (!showing) {
      return (<div />)
    }

    return (
      <div className='modal'>
        <div className='modal--background' onClick={close} />
        <div className='modal--wrapper'>
          <a className='modal--close' onClick={close}>
            <FontAwesome name='times' />
          </a>
          {children}
        </div>
      </div>
    )
  }
}
