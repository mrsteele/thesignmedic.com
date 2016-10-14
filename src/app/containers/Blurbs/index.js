import React, { Component } from 'react'
import Blurb from './Blurb'

export default class Blurbs extends Component {
  getBlurbs () {
    return [{
      icon: 'print',
      title: 'Print',
      desc: 'Full Service Printing Capabilities'
    }, {
      icon: 'building',
      title: 'Interior Signage',
      desc: 'Banners, ADA Compliance, Wall Wraps, Stand-offs, P.O.P, Dimensional  Letters, Tradeshow Displays & More'
    }, {
      icon: 'map-signs',
      title: 'Exterior Signage',
      desc: 'Banners, Yard Signs, Window Graphics, Monument Signage, Channel Letters, Dimensional Letters & More'
    }, {
      icon: 'object-ungroup',
      title: 'Design',
      desc: 'Graphic Design and Brand Development'
    }, {
      icon: 'angle-double-down',
      title: 'Installation',
      desc: 'Full Service Installation Capabilities'
    }, {
      icon: 'car',
      title: 'Vehicle Wraps',
      desc: 'Mobile Advertising Solution with a high ROI'
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
