import { Component } from 'react'

export default class Badge extends Component {
  render () {
    const { icon, title, desc } = this.props.data

    return (
      <li className='badge' tabIndex='0'>
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
