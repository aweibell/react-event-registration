import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }


  onChangeHandler(event) {
    this.props.sendValue(event.target.checked, this.props.id)
  }

  render() {
    const {name, style, data} = this.props;
    const composedStyle = {
      column: Object.assign({}, defaultStyle.column, style.column),
      label: Object.assign({}, defaultStyle.label, style.label),
      input: Object.assign({}, defaultStyle.input, style.input)
    }
    return (
      <div style={composedStyle.column}>
        <label style={composedStyle.label}>{name}</label>
        <input style={composedStyle.input} onChange={this.onChangeHandler} type="checkbox" checked={data} value={data} />
      </div>
    );
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired
}

export default Checkbox;
