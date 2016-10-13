import React, { Component } from 'react'
import Jumbotron from './containers/Jumbotron/index'
import Navigation from './containers/Navigation/index'
import Blurbs from './containers/Blurbs/index'
import Badges from './containers/Badges/index'
import Footer from './containers/Footer/index'
import Helmet from 'react-helmet'

// favicons
import fav57 from '../res/favicons/apple-icon-57x57.png'
import fav60 from '../res/favicons/apple-icon-60x60.png'
import fav72 from '../res/favicons/apple-icon-72x72.png'
import fav76 from '../res/favicons/apple-icon-76x76.png'
import fav114 from '../res/favicons/apple-icon-114x114.png'
import fav120 from '../res/favicons/apple-icon-120x120.png'
import fav144 from '../res/favicons/apple-icon-144x144.png'
import fav152 from '../res/favicons/apple-icon-152x152.png'
import fav180 from '../res/favicons/apple-icon-180x180.png'
import fav192 from '../res/favicons/android-icon-192x192.png'
import fav32 from '../res/favicons/favicon-32x32.png'
import fav96 from '../res/favicons/favicon-96x96.png'
import fav16 from '../res/favicons/favicon-16x16.png'
import favMS from '../res/favicons/ms-icon-144x144.png'

export default class App extends Component {
  render () {
    return (
      <main className='app'>
        <Helmet
          link={[
            {rel: 'apple-touch-icon', href: fav57, sizes: '57x57'},
            {rel: 'apple-touch-icon', href: fav60, sizes: '60x60'},
            {rel: 'apple-touch-icon', href: fav72, sizes: '72x72'},
            {rel: 'apple-touch-icon', href: fav76, sizes: '76x76'},
            {rel: 'apple-touch-icon', href: fav114, sizes: '114x114'},
            {rel: 'apple-touch-icon', href: fav120, sizes: '120x120'},
            {rel: 'apple-touch-icon', href: fav144, sizes: '144x144'},
            {rel: 'apple-touch-icon', href: fav152, sizes: '152x152'},
            {rel: 'apple-touch-icon', href: fav180, sizes: '180x180'},
            {rel: 'icon', href: fav192, type: 'img/png', sizes: '192x192'},
            {rel: 'icon', href: fav32, type: 'img/png', sizes: '32x32'},
            {rel: 'icon', href: fav96, type: 'img/png', sizes: '96x96'},
            {rel: 'icon', href: fav16, type: 'img/png', sizes: '16x16'}
          ]}
          meta={[
            {name: 'msapplication-TileColor', content: '#ffffff'},
            {name: 'msapplication-TileImage', content: favMS},
            {name: 'theme-color', content: '#ffffff'}
          ]}
        />
        <Navigation />
        <Jumbotron />
        <Badges />
        <Blurbs />
        <Footer />
      </main>
    )
  }
}
