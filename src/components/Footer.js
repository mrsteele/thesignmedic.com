import FontAwesome from 'react-fontawesome'
import Container from 'components/Container'

const Footer = () => (
  <footer className='bg-gray-700 py-8 text-gray-400 text-xs'>
    <Container>
      <div className='text-center leading-loose sm:flex'>
        <div>Copyright &copy; {new Date().getFullYear()}</div>
        <div className='hidden mx-auto sm:block'>
          <img src='/logo-red.png' className='h-6' />
        </div>
        <div>Made with <FontAwesome className='brand-primary' name='heart' /> by <a href='https://mrsteele.dev' target='_blank' className='border-b hover:border-b-0'>mrsteele.dev</a></div>
      </div>
    </Container>
  </footer>
)

export default Footer
