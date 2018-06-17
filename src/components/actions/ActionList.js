import React from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { createRefetchContainer, graphql } from 'react-relay';


import { createQueryRenderer } from '../../relay/createQueryRender';
import { Content, Table, Button } from '../common';

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

class ActionList extends React.Component {
  state = {
    quantityPerPage: 10,
  };

  columns = [
    {
      property: 'title',
      header: {
        label: 'Título',
      },
    },
    {
      property: 'unit',
      header: {
        label: 'Unidade',
      },
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

    await relay.refetch(refetchVariables, refetchVariables);
  };

  loadPageForwardVars = (increasePgSize) => {
    const { query } = this.props;
    const { actions } = query;
    const { pageInfo } = actions;
    const lastItem = pageInfo.endCursor;
    return fragmentVariables => ({
      ...fragmentVariables,
      first: increasePgSize || this.state.quantityPerPage,
      after: increasePgSize ? null : lastItem,
    });
  };

  loadPageBackwardsVars = () => {
    const { query } = this.props;
    const { actions } = query;
    const { pageInfo } = actions;
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
    const { actions } = query;
    const { count, edges, pageInfo } = actions;
    const { quantityPerPage } = this.state;
    const data = edges.map(edge => edge.node);
    return (
      <Content>
        <Header>
          <Typography variant="headline" component="h3">
            Ações
          </Typography>
          <Button variant="contained" color="primary" style={{ marginRight: '40px' }} onClick={() => this.props.history.push('/actions/add')}>
            Adicionar ação
          </Button>
        </Header>
        <Divider />
        <TableWrapper>
          <Table
            columns={this.columns}
            data={data}
            onRowClick={({ id }) => this.props.history.push(`/actions/${id}`)}
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

const ActionListRefetchContainer = createRefetchContainer(
  ActionList,
  {
    query: graphql`
      fragment ActionList_query on Query
        @argumentDefinitions(
          first: { type: Int }
          last: { type: Int }
          before: { type: String }
          after: { type: String }
          search: { type: String }
        ) {
        actions(first: $first, last: $last, after: $after, before: $before, search: $search)
          @connection(key: "ActionList_actions", filters: []) {
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
              title
              unit
              situation
            }
          }
        }
      }
    `,
  },
  graphql`
    query ActionListRefetchQuery(
      $after: String
      $before: String
      $search: String
      $first: Int
      $last: Int
    ) {
     ...ActionList_query
        @arguments(first: $first, last: $last, after: $after, before: $before, search: $search)
    }
  `,
);

export default createQueryRenderer(ActionListRefetchContainer, {
  query: graphql`
    query ActionListQuery(
      $after: String
      $before: String
      $search: String
      $first: Int
      $last: Int
    ) {
      ...ActionList_query
        @arguments(first: $first, last: $last, after: $after, before: $before, search: $search)
    }
  `,
  variables: {
    first: 10,
    cursor: null,
    search: '',
  },
});
