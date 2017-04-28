import React, { Component } from 'react';

import {TextInput, CheckBox, Dropdown} from '../registration-columns';

import {TEXT, CHECKBOX, DROPDOWN} from '../registration-columns/types';

const defaultRowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
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
    const { data, columns, style } = this.props;
    const rowStyle = Object.assign({}, defaultRowStyle, style.row);
    return (
      <div style={rowStyle} className="registration-row">
        {
          columns.map((data, index) => {
            const {id, name, type, options} = data;
            switch(type) {
              case CHECKBOX: return <CheckBox key={index} id={id} name={name} type={type} sendValue={this.sendValue} style={style}/>
              case DROPDOWN: return <Dropdown key={index} id={id} options={options} name={name} type={type} sendValue={this.sendValue} style={style} />
              case TEXT: return <TextInput key={index} id={id} name={name} type={type} sendValue={this.sendValue} style={style}/>
            }
          })
        }
      </div>
    );
  }
}

export default RegistrationRow;
