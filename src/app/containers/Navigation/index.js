import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import ContactForm from '../ContactForm/index'
import Modal from '../../utils/Modal'

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
          <ContactForm />
        </Modal>
        <div className='container'>
          <h1><FontAwesome name='heartbeat' size='2x' /></h1>
          <ul>
            <li>
              <a className='btn' tabIndex='0'>Link 1</a>
            </li>
            <li>
              <a className='btn' tabIndex='0'>Link 2</a>
            </li>
            <li className='active'>
              <a className='btn' tabIndex='0' onClick={this.openModal}>Link 3</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
