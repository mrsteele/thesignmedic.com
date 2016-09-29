import React from 'react';

export default class Jumptron extends React.Component {
  render() {
    return (
      <div className='jumbotron</div>'>
        <div className='container'>
          <h1>It Works!</h1>
          <p>This React project just works including <span>module</span> local styles.</p>
          <p>Global bootstrap css import works too as you can see on the following button.</p>
          <p><a className="btn btn-primary btn-lg">Enjoy!</a></p>
        </div>
      </div>
    )
  }
}
