import React, { Component } from 'react';
import './component.css';

class RegistrationRow extends Component {
  render() {
    const { name, type } = this.props;
    return (
      <div className="registration-row">
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default RegistrationRow;
