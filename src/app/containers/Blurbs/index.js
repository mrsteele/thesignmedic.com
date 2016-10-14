import React, { Component } from 'react'
import Blurb from './Blurb'

export default class Blurbs extends Component {
  getBlurbs () {
    return [{
      icon: 'map-signs',
      title: 'Signage Services',
      desc: 'If you can imagine it we can make it happen. From banners, to Vehicle Lettering & Wraps, we can do it all!'
    }, {
      icon: 'angle-double-down',
      title: 'Installation Services',
      desc: 'Our experienced installation team is ready to install all of your signage needs.'
    }, {
      icon: 'object-ungroup',
      title: 'Graphic Design Services',
      desc: 'Our in house graphic designers are ready to exceed your expectations.'
    }]
  }

  render () {
    const children = this.getBlurbs().map(blurb => {
      return (<Blurb data={blurb} key={blurb.icon} />)
    })

    return (
      <section className='blurbs'>
        <div className='container'>
          <h2 className='text-center'>What We Do</h2>
          <ul>
            {children}
          </ul>
        </div>
      </section>
    )
  }

}
