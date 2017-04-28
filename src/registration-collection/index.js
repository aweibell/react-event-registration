import React, { Component } from 'react';
import RegistrationRow from '../registration-row';

const defaultCollectionStyle = {
  border: 'solid thin black',
  margin: '10px'
}

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
    const collectionStyle = Object.assign({}, defaultCollectionStyle, style.collection);
    return (
      <div style={collectionStyle}>
      {
        this.state.content.map((data, index) => {
          return (<RegistrationRow key={index} index={index} id={id} columns={columns} data={data} sendCollectionData={this.sendCollectionData} style={style} />)
        })
      }
      </div>
    );
  }
}

export default RegistrationCollection;
