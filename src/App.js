import React, { Component } from 'react'
import logo from './evreg_logo.svg'
import './App.css'
import base from './test/base';
import auth from './test/base';
import config from './test/data';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

import Match from 'react-router';

import Register from 'Register';

export const storageKey = 'KEY_FOR_LOCAL_STORAGE';

export const isAuthenticated = () => {
  return !!auth.currentUser || !!localStorage.getItem(storageKey);
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      uid: null
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        window.localStorage.setItem(storageKey, user.uid);
        this.setState({uid: user.uid});
      } else {
        window.localStorage.removeItem(storageKey);
        this.setState({uid: null});
      }
    });
  }

  componentWillMount() {
    this.ref = base.syncState(`/joinin-17-05/registrations`,
      {
        context: this,
        state: 'registrations',
        then: () => {
        }
      });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  onChangeHandler(data) {
    this.setState( { registrations: data });
  }

  onSubmitHandler(data) {
    this.setState( { registrations: data });
  }

  render () {
    const {formGroups, style } = config;
    return (
      <BrowserRouter>
        <Match exactly pattern="/" component={JoinIn} />
        <Match pattern="/login" component={Login} />
        <MatchWhenAuthorized pattern="/protected" component={Register} />
      </BrowserRouter>
    )
  }
}

const MatchWhenAuthorized = ({component: Component, ...rest}) => (
  <Match {...rest} render={renderProps => (
    isAuthenticated() ? (
      <Component {...renderProps} />
    ) : (
      <Redirect to={ {
        pathname: '/login',
        state: {from: renderProps.location}
      } } />
    )
  )}/>
)

export default App
