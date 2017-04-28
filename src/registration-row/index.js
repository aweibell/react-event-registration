import React, { Component } from 'react';

import {TextInput, CheckBox, Dropdown} from '../registration-columns';

import {TEXT, CHECKBOX, DROPDOWN} from '../registration-columns/types';

const divStyle = {
  display: 'flex',
  justifyContent: 'left',
  padding: '10px'
};

class RegistrationRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filledContent: {
      }
    }
  }

  sendValue = (value, id) => {
    console.log(`Value ${value} id: ${id}`)
    this.setState({
      filledContent: {
        ...this.state.filledContent,
        [id]: value,
      }
    });
    this.props.sendCollectionData(this.state.filledContent, this.props.index, this.props.id);
  }

  render() {
    const { data, columns } = this.props;
    return (
      <div style={divStyle} className="registration-row">
        {
          columns.map((data, index) => {
            const {id, name, type, options} = data;
            switch(type) {
              case CHECKBOX: return <CheckBox key={index} id={id} name={name} type={type} sendValue={this.sendValue} />
              case DROPDOWN: return <Dropdown key={index} id={id} options={options} name={name} type={type} sendValue={this.sendValue} />
              case TEXT: return <TextInput key={index} id={id} name={name} type={type} sendValue={this.sendValue} />
            }
          })
        }
      </div>
    );
  }
}

export default RegistrationRow;
