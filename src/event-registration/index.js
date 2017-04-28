import React, { Component } from 'react';
import RegistrationCollection from '../registration-collection';

class EventRegistration extends Component {
  render() {
    const { registration } = this.props;
    console.log(registration);
    return (
      <div className="event-registration">
        {
          registration.map((data, index) => {
            const { name, style, columns } = data;
            return (<RegistrationCollection key={index} name={name} style={style} columns={columns} />)
          })
        }
      </div>
    );
  }
}

export default EventRegistration;
