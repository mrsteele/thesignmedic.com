import React from 'react';

export default class Jumptron extends React.Component {
  render() {
    return (
      <div className='jumbotron'>
        <div className='container text-right'>
          <h1>Welcome</h1>
          <p>This is the sample site.</p>
          <p><a className='btn'>Link</a></p>
          <p><button className='btn'>Button</button></p>
        </div>
      </div>
    )
  }
}
