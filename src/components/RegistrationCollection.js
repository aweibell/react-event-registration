import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RegistrationRow from './RegistrationRow';

const defaultStyles = {
  collection: {
    border: 'solid 2px #777',
    margin: '10px',
    collectionName: {
      padding: '5px 20px',
      fontWeight: 'bold',
      borderBottom: 'solid thin #aaa',
      color: '#fff',
      backgroundColor: '#777'
    }
  },
  row: {
    newRow: {
      backgroundColor: '#ddd',
      borderTop: 'solid thin #aaa'
    }
  }
};

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
    const {id, name, style, columns, texts} = this.props;
    const collectionNameStyle = Object.assign({}, defaultStyles.collection.collectionName, style.collection.collectionName);
    const collectionStyle = Object.assign({}, defaultStyles.collection, style.collection);
    delete collectionStyle.collectionName;
    const newRowStyle = Object.assign({}, defaultStyles.row, defaultStyles.row.newRow, style.row, style.row.newRow);
    const rowStyle = Object.assign({}, defaultStyles.row, style.row);
    delete rowStyle.newRow;
    return (
      <div style={collectionStyle}>
        <div style={collectionNameStyle}>{name}</div>
        {
          this.props.collection.map((data, index) => {
            return (<RegistrationRow key={index} index={index} collectionId={id} columns={columns} data={data}
                                     texts={texts}
                                     deleteRow={this.deleteRow}
                                     updateRow={this.updateRow} style={rowStyle}/>)
          })
        }
        <RegistrationRow collectionId={id} columns={columns} addRow={this.addRow} style={newRowStyle} texts={texts}/>
      </div>
    );
  }
}

RegistrationCollection.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  style: PropTypes.object,
  texts: PropTypes.object,
  columns: PropTypes.array.isRequired,
  collection: PropTypes.array.isRequired
};

export default RegistrationCollection;
