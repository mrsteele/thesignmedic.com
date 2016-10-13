import React, { Component } from 'react'
import ContactForm from '../ContactForm/index'
import FontAwesome from 'react-fontawesome'
import Modal from '../../utils/Modal'
import Logo from '../../../res/logo.png'
import Name from '../../../res/name.png'

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

  getContactLink () {
    return (<a className='btn btn-success' tabIndex='0' onClick={this.openModal}>Contact Us</a>)
  }

  render () {
    const { modal } = this.state

    return (
      <nav className='navigation'>
        <Modal showing={modal} close={this.closeModal}>
          <ContactForm onSubmit={this.closeModal} />
        </Modal>
        <div className='container'>
          <h1>
            <img src={Logo} />
            <img src={Name} />
            <div className='only-mobile mobile-contact'>
              {this.getContactLink()}
            </div>
          </h1>
          <ul>
            <li>
              <a tabIndex='0' target='_blank' className='facebook'>
                <FontAwesome name='facebook' />
              </a>
            </li>
            <li>
              <a tabIndex='0' target='_blank' className='twitter'>
                <FontAwesome name='twitter' />
              </a>
            </li>
            <li>
              {this.getContactLink()}
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
