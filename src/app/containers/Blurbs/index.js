import React, { Component } from 'react'
import Blurb from './Blurb'

export default class Blurbs extends Component {
  getBlurbs () {
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
    const children = this.getBlurbs().map(blurb => {
      return (<Blurb data={blurb} key={blurb.icon} />)
    })

    return (
      <section className='blurbs'>
        <div className='container'>
          <ul>
            {children}
          </ul>
        </div>
      </section>
    )
  }

}
