import React, { PropTypes, Component } from 'react'

export default class Badge extends Component {
  render () {
    const { icon, title, desc } = this.props.data

    return (
      <li className='badge'>
        <div className='bgimage' style={{backgroundImage: `url(${icon})`}} />
        <span>&nbsp;</span>
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
