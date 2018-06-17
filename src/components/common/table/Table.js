import React from 'react';
import TableMUI from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

import TableHeader from './TableHeader';
import TableBody from './TableBody';


const Wrapper = styled(Paper)`
  width: 100%;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled(TableMUI)`
  min-width: 500px
`;

const EmptyMessage = styled.div`
  display: flex;
  justify-content: center;
  font-size: 26px;
  margin: 20px;
`;

class Table extends React.Component {

  handleNextButtonClick = () => {
    this.props.paginationProps.handleChangePage(true);
  };

  render() {
    const { columns, paginationProps, data, onRowClick, emptyMessage = 'Nenhum resultado encontrado :(' } = this.props;
    return (
      <div>
        {data.length ? (
          <Wrapper>
            <TableContainer>
              <StyledTable>
                <TableHeader columns={columns}/>
                <TableBody data={data} columns={columns} onRowClick={onRowClick}/>
              </StyledTable>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton
                  onClick={this.handleNextButtonClick}
                  disabled={!paginationProps.pageInfo.hasNextPage}
                  aria-label="Carregar Mais"
                >
                  <KeyboardArrowDown />
                </IconButton>
              </div>
            </TableContainer>
          </Wrapper>
        ) : (
          <EmptyMessage>
            {emptyMessage}
          </EmptyMessage>
        )}
      </div>
    );
  }
}

export default Table;
