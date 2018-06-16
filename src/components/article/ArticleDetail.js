import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { createFragmentContainer, graphql } from 'react-relay';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import HeartBorderIcon from '@material-ui/icons/FavoriteBorder';
import HeartIcon from '@material-ui/icons/Favorite';


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

  state = {
    isLiked: false,
    isFollowing: false,
  };

  onClickLike = () => this.setState({ isLiked: !this.state.isLiked });

  onClickFollow = () => this.setState({ isFollowing: !this.state.isFollowing });

  render () {
    const { isLiked, isFollowing } = this.state;
    return (
      <Content>
        <Header>
          <Title>
            {'teste'}
            <div onClick={this.onClickLike}>
              { isLiked ? <HeartIcon /> : <HeartBorderIcon />}
            </div>
            <div onClick={this.onClickFollow}>
              { isFollowing ? <StarIcon /> : <StarBorderIcon />}
            </div>
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
