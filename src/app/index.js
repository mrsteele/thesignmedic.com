import React from 'react'
import Jumbotron from './containers/Jumbotron'
import Navigation from './containers/Navigation'

export default class App extends React.Component {
  render() {
    return (
      <main className='app'>
        <Navigation />
        <Jumbotron />
      </main>
    )
  }
}
