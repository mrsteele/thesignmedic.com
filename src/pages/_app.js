import { useEffect } from 'react'
import '../styles/index.scss'
import Head from 'next/head'


const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    try {
      window.ga('set', 'page', window.location.pathname)
      window.ga('send', 'pageview')
    } catch (err) {
      // silence
    }
  })

  const canonical = 'https://thesignmedic.com/'
  const seoTitle = 'The Sign Medic - Your Image is Our Business'
  const metaDescription = 'SignMedic, LLC is experienced in the Signage & Exhibit fields. We serve Woodbridge VA and the surrounding areas. We help business with all advertising needs.'
  const twitter = 'SignMedicVa'
  const imgSrc = ''

  const meta = {
    link: [
      {rel: 'apple-touch-icon', href: '/favicons/apple-icon-57x57.png', sizes: '57x57'},
      {rel: 'apple-touch-icon', href: '/favicons/apple-icon-60x60.png', sizes: '60x60'},
      {rel: 'apple-touch-icon', href: '/favicons/apple-icon-72x72.png', sizes: '72x72'},
      {rel: 'apple-touch-icon', href: '/favicons/apple-icon-76x76.png', sizes: '76x76'},
      {rel: 'apple-touch-icon', href: '/favicons/apple-icon-114x114.png', sizes: '114x114'},
      {rel: 'apple-touch-icon', href: '/favicons/apple-icon-120x120.png', sizes: '120x120'},
      {rel: 'apple-touch-icon', href: '/favicons/apple-icon-144x144.png', sizes: '144x144'},
      {rel: 'apple-touch-icon', href: '/favicons/apple-icon-152x152.png', sizes: '152x152'},
      {rel: 'apple-touch-icon', href: '/favicons/apple-icon-180x180.png', sizes: '180x180'},
      {rel: 'icon', href: '/favicons/android-icon-192x192.png', type: 'img/png', sizes: '192x192'},
      {rel: 'icon', href: '/favicons/android-icon-32x32.png', type: 'img/png', sizes: '32x32'},
      {rel: 'icon', href: '/favicons/android-icon-96x96.png', type: 'img/png', sizes: '96x96'},
      {rel: 'icon', href: '/favicons/android-icon-16x16.png', type: 'img/png', sizes: '16x16'}
    ],
    meta: [
      {name: 'msapplication-TileColor', content: '#ffffff'},
      {name: 'msapplication-TileImage', content: '/favicons/ms-icon-144x144.png'},
      {name: 'theme-color', content: '#ffffff'}
    ]
  }

  return (
    <>
        <Head>
          <title key='title'>{seoTitle}</title>
          <meta property='og:title' key='og:title' content={seoTitle} />
          <meta name='twitter:title' key='twitter:title' content={seoTitle} />
          <meta name='twitter:site' key='twitter:site' content={twitter} />
          <meta name='twitter:card' key='twitter:card' content='summary_large_image' />
          <meta property='og:type' key='og:type' content='website' />
          {canonical && (
            <>
              <link key='canonical' rel='canonical' href={canonical} />
              <meta name='twitter:url' key='twitter:url' content={canonical} />
              <meta property='og:url' key='og:url' content={canonical} />
            </>
          )}
          {metaDescription && (
            <>
              <meta name='description' key='description' content={metaDescription} />
              <meta name='twitter:description' key='twitter:description' content={metaDescription} />
              <meta property='og:description' key='og:description' content={metaDescription} />
            </>
          )}
          {imgSrc && (
            <>
              <meta name='twitter:image' key='twitter:image' content={imgSrc} />
              <meta property='og:image' key='og:image' content={imgSrc} />
              <meta property='og:image:width' key='og:image:width' content={imgWidth} />
              <meta property='og:image:height' key='og:image:height' content={imgHeight} />
            </>
          )}
          <link key='fontawesome' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' />
          <meta key='viewport' name='viewport' content='width=device-width, initial-scale=1' />
          {Object.keys(meta).map(Tag => meta[Tag].map(tag => (
            <Tag {...tag} />
          )))}
          <script dangerouslySetInnerHTML={{
            __html: process.env.NODE_ENV === 'production' && process.env.NETLIFY === 'true' && `
    /*
      /*
      ** Include Google Analytics Script
      */
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      /*
      ** Set the current page
      */
      ga('create', '${process.env.GA_TRACKING_ID}', 'auto')
    `
          }}
          />
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
