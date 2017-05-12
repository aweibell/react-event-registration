import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {TextInput, CheckBox, Dropdown} from '../registration-columns/RegistrationColumns';

import {TEXT, CHECKBOX, DROPDOWN} from '../registration-columns/types';

const defaultRowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  padding: '10px',
  button: {
    alignSelf: 'flex-end',
    flexGrow: '2',
    color: '#070',
    fontWeight: 'bold'
  }
};

class RegistrationRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowData: {}
    };
    this.addRow = this.addRow.bind(this);
  }

  sendValue = (value, colName) => {
    if (this.props.data) {
      // send updated row to parent
      const { data } = this.props;
      data[colName] = value;
      this.props.updateRow(this.props.index, data);
    } else {
      // row not added to collection yet, so update our own state
      const { rowData } = this.state;
      rowData[colName] = value;
      this.setState({ rowData });
    }
  };

  addRow(event) {
    event.preventDefault();
    if (this.props.addRow) {
      // calling parent to add row to collection
      this.props.addRow(this.state.rowData, this.props.collectionId);
      this.rowForm.reset();
      this.setState({rowData: {}});
    }
  }

  render() {
    const { data, columns, style } = this.props;
    const rowStyle = Object.assign({}, defaultRowStyle, style);
    return (
      <div className="registration-row">
        <form ref={(input) => this.rowForm = input} style={rowStyle} onSubmit={(e) => this.addRow(e)}>
        {
          columns.map((data, index) => {
            const {id, name, type, options} = data;
            const fieldData = this.props.data ? this.props.data[id] : undefined;
            switch (type) {
              case CHECKBOX:
                return <CheckBox key={index} id={id} name={name} type={type}
                                 sendValue={this.sendValue} style={style} data={fieldData} />
              case DROPDOWN:
                return <Dropdown key={index} id={id} options={options} name={name} type={type}
                                 sendValue={this.sendValue} style={style} data={fieldData} />
              case TEXT:
                return <TextInput key={index} id={id} name={name} type={type}
                                  ref={(input) => this.textInput = input}
                                  sendValue={this.sendValue} style={style} data={fieldData} />
            }
          })
        }
          {this.props.addRow &&
            <button style={rowStyle.button} type="submit" >Legg til</button>
          }
        </form>
      </div>
    );
  }
}

RegistrationRow.propTypes = {
  collectionId: PropTypes.string.isRequired,
  index: PropTypes.number,
  data: PropTypes.object,
  addRow: PropTypes.func,
  updateCollection: PropTypes.func,
  style: PropTypes.object,
  columns: PropTypes.array.isRequired
}

export default RegistrationRow;
