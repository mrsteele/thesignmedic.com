import React, { Component } from 'react'
import ContactForm from '../ContactForm/index'
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
            </h1>
          <ul>
            <li>
              <a tabIndex='0'>Link 1</a>
            </li>
            <li>
              <a tabIndex='0'>Link 2</a>
            </li>
            <li>
              <a className='btn btn-primary' tabIndex='0' onClick={this.openModal}>Link 3</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
