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

class Checkbox extends Component {
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
    this.props.sendValue(event.target.checked, this.props.id)
  }

  render() {
    const {name} = this.props;
    return (
      <div style={this.css.component}>
        <label style={this.css.label}>{name}</label>
        <input style={this.css.input} onChange={this.onChangeHandler} type="checkbox" />
      </div>
    );
  }
}

export default Checkbox;
