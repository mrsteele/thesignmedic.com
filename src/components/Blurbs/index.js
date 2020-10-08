import Blurb from './Blurb'
import Container from 'components/Container'

const blurbs = [{
  icon: 'map-signs',
  title: 'Signage Services',
  desc: 'If you can imagine it we can make it happen. From banners, to Vehicle Lettering & Wraps, we can do it all!'
}, {
  icon: 'angle-double-down',
  title: 'Installation Services',
  desc: 'Our experienced installation team is ready to install all of your signage needs.'
}, {
  icon: 'object-ungroup',
  title: 'Graphic Design Services',
  desc: 'Our in house graphic designers are ready to exceed your expectations.'
}]

const Blurbs = () => (
  <section className='bg-gray-200'>
    <Container>
      <h2 className='text-center text-2xl font-bold py-4'>
        <span className='border-b-2'>What We Do</span>
      </h2>
      <div className='sm:grid sm:grid-cols-3'>
        {blurbs.map(blurb => {
          return (<Blurb key={blurb.icon} {...blurb.data} />)
        })}
      </div>
    </Container>
  </section>
)

export default Blurbs
