import React, { Component } from 'react'
import EventRegistration from "./event-registration/index";
import logo from './evreg_logo.svg'
import './App.css'

import data from './test/data';

class App extends Component {
  render () {
    const {registration, style } = data;
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <h2 className="App-intro">Please register for our premier event!</h2>
        <div className='component-test'>
          <EventRegistration registration={registration} style={style} />
        </div>
      </div>
    )
  }
}

export default App
