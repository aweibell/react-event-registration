import React, { Component } from 'react';

class Checkbox extends Component {

  onChangeHandler = (event) => {
    this.props.sendValue(event.target.checked, this.props.id)
  }

  render() {
    const {name} = this.props;
    return (
      <div className="checkBox">
        <label>{name}</label>
        <input onChange={this.onChangeHandler} type="checkbox" />
      </div>
    );
  }
}

export default Checkbox;
