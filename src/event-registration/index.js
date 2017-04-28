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
    const { registration } = this.props;
    return (
      <div className="event-registration">
        {
          registration.map((data, index) => {
            const { id, name, style, columns } = data;
            return (<RegistrationCollection key={index} id={id} name={name} style={style} columns={columns} collect={this.collect} />)
          })
        }
      </div>
    );
  }
}

export default EventRegistration;
