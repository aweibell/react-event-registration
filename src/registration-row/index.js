import React, { Component } from 'react';

const divStyle = {
  display: 'flex',
  justifyContent: 'left',
  padding: '10px'
};

class RegistrationRow extends Component {
  render() {
    const { name, type } = this.props;
    return (
      <div style={divStyle} className="registration-row">
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default RegistrationRow;
