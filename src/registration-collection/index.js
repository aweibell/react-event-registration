import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegistrationRow from '../registration-row';

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
    this.state = {
      content: this.props.content || [{}],
      filledContent: {}
    }
  }

  sendCollectionData = (data, index, id) => {
    console.log(`sendCollectionData: id: ${id}: index: ${index} data: ${data}`)
    this.setState({
      filledContent: {
        ...this.state.filledContent,
        [index]: data
      }
    })
    this.props.collect(this.state.filledContent, this.props.id)
  }

  render() {
    const {id, name, style, columns} = this.props;
    const collectionStyle = Object.assign({}, defaultCollectionStyle, style.collection);
    return (
      <div style={collectionStyle}>
      <div style={collectionStyle.collectionName}>{name}</div>
      {
        this.state.content.map((data, index) => {
          return (<RegistrationRow key={index} index={index} id={id} columns={columns} data={data} sendCollectionData={this.sendCollectionData} style={style} />)
        })
      }
      </div>
    );
  }
}

RegistrationCollection.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  style: PropTypes.object,
  columns: PropTypes.array.isRequired,
  collect: PropTypes.func.isRequired
}

export default RegistrationCollection;
