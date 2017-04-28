import React, { Component } from 'react';

class TextInput extends Component {
  render() {
    const {name} = this.props;
    return (
      <div className="textInput">
        <label>{name}</label>
        <input type="text" />
      </div>
    );
  }
}

export default TextInput;
