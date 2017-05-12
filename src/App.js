import React, { Component } from 'react'
import EventRegistration from "./components/EventRegistration";
import logo from './evreg_logo.svg'
import './App.css'
import base from './test/base';
import config from './test/data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      registrations: {}
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  componentWillMount() {
    this.ref = base.syncState(`/joinin-17-05/registrations`,
      {
        context: this,
        state: 'registrations',
        then: () => {
        }
      });

    // const localStorageRef = localStorage.getItem(`joinin-17-05`);

  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  onChangeHandler(data) {
    this.setState( { registrations: data });
  }

  onSubmitHandler(data) {
    console.log('Handling submit', data);
    this.setState( { registrations: data });
  }

  render () {
    const {formGroups, style } = config;
    console.log('App rendering EventRegistration with data', this.state.registrations);
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <h2 className="App-intro">Please register for our premier event!</h2>
        <div className='component-test'>
          <EventRegistration formGroups={formGroups} style={style}
                             data={this.state.registrations}
                             // onSubmit={this.onSubmitHandler}
                             onChange={this.onChangeHandler}/>
        </div>
      </div>
    )
  }
}

export default App
