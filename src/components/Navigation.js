import { Component } from 'react'
import ContactForm from 'components/ContactForm'
import Container from 'components/Container'
import FontAwesome from 'react-fontawesome'
import Modal from 'components/Modal'

export default class Navigation extends Component {
  constructor (props) {
    super(props)

    this.state = {
      modal: false
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal () {
    this.setState({
      modal: true
    })
  }

  closeModal () {
    this.setState({
      modal: false
    })
  }

  render () {
    const { modal } = this.state

    return (
      <Container>
        <Modal showing={modal} close={this.closeModal}>
          <ContactForm onSubmit={this.closeModal} />
        </Modal>
        <nav className='flex items-center my-4'>
            <h1 className='flex'>
              <img src='/logo.png' className='h-8' />
              <img src='/name.png' alt='Sign Medic' className='h-8' />
            </h1>
            <nav className='ml-auto flex items-center space-x-4'>
              <a href='https://www.facebook.com/TheSignMedic' tabIndex='0' target='_blank'>
                <FontAwesome name='facebook' />
              </a>
              <a href='https://twitter.com/SignMedicVa' tabIndex='0' target='_blank'>
                <FontAwesome name='twitter' />
              </a>
              <a className='rounded px-2 py-1 bg-green-500 text-green-100 hover:bg-green-700 cursor-pointer transition duration-200' tabIndex='0' onClick={this.openModal}>Contact Us</a>
          </nav>
        </nav>
      </Container>
    )
  }
}
