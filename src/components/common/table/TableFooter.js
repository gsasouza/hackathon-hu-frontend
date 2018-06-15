import React from 'react';
import styled from 'styled-components';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const Actions = styled.div`
  flex-shrink: 0;
  margin-left: 3px;
`;

class PaginationActions extends React.Component {

  handleBackButtonClick = () => {
    this.props.handleChangePage(false);
  };

  handleNextButtonClick = () => {
    this.props.handleChangePage(true);
  };

  render() {
    const { pageInfo } = this.props;

    return (
      <Actions>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={!pageInfo.hasPreviousPage}
          aria-label="Previous Page"
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={!pageInfo.hasNextPage}
          aria-label="Next Page"
        >
          <KeyboardArrowRight />
        </IconButton>
      </Actions>
    );
  }
}

export default class Footer extends React.Component {
  state = {
    page: 0,
  };

  render() {
    const { page } = this.state;
    const { count, setQuantityPerPage, qtyPerPage, handleChangePage } = this.props;

    return (
      <TableFooter>
        <TableRow>
          <TablePagination
            colSpan={3}
            count={count}
            rowsPerPage={qtyPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={(e) => setQuantityPerPage(e.target.value)}
            ActionsComponent={() => <PaginationActions {...this.props}/>}
          />
        </TableRow>
      </TableFooter>
    )
  }
}
