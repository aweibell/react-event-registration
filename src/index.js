import React, { Component } from 'react';
import PropTypes from 'prop-types';
import requiredIf from 'react-required-if';
import RegistrationCollection from './components/RegistrationCollection';

class EventRegistration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collections: this.props.formGroups.reduce((acc, reg) => {
        acc[reg.id] = [];
        return acc;
      }, {})
    };
    this.updateCollection = this.updateCollection.bind(this);
    this.submit = this.submit.bind(this);
    this.mergeDataAndFormGroups = this.mergeDataAndFormGroups.bind(this);
  }

  /*
   * Is called when parent updates props, i.e. when data is updated from the outside
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.data) {
      this.setState({ collections: this.mergeDataAndFormGroups(nextProps.data) });
    }
  }

  mergeDataAndFormGroups(data) {
    const result = {...data};
    // add formGroups that are not yet present in data
    this.props.formGroups.forEach((fg, index) => {
      if (result[fg.id] === undefined) {
        result[fg.id] = [];
      }
    });
    return result;
  }

  updateCollection(collectionId, data) {
    const collections = {...this.state.collections};
    collections[collectionId] = data;
    this.setState({collections});
  }

  componentDidUpdate() {
    if (this.props.onChange) {
      this.props.onChange(this.state.collections);
    }
  }

  submit() {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.collections);
    }
  }

  render() {
    const { formGroups, style, data } = this.props;
    return (
      <div style={style} className="event-registration">
        {
          // For each configured registration type (collection)
          formGroups.map((config, index) => {
            const { id, name, columns } = config;
            const collectionStyle = config.style;
            // Merge specific styling for collection with global styling from users config
            const composedStyle = {
              collection: Object.assign({}, style.collection, collectionStyle.collection),
              row: Object.assign({}, style.row, collectionStyle.row),
              column: Object.assign({}, style.column, collectionStyle.column),
              label: Object.assign({}, style.label, collectionStyle.label),
              input: Object.assign({}, style.input, collectionStyle.input)
            };
            return (<RegistrationCollection key={index} id={id} name={name}
                                            style={composedStyle} columns={columns}
                                            collection={this.state.collections[id]}
                                            updateCollection={this.updateCollection} />)
          })
        }
        {this.props.onSubmit &&
        <button onClick={this.submit}>Send inn</button>
        }
      </div>
    );
  }
}

EventRegistration.propTypes = {
  formGroups: PropTypes.array.isRequired,
  data: PropTypes.object,
  style: PropTypes.object,
  onChange: requiredIf(PropTypes.func, props => !props.onSubmit),
  onSubmit: requiredIf(PropTypes.func, props => !props.onChange)
}

export default EventRegistration;
