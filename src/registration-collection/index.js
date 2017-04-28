import React, { Component } from 'react';
import RegistrationRow from '../registration-row';

class RegistrationCollection extends Component {
  render() {
    const {name, style, columns} = this.props;
    return (
      <div className="registration-collection">
      {
        columns.map((data, index) => {
          const {name, type } = data;
          return (<RegistrationRow key={index} name={name} type={type} />)
        })
      }
      </div>
    );
  }
}

export default RegistrationCollection;
