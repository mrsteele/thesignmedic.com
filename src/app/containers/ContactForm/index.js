import React, { Component, PropTypes } from 'react'
import ReactDropdown from 'react-dropdown'
import ReactPhone from 'react-phone-input'

export default class ContactForm extends Component {
  constructor (props) {
    super(props)

    this.state = {}

    this.submit = this.submit.bind(this)
    this.checkValidity = this.checkValidity.bind(this)
    this.selectPreference = this.selectPreference.bind(this)
    this.removeError = this.removeError.bind(this)
  }

  selectPreference (val) {
    this.setState({
      preference: val.label,
      error: ''
    })
  }

  removeError () {
    console.log('removing error')
    this.setState({
      error: ''
    })
  }

  checkValidity () {
    const { preference } = this.state
    if (!this.refs.form.checkValidity() || !preference) {
      return 'Please fill in all required fields'
    } else if (preference === 'Email') {
      return 'Email is invalid'
    } else if (preference === 'Phone' && this.refs.phone.getNumber().length !== 71) {
      return 'Please supply a full phone number e.g. (111) 222-3333'
    }
  }

  submit (e) {
    e.preventDefault()

    const error = this.checkValidity()
    if (error) {
      this.setState({
        error: this.checkValidity()
      })

      return
    }

    const { onSubmit } = this.props
    if (onSubmit) {
      // actually email everything
      // onSubmit()
    }
  }

  render () {
    const { preference, error } = this.state

    let Pref = ''
    if (preference) {
      Pref = (preference === 'Email')
        ? (<input onChange={this.removeError} type='email' required />)
        : (<ReactPhone onChange={this.removeError} ref='phone' defaultCountry={'us'} onlyCountries={['us']} />)
    }

    const Err = (error) ? (<div className='error'>{error}</div>) : ''

    return (
      <form className='contact-form' ref='form'>
        {Err}
        <label>
          Name
          <input onChange={this.removeError} required />
        </label>
        <label>
          Preferred method of contact
          <ReactDropdown ref='preference' value={preference} onChange={this.selectPreference} placeholder='Select one...' options={['Phone', 'Email']} />
        </label>
        <label>
          {preference}
          {Pref}
        </label>
        <label>
          Message
          <textarea onChange={this.removeError} placeholder='Message goes here...' required />
        </label>

        <p className='text-center'>
          <button className='btn btn-success' onClick={this.submit}>Submit</button>
        </p>
      </form>
    )
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func
}
