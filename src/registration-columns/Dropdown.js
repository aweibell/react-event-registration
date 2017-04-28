import React, { Component } from 'react';

class Dropdown extends Component {

  onChangeHandler = (event) => {
    this.props.sendValue(event.target.value, this.props.id)
  }

  render() {
    const {name, options} = this.props;
    return (
      <div className="checkBox">
        <label>{name}</label>
        <select name="select" onChange={this.onChangeHandler}>
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
