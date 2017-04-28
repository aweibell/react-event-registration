import React, { Component } from 'react';

const defaultStyle = {
  component: {
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

class TextInput extends Component {
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
    const {name} = this.props;
    return (
      <div style={this.css.component}>
        <label style={this.css.label}>{name}</label>
        <input style={this.css.input} onChange={this.onChangeHandler} type="text" />
      </div>
    );
  }
}

export default TextInput;
