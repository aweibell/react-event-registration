import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    const {name, options} = this.props;
    return (
      <div className="checkBox">
        <label>{name}</label>
        <select name="select">
          {
            options.map((opt, index) => {
              const {text, value, selected} = opt
              return (<option key={index} value="{value}" selected={selected}>{text}</option>)
            })
          }
        </select>
      </div>
    );
  }
}

export default Checkbox;
