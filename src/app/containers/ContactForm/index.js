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
    const { phone, email } = this.refs
    if (!this.refs.form.checkValidity() || !preference) {
      return 'Please fill in all required fields'
    } else if (preference === 'Email' && email.length === 0) {
      return 'Email is invalid'
    } else if (preference === 'Phone' && phone.getNumber().length !== 17) {
      return 'Please supply a full phone number e.g. (111) 222-3333'
    }
  }

  openEmail () {
    const { preference } = this.state
    const { name, phone, email, body } = this.refs

    const contactDefail = (preference === 'Email') ? email.value : phone.getNumber()
    const to = encodeURIComponent('signmedicva@gmail.com')
    const subject = encodeURIComponent('Email from thesignmedic.com')
    const line1 = encodeURIComponent(body.value)
    const line2 = encodeURIComponent(`${name.value} \r\n ${contactDefail}`)
    const newParagraph = encodeURIComponent('\r\n\r\n')
    window.location.href = `mailto:${to}?subject=${subject}&body=${line1 + newParagraph + line2}`
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

    this.openEmail()

    const { onSubmit } = this.props
    if (onSubmit) {
      onSubmit()
    }
  }

  render () {
    const { preference, error } = this.state

    let Pref = ''
    if (preference) {
      Pref = (preference === 'Email')
        ? (<input onChange={this.removeError} type='email' ref='email' required />)
        : (<ReactPhone onChange={this.removeError} ref='phone' defaultCountry={'us'} onlyCountries={['us']} />)
    }

    const Err = (error) ? (<div className='error'>{error}</div>) : ''

    return (
      <form className='contact-form' ref='form'>
        {Err}
        <label>
          Name
          <input ref='name' onChange={this.removeError} required />
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
          <textarea ref='body' onChange={this.removeError} placeholder='Message goes here...' required />
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
