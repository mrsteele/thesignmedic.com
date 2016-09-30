import React, { Component } from 'react'
import Badge from './Badge'

export default class Badges extends Component {
  getBadges () {
    return [{
      icon: 'coffee',
      title: 'title',
      desc: 'Here is a description of whatever.'
    }, {
      icon: 'chevron-right',
      title: 'whatever',
      desc: 'This is another thing.'
    }, {
      icon: 'facebook',
      title: 'Super Cool',
      desc: 'Here we go with another great thing.'
    }]
  }

  render () {
    const children = this.getBadges().map(badge => {
      return (<Badge data={badge} key={badge.icon} />)
    })

    return (
      <section className='badges'>
        <div className='container'>
          <ul>
            {children}
          </ul>
        </div>
      </section>
    )
  }

}
