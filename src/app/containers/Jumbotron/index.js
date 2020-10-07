import React, { Component } from 'react'
import Slider from 'react-slick'
import Modal from '../../utils/Modal'

export default class Jumptron extends Component {
  constructor (props) {
    super(props)

    this.toggleModal = this.toggleModal.bind(this)
    this.state = {}
  }

  componentDidMount () {
    setTimeout(() => {
      window.dispatchEvent(new window.Event('resize'))
    }, 500)
  }

  getSlides () {
    return [{
      img: '/slides/printing.jpg',
      title: 'Print',
      desc: 'Full Service Printing Capabilities'
    }, {
      img: '/slides/interior-signage.jpg',
      title: 'Interior Signage',
      desc: 'Banners | ADA Compliance | Wall Wraps | Stand-offs | P.O.P | Dimensional  Letters | Tradeshow Displays & More'
    }, {
      img: '/slides/exterior-signage.jpg',
      title: 'Exterior Signage',
      desc: 'Banners | Yard Signs | Window Graphics| Monument Signage | Channel Letters | Dimensional Letters & More'
    }, {
      img: '/slides/design.jpg',
      title: 'Design',
      desc: 'Graphic Design and Brand Development'
    }, {
      img: '/slides/installation.jpg',
      title: 'Installation',
      desc: 'Full Service Installation Capabilities'
    }, {
      img: '/slides/vehicle-wraps.jpg',
      title: 'Vehicle Wraps',
      desc: 'Mobile Advertising Solution with a high ROI '
    }]
  }

  toggleModal () {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render () {
    const Slides = this.getSlides().map(Slide => (
      <div key={Slide.title}>
        <h2 className='title text'>{Slide.title}</h2>
        <p className='description text'>{Slide.desc}</p>
        <img src={Slide.img} />
      </div>
    ))

    return (
      <section className='jumbotron'>
        <Modal showing={this.state.showModal} close={this.toggleModal}>
          <h3 style={{margin: 0}}>Who we serve</h3>
          <ul>
            <li>Manassas</li>
            <li>Springfield</li>
            <li>Stafford</li>
            <li>Dumfries</li>
            <li>Fredericksburg</li>
            <li>Lorton</li>
            <li>Dale City</li>
            <li>and anyone in the Metro DC area!</li>
          </ul>
        </Modal>
        <div className='container text-center'>
          <h2 className='subtitle'>
            Serving <strong>Woodbridge, VA</strong> and the <a href='#' onClick={this.toggleModal}>surrounding area</a>
          </h2>
          <Slider>
            {Slides}
          </Slider>
        </div>
      </section>
    )
  }
}
