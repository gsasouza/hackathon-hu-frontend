import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { createRefetchContainer, graphql } from 'react-relay';
import TextField from '@material-ui/core/TextField';

import { createQueryRenderer } from '../../relay/createQueryRender';
import { Content, Table } from '../common';

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

class NewsList extends React.Component {
  state = {
    quantityPerPage: 10,
    search: ''
  };

  columns = [
    {
      property: 'title',
      header: {
        label: 'Título',
      },
    },
    {
      property: 'tag',
      header: {
        label: 'Categoria',
      },
    },
  ];

  handleSearch = (term: string) => {
    const refetchVariables = fragmentVariables => ({
      ...fragmentVariables,
      search: term,
    });

    this.props.relay.refetch(refetchVariables);
  };

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
    const { news } = query;
    const { pageInfo } = news;
    const lastItem = pageInfo.endCursor;
    return fragmentVariables => ({
      ...fragmentVariables,
      first: increasePgSize || this.state.quantityPerPage,
      after: increasePgSize ? null : lastItem,
    });
  };

  loadPageBackwardsVars = () => {
    const { query } = this.props;
    const { news } = query;
    const { pageInfo } = news;
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
    const { news } = query;
    const { count, edges, pageInfo } = news;
    const { quantityPerPage } = this.state;
    const data = edges.map(edge => edge.node);
    return (
      <Content>
        <Header>
          <Typography variant="headline" component="h3">
            Notícias
          </Typography>
        </Header>
        <Divider />
        <TableWrapper>
          <Table
            columns={this.columns}
            data={data}
            onRowClick={({ id }) => this.props.history.push(`/news/${id}`)}
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

const NewsListRefetchContainer = createRefetchContainer(
  NewsList,
  {
    query: graphql`
      fragment NewsList_query on Query
        @argumentDefinitions(
          first: { type: Int }
          last: { type: Int }
          before: { type: String }
          after: { type: String }
          search: { type: String }
        ) {
        news(first: $first, last: $last, after: $after, before: $before, search: $search)
          @connection(key: "NewsList_news") {
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
              tag
            }
          }
        }
      }
    `,
  },
  graphql`
    query NewsListRefetchQuery(
      $after: String
      $before: String
      $search: String
      $first: Int
      $last: Int
    ) {
     ...NewsList_query
        @arguments(first: $first, last: $last, after: $after, before: $before, search: $search)
    }
  `,
);

export default createQueryRenderer(NewsListRefetchContainer, {
  query: graphql`
    query NewsListQuery(
      $after: String
      $before: String
      $search: String
      $first: Int
      $last: Int
    ) {
      ...NewsList_query
        @arguments(first: $first, last: $last, after: $after, before: $before, search: $search)
    }
  `,
  variables: {
    first: 10,
    cursor: null,
    search: '',
  },
});
