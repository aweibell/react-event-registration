import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

class ShowRowHeaders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowData: {}
    };
  }

  render() {
    const { columns, style } = this.props;
    // TODO: Consider lodash for deep cloning instead of Object.assign
    const rowStyle = Object.assign({}, defaultRowStyle, style);
    return (
      <tr className="registration-row">
        {
          columns.map((data, index) => {
            const {name} = data;
            return <th key={index}>{name}</th>
          })
        }
      </tr>
    );
  }
}

ShowRowHeaders.propTypes = {
  collectionId: PropTypes.string.isRequired,
  index: PropTypes.number,
  style: PropTypes.object,
  columns: PropTypes.array.isRequired
}

export default ShowRowHeaders;
