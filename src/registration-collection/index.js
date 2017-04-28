import React, { Component } from 'react';
import RegistrationRow from '../registration-row';

class RegistrationCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content || [{}],
      filledContent: {}
    }
  }

  sendCollectionData = (data, index, id) => {
    console.log(`sendCollectionData: id: ${id}: index: ${index} data: ${data}`)
    this.setState({
      filledContent: {
        ...this.state.filledContent,
        [index]: data
      }
    })
    this.props.collect(this.state.filledContent, this.props.id)
  }

  render() {
    const {id, name, style, columns} = this.props;
    return (
      <div className="registration-collection">
      {
        this.state.content.map((data, index) => {
          return (<RegistrationRow key={index} index={index} id={id} columns={columns} data={data} sendCollectionData={this.sendCollectionData} />)
        })
      }
      </div>
    );
  }
}

export default RegistrationCollection;
