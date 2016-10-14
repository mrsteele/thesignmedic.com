import React, { Component } from 'react'
import Slider from 'react-slick'

// slides
import design from '../../../res/slides/design.jpg'
import exteriorSignage from '../../../res/slides/exterior-signage.jpg'
import installation from '../../../res/slides/installation.jpg'
import interiorSignage from '../../../res/slides/interior-signage.jpg'
import printing from '../../../res/slides/printing.jpg'
import vehicleWraps from '../../../res/slides/vehicle-wraps.jpg'

export default class Jumptron extends Component {
  constructor (props) {
    super(props)

    setTimeout(() => {
      window.dispatchEvent(new window.Event('resize'))
    }, 500)
  }

  getSlides () {
    return [{
      img: printing,
      title: 'Print',
      desc: 'Full Service Printing Capabilities'
    }, {
      img: interiorSignage,
      title: 'Interior Signage',
      desc: 'Banners | ADA Compliance | Wall Wraps | Stand-offs | P.O.P | Dimensional  Letters | Tradeshow Displays & More'
    }, {
      img: exteriorSignage,
      title: 'Exterior Signage',
      desc: 'Banners | Yard Signs | Window Graphics| Monument Signage | Channel Letters | Dimensional Letters & More'
    }, {
      img: design,
      title: 'Design',
      desc: 'Graphic Design and Brand Development'
    }, {
      img: installation,
      title: 'Installation',
      desc: 'Full Service Installation Capabilities'
    }, {
      img: vehicleWraps,
      title: 'Vehicle Wraps',
      desc: 'Mobile Advertising Solution with a high ROI '
    }]
  }

  render () {
    const Slides = this.getSlides().map(Slide => (
      <div>
        <h2 className='title text'>{Slide.title}</h2>
        <p className='description text'>{Slide.desc}</p>
        <img src={Slide.img} />
      </div>
    ))

    return (
      <section className='jumbotron'>
        <div className='container text-right'>
          <Slider>
            {Slides}
          </Slider>
        </div>
      </section>
    )
  }
}
