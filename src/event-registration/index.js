import React, { Component } from 'react';
import RegistrationCollection from '../registration-collection';
import './component.css';

class EventRegistration extends Component {
  constuctor(){
    console.log(this.props);
  }
  render() {
    return (
      <div className="event-registration">
        <RegistrationCollection />
      </div>
    );
  }
}

export default EventRegistration;
