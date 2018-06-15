import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import styled from 'styled-components';

const Row = styled(TableRow)`
  cursor: pointer;
`;


export default class Body extends React.Component {
  getValue = (keys, item) => {
    if(!item) return '---';
    const [firstKey, ...rest] = keys;
    const value = item[firstKey];
    if (![...rest].length) return value;
    return this.getValue([...rest], value);
  };

  render() {
    const { data = [{ id: 1}], columns, onRowClick } = this.props;
    console.log(this.props)
    return (
      <TableBody>
        {
          data.map(item => (
            <Row key={item.id} onClick={() => onRowClick(item)} hover>
              {
                columns.map((column, index) => {
                  const value = this.getValue(column.property.split('.'), item);
                  return (
                    <TableCell component="th" scope="row" key={`${item.id}:${value}:${index}`}>
                      {value}
                    </TableCell>
                  )
                })
              }
            </Row>
          ))
        }
      </TableBody>
    )
  }
}
