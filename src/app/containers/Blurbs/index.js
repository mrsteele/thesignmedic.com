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
    }, {
      icon: 'chevron-left',
      title: 'whatever',
      desc: 'This is another thing.'
    }, {
      icon: 'twitter',
      title: 'Super Cool',
      desc: 'Here we go with another great thing.'
    }, {
      icon: 'bullseye',
      title: 'title',
      desc: 'Here is a description of whatever.'
    }, {
      icon: 'pinterest',
      title: 'Super Cool',
      desc: 'Here we go with another great thing.'
    }, {
      icon: 'chevron-up',
      title: 'whatever',
      desc: 'This is another thing.'
    }, {
      icon: 'chevron-down',
      title: 'whatever',
      desc: 'This is another thing.'
    }, {
      icon: 'square',
      title: 'title',
      desc: 'Here is a description of whatever.'
    }]
  }

  render () {
    const children = this.getBlurbs().map(blurb => {
      return (<Blurb data={blurb} key={blurb.icon} />)
    })

    return (
      <section className='blurbs'>
        <div className='container'>
          <h2 className='text-center'>... But wait, there's more!</h2>
          <ul>
            {children}
          </ul>
        </div>
      </section>
    )
  }

}
