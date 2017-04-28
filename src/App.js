import React, { Component } from 'react'
import FantasticComponent from './fantastic-component'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Team C!</h2>
        </div>
        <div className='component-test'>
          <FantasticComponent />
        </div>
      </div>
    )
  }
}

export default App
