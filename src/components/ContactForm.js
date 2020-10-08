import { Component  } from 'react'
import ReactDropdown from 'react-dropdown'

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
    const { phone, email, form } = this.refs
    if (!form.checkValidity() || !preference) {
      return 'Please fill in all required fields'
    } else if (preference === 'Email' && email.value.length === 0) {
      return 'Email is invalid'
    } else if (preference === 'Phone' && parseInt(phone.value).toString().length !== 10) {
      return 'Please supply a full phone number including area code e.g. (111) 222-3333'
    }
  }

  submit (e) {
    const error = this.checkValidity()
    if (error) {
      e.preventDefault()
      this.setState({
        error: this.checkValidity()
      })

      return
    }

    setTimeout(() => {
      const { onSubmit } = this.props
      if (onSubmit) {
        onSubmit()
      }
    }, 100)
  }

  render () {
    const { preference, error } = this.state

    let Pref = ''
    if (preference) {
      Pref = (preference === 'Email')
        ? (<input onChange={this.removeError} ref='email' type='email' name='_replyto' required />)
        : (<input onChange={this.removeError} ref='phone' type='number' name='phone' />)
    }

    const Err = (error) ? (<div className='error'>{error}</div>) : ''

    return (
      <form action='//formspree.io/signmedicva@gmail.com' className='contact-form' ref='form' method='POST'>
        {Err}
        <label>
          Name
          <input name='name' onChange={this.removeError} required />
        </label>
        <label>
          Preferred method of contact
          <ReactDropdown ref='preference' value={preference} onChange={this.selectPreference} placeholder='Select one...' options={['Phone', 'Email']} />
        </label>
        <label>
          {preference}
          {Pref}
        </label>
        <input type='text' name='_gotcha' style={{'display': 'none'}} />
        <label>
          Message
          <textarea name='body' onChange={this.removeError} placeholder='Message goes here...' required />
        </label>

        <p className='text-center'>
          <button className='rounded px-2 py-1 bg-green-500 text-green-100 hover:bg-green-700 cursor-pointer transition duration-200' onClick={this.submit}>Submit</button>
        </p>
      </form>
    )
  }
}
