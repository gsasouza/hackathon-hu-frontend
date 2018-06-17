import React from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { createRefetchContainer, graphql } from 'react-relay';

import { createQueryRenderer } from '../../relay/createQueryRender';
import { Content, Table, withSnackbar } from '../common';

import AuthorRemoveMutation from './mutation/AuthorRemoveMutation';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  padding: 20px;
`;

const TableWrapper = styled.div`
  margin-top: 30px;
`;

class AuthorList extends React.Component {
  state = {
    quantityPerPage: 10,
  };

  handleRemove = ({ id }) => {
    const { showSnackbar } = this.props;

    const onCompleted = ({ AuthorRemove: { error }}) => {
      if (error) return showSnackbar({ message: error });
      showSnackbar({
        message: 'Operação realizada com êxito!',
      });
      window.location.reload();
    };

    const onError = () => {
      this.context.showSnackbar({
        message: 'Ocorreu um erro ao realizar a operação',
      });
    };

    AuthorRemoveMutation.commit({ id }, onCompleted, onError);
  };

  columns = [
    {
      property: 'name',
      header: {
        label: 'Nome',
      },
    },
    {
      property: 'email',
      header: {
        label: 'E-mail',
      },
    },
    {
      property: 'unit',
      header: {
        label: 'Unidade',
      },
    },
    {
      property: 'remove',
      header: {
        label: 'Remover',
      },
      type: 'icon',
      icon: <DeleteIcon />,
      onClick: this.handleRemove
    },
  ];



  setQuantityPerPage = value => {
    this.setState({ quantityPerPage: value }, () => this.loadPage(true, value));
  };

  loadPage = async (isForward, increasePgSize) => {
    const { relay } = this.props;

    const refetchVariables = isForward
      ? this.loadPageForwardVars(increasePgSize)
      : this.loadPageBackwardsVars();

    await relay.refetch(refetchVariables, null);
  };

  loadPageForwardVars = (increasePgSize) => {
    const { query } = this.props;
    const { authors } = query;
    const { pageInfo } = authors;
    const lastItem = pageInfo.endCursor;
    return fragmentVariables => ({
      ...fragmentVariables,
      first: increasePgSize || this.state.quantityPerPage,
      after: increasePgSize ? null : lastItem,
    });
  };

  loadPageBackwardsVars = () => {
    const { query } = this.props;
    const { authors } = query;
    const { pageInfo } = authors;
    const firstItem = pageInfo.startCursor;

    return fragmentVariables => ({
      ...fragmentVariables,
      last: this.state.quantityPerPage,
      first: null,
      before: firstItem,
    });
  };
  render () {
    const { query } = this.props;
    const { authors } = query;
    const { count, edges, pageInfo } = authors;
    const { quantityPerPage } = this.state;
    const data = edges.map(edge => edge.node);
    return (
      <Content>
        <Header>
          <Typography variant="headline" component="h3">
            Pesquisadores
          </Typography>
          <Button variant="contained" color="primary" style={{ marginRight: '40px' }} onClick={() => this.props.history.push('/authors/add')}>
            Adicionar Pesquisador
          </Button>
        </Header>
        <Divider />
        <TableWrapper>
          <Table
            columns={this.columns}
            data={data}
            onRowClick={() => {}}
            paginationProps={{
              count,
              setQuantityPerPage: this.setQuantityPerPage,
              qtyPerPage: quantityPerPage,
              handleChangePage: this.loadPage,
              pageInfo,
            }}
          />
        </TableWrapper>
      </Content>
    )
  }
}

const AuthorListRefetchContainer = createRefetchContainer(
  AuthorList,
  {
    query: graphql`
      fragment AuthorList_query on Query
        @argumentDefinitions(
          first: { type: Int }
          last: { type: Int }
          before: { type: String }
          after: { type: String }
          search: { type: String }
        ) {
        authors(first: $first, last: $last, after: $after, before: $before, search: $search)
          @connection(key: "AuthorList_authors") {
          count
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            node {
              id 
              name
              email
              unit
            }
          }
        }
      }
    `,
  },
  graphql`
    query AuthorListRefetchQuery(
      $after: String
      $before: String
      $search: String
      $first: Int
      $last: Int
    ) {
     ...AuthorList_query
        @arguments(first: $first, last: $last, after: $after, before: $before, search: $search)
    }
  `,
);

export default withSnackbar(
  createQueryRenderer(AuthorListRefetchContainer, {
    query: graphql`
      query AuthorListQuery(
        $after: String
        $before: String
        $search: String
        $first: Int
        $last: Int
      ) {
        ...AuthorList_query
          @arguments(first: $first, last: $last, after: $after, before: $before, search: $search)
      }
    `,
    variables: {
      first: 10,
      cursor: null,
      search: '',
    },
  })
);
