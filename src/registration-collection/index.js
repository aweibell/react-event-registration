import React, { Component } from 'react';
import RegistrationRow from '../registration-row';
import './component.css';

class RegistrationCollection extends Component {
  render() {
    return (
      <div className="registration-collection">
        <RegistrationRow />
      </div>
    );
  }
}

export default RegistrationCollection;
