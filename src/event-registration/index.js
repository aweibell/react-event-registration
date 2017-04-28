import React, { Component } from 'react';
import RegistrationCollection from '../registration-collection';

class EventRegistration extends Component {

  constructor(props) {
    super(props)
    this.state = {
      collect: {}
    }
  }

  collect = (data, id) => {
    this.setState({
      collect: {
        ...this.state.collect,
        [id]: data,
      },
    })
    console.log('Collection:')
    console.log(this.state)
  }

  render() {
    const { registration, style } = this.props;
    return (
      <div className="event-registration">
        {
          // For each configured registration type (collection)
          registration.map((data, index) => {
            const { id, name, columns } = data;
            const collectionStyle = data.style;
            const composedStyle = {
              collection: Object.assign({}, style.collection, collectionStyle.collection),
              row: Object.assign({}, style.row, collectionStyle.row),
              column: Object.assign({}, style.column, collectionStyle.column),
              label: Object.assign({}, style.label, collectionStyle.label),
              input: Object.assign({}, style.input, collectionStyle.input)
            }
            return (<RegistrationCollection key={index} id={id} name={name} style={composedStyle} columns={columns} collect={this.collect} />)
          })
        }
      </div>
    );
  }
}

export default EventRegistration;
