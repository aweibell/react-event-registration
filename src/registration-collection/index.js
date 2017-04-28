import React, { Component } from 'react';
import RegistrationRow from '../registration-row';

class RegistrationCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content || [{"name":"Ola Nordmann"}]
    }
  }

  render() {
    const {name, style, columns} = this.props;
    return (
      <div className="registration-collection">
      {
        this.state.content.map((data, index) => {
          return (<RegistrationRow key={index} columns={columns} data={data} />)
        })
      }
      </div>
    );
  }
}

export default RegistrationCollection;
