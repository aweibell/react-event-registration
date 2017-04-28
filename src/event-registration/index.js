import React, { Component } from 'react';
import RegistrationCollection from '../registration-collection';
import './component.css';

class EventRegistration extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { registration } = this.props;
    console.log(registration);
    return (
      <div className="event-registration">
        {
          registration.map((reg) => {
            return (<RegistrationCollection />)
          })
        }
        <RegistrationCollection />
      </div>
    );
  }
}

export default EventRegistration;
