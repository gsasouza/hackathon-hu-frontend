import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { createRefetchContainer, graphql } from 'react-relay';

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

class ArticleList extends React.Component {
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
      property: 'category',
      header: {
        label: 'Categoria',
      },
    },
    {
      property: 'createdBy.name',
      header: {
        label: 'Criador',
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

    await relay.refetch(refetchVariables, null);
  };

  loadPageForwardVars = (increasePgSize) => {
    const { query } = this.props;
    const { articles } = query;
    const { pageInfo } = articles;
    const lastItem = pageInfo.endCursor;
    return fragmentVariables => ({
      ...fragmentVariables,
      first: increasePgSize || this.state.quantityPerPage,
      after: increasePgSize ? null : lastItem,
    });
  };

  loadPageBackwardsVars = () => {
    const { query } = this.props;
    const { articles } = query;
    const { pageInfo } = articles;
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
    const { articles } = query;
    const { count, edges, pageInfo } = articles;
    const { quantityPerPage } = this.state;
    const data = edges.map(edge => edge.node);
    return (
      <Content>
        <Header>
          <Typography variant="headline" component="h3">
            Pesquisas
          </Typography>
          <Button variant="contained" color="primary" style={{ marginRight: '40px' }} onClick={() => this.props.history.push('/articles/add')}>
            Adicionar Pesquisa
          </Button>
        </Header>
        <Divider />
        <TableWrapper>
          <Table
            columns={this.columns}
            data={data}
            onRowClick={({ id }) => this.props.history.push(`/articles/${id}`)}
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

const ArticleListRefetchContainer = createRefetchContainer(
  ArticleList,
  {
    query: graphql`
      fragment ArticleList_query on Query
        @argumentDefinitions(
          first: { type: Int }
          last: { type: Int }
          before: { type: String }
          after: { type: String }
          search: { type: String }
        ) {
        articles(first: $first, last: $last, after: $after, before: $before, search: $search)
          @connection(key: "ArticleList_articles") {
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
              category
              createdBy {
                name
              }
            }
          }
        }
      }
    `,
  },
  graphql`
    query ArticleListRefetchQuery(
      $after: String
      $before: String
      $search: String
      $first: Int
      $last: Int
    ) {
     ...ArticleList_query
        @arguments(first: $first, last: $last, after: $after, before: $before, search: $search)
    }
  `,
);

export default createQueryRenderer(ArticleListRefetchContainer, {
  query: graphql`
    query ArticleListQuery(
      $after: String
      $before: String
      $search: String
      $first: Int
      $last: Int
    ) {
      ...ArticleList_query
        @arguments(first: $first, last: $last, after: $after, before: $before, search: $search)
    }
  `,
  variables: {
    first: 10,
    cursor: null,
    search: '',
  },
});
