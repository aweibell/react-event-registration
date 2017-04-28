import React, { Component } from 'react';

const defaultStyle = {
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    marginLeft: '6px',
    marginRight: '6px'
  },
  label: {
    fontWeight: 'bold',
    textAlign: 'left',
    padding: '2px'
  },
  input: {
    padding: '2px'
  }
}

class Dropdown extends Component {

  onChangeHandler = (event) => {
    this.props.sendValue(event.target.value, this.props.id)
  }

  render() {
    const { name, options, style } = this.props;
    const composedStyle = {
      column: Object.assign({}, defaultStyle.column, style.column),
      label: Object.assign({}, defaultStyle.label, style.label),
      input: Object.assign({}, defaultStyle.input, style.input)
    }
    return (
      <div style={composedStyle.column}>
        <label style={composedStyle.label}>{name}</label>
        <select style={composedStyle.input} name="select" onChange={this.onChangeHandler}>
          {
            options.map((opt, index) => {
              const {text, value, selected} = opt
              return (<option key={index} value={value} selected={selected}>{text}</option>)
            })
          }
        </select>
      </div>
    );
  }
}

export default Dropdown;
