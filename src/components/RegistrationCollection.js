import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegistrationRow from './RegistrationRow';

const defaultCollectionStyle = {
  border: 'solid thin black',
  margin: '10px',
  collectionName: {
    fontWeight: 'bold',
    backgroundColor: '#eee'
  }
}

class RegistrationCollection extends Component {
  constructor(props) {
    super(props);
    this.addRow = this.addRow.bind(this);
    this.updateRow = this.updateRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  updateRow(rowIndex, updatedValue) {
    const { collection } = this.props;
    collection[rowIndex] = updatedValue;
    this.props.updateCollection(this.props.id, collection);
  }

  addRow(newRow, collectionId) {
    // Make a copy of props.collection array
    const collection = [...this.props.collection ];
    collection.push(newRow);
    this.props.updateCollection(collectionId, collection);
  }

  deleteRow(rowIndex) {
    const { collection } = this.props;
    collection.splice(rowIndex, 1);
    this.props.updateCollection(this.props.id, collection);
  }

  render() {
    const {id, name, style, columns} = this.props;
    const collectionStyle = Object.assign({}, defaultCollectionStyle, style.collection);
    const newRowStyle = {...collectionStyle.row};
    newRowStyle.backgroundColor = '#ddffff';
    newRowStyle.borderTop = 'solid thin black';
    return (
      <div style={collectionStyle}>
      <div style={collectionStyle.collectionName}>{name}</div>
      {
        this.props.collection.map((data, index) => {
          return (<RegistrationRow key={index} index={index} collectionId={id} columns={columns} data={data}
                                   deleteRow={this.deleteRow}
                                   updateRow={this.updateRow} style={style.row} />)
        })
      }
      <RegistrationRow collectionId={id} columns={columns} addRow={this.addRow} style={newRowStyle} />
      </div>
    );
  }
}

RegistrationCollection.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  style: PropTypes.object,
  columns: PropTypes.array.isRequired,
  collection: PropTypes.array.isRequired
};

export default RegistrationCollection;
