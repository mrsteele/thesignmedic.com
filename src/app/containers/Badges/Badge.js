import React, { PropTypes, Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class Badge extends Component {
  render () {
    const { icon, title, desc } = this.props.data

    return (
      <li className='badge'>
        <FontAwesome name={icon} size='5x' />
        <div className='details'>
          <h2 className='title'>{title}</h2>
          <p>{desc}</p>
        </div>
      </li>
    )
  }
}

Badge.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  })
}
