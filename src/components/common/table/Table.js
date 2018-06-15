import React from 'react';
import TableMUI from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

const Wrapper = styled(Paper)`
  width: 100%;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled(TableMUI)`
  min-width: 500px
`;

class Table extends React.Component {

  render() {
    const { columns, refetchProps, paginationProps, data, onRowClick } = this.props;
    return (
      <Wrapper>
        <TableContainer>
          <StyledTable>
            <TableHeader columns={columns}/>
            <TableBody data={data} columns={columns} onRowClick={onRowClick}/>
            <TableFooter {...paginationProps} {...refetchProps} />
          </StyledTable>
        </TableContainer>
      </Wrapper>
    );
  }
}

export default Table;
