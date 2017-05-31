import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {TEXT, CHECKBOX, DROPDOWN} from '../columns/types';

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

class ShowRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowData: {}
    };
    this.editRow = this.editRow.bind(this);
  }

  editRow(event) {
    event.preventDefault();
    if (this.props.editRow) {
      this.props.editRow(this.props.index);
    }
  }

  render() {
    const { columns, style } = this.props;
    // TODO: Consider lodash for deep cloning instead of Object.assign
    const rowStyle = Object.assign({}, defaultRowStyle, style);
    return (
      <tr className="registration-row">
        {
          columns.map((data, index) => {
            const {id, type } = data;
            const fieldData = this.props.data ? this.props.data[id] : undefined;
            switch (type) {
              case CHECKBOX:
                return <td key={index}>
                  {fieldData &&
                  <span>&#10004;</span>
                  }
                </td>
              case DROPDOWN:
              case TEXT:
              default:
                return <td key={index}>
                    {fieldData}
                  </td>
            }
          })
        }
        <td>
          {this.props.editRow &&
            <button style={rowStyle.button} onClick={this.editRow} type="" >Endre</button>
          }
        </td>
      </tr>
    );
  }
}

ShowRow.propTypes = {
  collectionId: PropTypes.string.isRequired,
  index: PropTypes.number,
  data: PropTypes.object,
  addRow: PropTypes.func,
  deleteRow: PropTypes.func,
  updateCollection: PropTypes.func,
  style: PropTypes.object,
  columns: PropTypes.array.isRequired
}

export default ShowRow;
