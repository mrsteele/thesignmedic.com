import React, { Component } from 'react'

export default class Jumptron extends Component {
  render () {
    return (
      <section className='jumbotron'>
        <div className='container text-right'>
          <h1>Welcome</h1>
          <p>This is the sample site.</p>
          <p><a className='btn' tabIndex='0'>Link</a></p>
          <p><button className='btn' tabIndex='0'>Button</button></p>
        </div>
      </section>
    )
  }
}
