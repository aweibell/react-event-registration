import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegistrationCollection from '../registration-collection';

class EventRegistration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collections: this.props.registration.reduce((acc, reg) => {
        acc[reg.id] = [];
        return acc;
      }, {})
    };
    this.updateCollection = this.updateCollection.bind(this);
  }

  collect = (data, id) => {
    this.setState({
      collect: {
        ...this.state.collect,
        [id]: data,
      },
    });
  };

  updateCollection(collectionId, data) {
    const collections = {...this.state.collections};
    collections[collectionId] = data;
    this.setState({collections});
  }

  render() {
    const { registration, style } = this.props;
    return (
      <div style={style} className="event-registration">
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
            };
            return (<RegistrationCollection key={index} id={id} name={name} style={composedStyle} columns={columns}
                                            collection={this.state.collections[id]}
                                            updateCollection={this.updateCollection} />)
          })
        }
      </div>
    );
  }
}

EventRegistration.propTypes = {
  registration: PropTypes.array.isRequired,
  style: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}

export default EventRegistration;
