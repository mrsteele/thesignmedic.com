import React from 'react'
import Jumbotron from './containers/Jumbotron'

export default class App extends React.Component {
  render() {
    return (
      <main className='app'>
        <Jumbotron />
      </main>
    )
  }
}
