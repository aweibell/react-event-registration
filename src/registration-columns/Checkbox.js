import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    const {name} = this.props;
    return (
      <div className="checkBox">
        <label>{name}</label>
        <input type="checkbox" />
      </div>
    );
  }
}

export default Checkbox;
