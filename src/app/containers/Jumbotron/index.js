import React, { Component } from 'react'
import Slider from 'react-slick'

export default class Jumptron extends Component {
  getRandomImg (offset = 0) {
    const t = Date.now() + offset
    return `https://unsplash.it/1200/500?random&c=${t}`
  }

  render () {
    return (
      <section className='jumbotron'>
        <div className='container text-right'>
          <Slider>
            <div>
              <h2 className='title text'>This is a test</h2>
              <p className='description text'>This is the description of what will be here</p>
              <img src={this.getRandomImg()} />
            </div>
            <div>
              <h2 className='title text'>This is a test</h2>
              <p className='description text'>This is the description of what will be here</p>
              <img src={this.getRandomImg(1)} />
            </div>
          </Slider>
        </div>
      </section>
    )
  }
}
