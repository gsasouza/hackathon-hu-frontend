import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { createFragmentContainer, graphql } from 'react-relay';

import { createQueryRenderer } from '../../relay/createQueryRender';
import { Content } from '../common';

const Header = styled(Paper)`
  display: flex;
  height: 168px;
  color: #606060;
  background-color: #309dd1;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  align-self: center;
  justify-content: center;
  font-size: 40px
`;

class ArticleDetail extends React.Component {
  render () {
    const { query } = this.props;
    const { title, description, createdBy } = query.article;
    return (
      <Content>
        <Header>
          <Title>
            {title}
          </Title>
        </Header>
      </Content>
    )
  }
}


const ArticleDetailFragmentContainer = createFragmentContainer(ArticleDetail, {
  query: graphql`
    fragment ArticleDetail_query on Query @argumentDefinitions(id: { type: "ID!" }) {
      article(id: $id) {
        title
        description
        createdBy {
          id
          name
        }
      }
    }
  `,
});

export default createQueryRenderer(ArticleDetailFragmentContainer, {
  query: graphql`
    query ArticleDetailQuery($id: ID!) {
      ...ArticleDetail_query @arguments(id: $id)
    }
  `,
  queriesParams: ({ match: { params } }) => ({
    id: params.id,
  }),
});
