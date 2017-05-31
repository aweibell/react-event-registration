import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowCollection from './ShowCollection';

class ShowRegistrations extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collections: this.props.formGroups.reduce((acc, reg) => {
        acc[reg.id] = [];
        return acc;
      }, {})
    };
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

  render() {
    const { formGroups, style, data } = this.props;
    return (
      <div style={style} className="show-events">
        {
          // For each configured registration type (collection)
          formGroups.map((config, index) => {
            const { id, name, columns } = config;
            const collectionStyle = config.style;
            const composedStyle = {
              collection: Object.assign({}, style.collection, collectionStyle.collection),
              row: Object.assign({}, style.row, collectionStyle.row),
              column: Object.assign({}, style.column, collectionStyle.column),
              label: Object.assign({}, style.label, collectionStyle.label),
              input: Object.assign({}, style.input, collectionStyle.input)
            };
            return (<ShowCollection key={index} id={id} name={name}
                                            style={composedStyle} columns={columns}
                                            collection={this.state.collections[id]} />)
          })
        }
      </div>
    );
  }
}

ShowRegistrations.propTypes = {
  formGroups: PropTypes.array.isRequired,
  data: PropTypes.object,
  style: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}

export default ShowRegistrations;
