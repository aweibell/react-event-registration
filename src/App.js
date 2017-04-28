import React, { Component } from 'react'
import EventRegistration from "./event-registration/index";
import logo from './evreg-logo.png'
import './App.css'

import data from '../test/data';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Team C!</h2>
        </div>
        <div className='component-test'>
          <EventRegistration props={data}/>
        </div>
      </div>
    )
  }
}

export default App
