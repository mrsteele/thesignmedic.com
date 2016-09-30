import React, { Component } from 'react'
import Jumbotron from './containers/Jumbotron/index'
import Navigation from './containers/Navigation/index'
import Blurbs from './containers/Blurbs/index'

export default class App extends Component {
  render () {
    return (
      <main className='app'>
        <Navigation />
        <Jumbotron />
        <Blurbs />
      </main>
    )
  }
}
