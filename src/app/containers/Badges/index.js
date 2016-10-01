import React, { Component } from 'react'
import Badge from './Badge'

export default class Badges extends Component {
  getBadges () {
    const t = Date.now()
    return [{
      icon: `https://unsplash.it/500?random&c=${t}`,
      title: 'title',
      desc: 'Here is a description of whatever.'
    }, {
      icon: `https://unsplash.it/500?random&c=${t + 1}`,
      title: 'whatever',
      desc: 'This is another thing.'
    }, {
      icon: `https://unsplash.it/500?random&c=${t + 2}`,
      title: 'Super Cool',
      desc: 'Here we go with another great thing.'
    }]
  }

  render () {
    const children = this.getBadges().map(badge => {
      return (<Badge data={badge} key={badge.title} />)
    })

    return (
      <section className='badges'>
        <h2 className='text-center'>What we do</h2>
        <div className='container'>
          <ul>
            {children}
          </ul>
        </div>
      </section>
    )
  }

}
