import React from 'react';

export default class Navigation extends React.Component {
  render () {


    return (
      <nav className='navigation'>
        <h1>Logo</h1>
        <ul>
          <li>
            <a>Link 1</a>
          </li>
          <li>
            <a>Link 2</a>
          </li>
          <li className='active'>
            <a>Link 3</a>
          </li>
        </ul>
      </nav>
    )
  }
}
