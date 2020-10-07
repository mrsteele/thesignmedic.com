import React, { Component } from 'react'
import Jumbotron from './containers/Jumbotron/index'
import Navigation from './containers/Navigation/index'
import Blurbs from './containers/Blurbs/index'
//import Badges from './containers/Badges/index'
import About from './containers/About/index'
import Footer from './containers/Footer/index'

export default class App extends Component {
  render () {
    return (
      <main className='app'>
        <Navigation />
        <Jumbotron />
        <About />
        <Blurbs />
        <Footer />
      </main>
    )
  }
}
