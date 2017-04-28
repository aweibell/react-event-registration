import React, { Component } from 'react';
import RegistrationRow from '../registration-row';

const defaultCollectionStyle = {
  border: 'solid thin black',
  margin: '10px'
}

class RegistrationCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content || [{"name":"Ola Nordmann"}]
    }
  }

  render() {
    const {name, style, columns} = this.props;
    const collectionStyle = Object.assign({}, defaultCollectionStyle, style.collection);
    return (
      <div style={collectionStyle}>
      {
        this.state.content.map((data, index) => {
          return (<RegistrationRow key={index} columns={columns} data={data} style={style} />)
        })
      }
      </div>
    );
  }
}

export default RegistrationCollection;
