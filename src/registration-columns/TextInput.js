import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultStyle = {
  column: {
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

  onChangeHandler = (event) => {
    // TODO: Debounce events? lodash.debounce(...)
    this.props.sendValue(event.target.value, this.props.id)
  }

  render() {
    const {name, style} = this.props;
    const composedStyle = {
      column: Object.assign({}, defaultStyle.column, style.column),
      label: Object.assign({}, defaultStyle.label, style.label),
      input: Object.assign({}, defaultStyle.input, style.input)
    }
    return (
      <div style={composedStyle.column}>
        <label style={composedStyle.label}>{name}</label>
        <input style={composedStyle.input} onChange={this.onChangeHandler} type="text" />
      </div>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired
}

export default TextInput;
