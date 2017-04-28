import React, { Component } from 'react';
import RegistrationCollection from '../registration-collection';

class EventRegistration extends Component {
  render() {
    const { registration, style } = this.props;
    console.log(registration);
    return (
      <div className="event-registration">
        {
          // For each configured registration type (collection)
          registration.map((data, index) => {
            const { name, columns } = data;
            const collectionStyle = data.style;
            const composedStyle = {
              collection: Object.assign({}, style.collection, collectionStyle.collection),
              row: Object.assign({}, style.row, collectionStyle.row),
              column: Object.assign({}, style.column, collectionStyle.column),
              label: Object.assign({}, style.label, collectionStyle.label),
              input: Object.assign({}, style.input, collectionStyle.input)
            }
            return (<RegistrationCollection key={index} name={name} style={composedStyle} columns={columns} />)
          })
        }
      </div>
    );
  }
}

export default EventRegistration;
