import React, { Component } from 'react';

import {TextInput, CheckBox, Dropdown} from '../registration-columns';

import {TEXT, CHECKBOX, DROPDOWN} from '../registration-columns/types';

const divStyle = {
  display: 'flex',
  justifyContent: 'left',
  padding: '10px'
};

class RegistrationRow extends Component {
  render() {
    const { data, columns } = this.props;
    return (
      <div style={divStyle} className="registration-row">
        {
          columns.map((data, index) => {
            const {name, type, options} = data;
            switch(type) {
              case CHECKBOX: return <CheckBox key={index} name={name}/>
              case DROPDOWN: return <Dropdown key={index} options={options} name={name}/>
              case TEXT: return <TextInput key={index} name={name}/>
            }
          })
        }
      </div>
    );
  }
}

export default RegistrationRow;
