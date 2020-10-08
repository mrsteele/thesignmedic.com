import React, { Component } from 'react'
import Jumbotron from 'components/Jumbotron'
import Navigation from 'components/Navigation'
import Blurbs from 'components/Blurbs'
//import Badges from 'components/Badges/index'
import About from 'components/About'
import Footer from 'components/Footer'

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
