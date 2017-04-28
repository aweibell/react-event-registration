import React, { Component } from 'react';

const defaultStyle = {
  component: {
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
  constructor(props) {
    super(props)
    const { style } = props;
    this.css = {
      component: Object.assign({}, defaultStyle.component, style.component),
      label: Object.assign({}, defaultStyle.label, style.label),
      input: Object.assign({}, defaultStyle.input, style.input)
    }
  }

  onChangeHandler = (event) => {
    this.props.sendValue(event.target.value, this.props.id)
  }

  render() {
    const {name, options} = this.props;
    return (
      <div style={this.css.component}>
        <label style={this.css.label}>{name}</label>
        <select style={this.css.input} name="select" onChange={this.onChangeHandler}>
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
