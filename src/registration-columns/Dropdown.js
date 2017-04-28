import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    const {name, options} = this.props;
    return (
      <div className="checkBox">
        <label>{name}</label>
        <select name="select">
          {
            options.map((opt) => {
              const {text, value, selected} = opt
              return (<option value="{value}" {selected}>{text}</option>)
            })
          }
        </select>
        <input type="checkbox" />
      </div>
    );
  }
}

export default Checkbox;
