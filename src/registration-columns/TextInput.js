import React, { Component } from 'react';

class TextInput extends Component {

  onChangeHandler = (event) => {
    this.props.sendValue(event.target.value, this.props.id)
  }

  render() {
    const {name} = this.props;
    return (
      <div className="textInput">
        <label>{name}</label>
        <input onChange={this.onChangeHandler} type="text" />
      </div>
    );
  }
}

export default TextInput;
