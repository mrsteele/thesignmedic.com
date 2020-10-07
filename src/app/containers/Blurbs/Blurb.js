import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class Blurb extends Component {
  render () {
    const { icon, title, desc } = this.props.data

    return (
      <li className='blurb'>
        <FontAwesome name={icon} size='3x' />
        <div className='details'>
          <h3 className='title'>{title}</h3>
          <p>{desc}</p>
        </div>
      </li>
    )
  }
}
