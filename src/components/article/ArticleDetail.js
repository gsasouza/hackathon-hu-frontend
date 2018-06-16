import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { createFragmentContainer, graphql } from 'react-relay';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import HeartBorderIcon from '@material-ui/icons/FavoriteBorder';
import HeartIcon from '@material-ui/icons/Favorite';
import Chip from '@material-ui/core/Chip';

import { createQueryRenderer } from '../../relay/createQueryRender';
import { Content } from '../common';
import LikeAdd from './mutation/LikeAddMutation';
import LikeRemove from './mutation/LikeRemoveMutation';
import FollowAdd from './mutation/FollowAddMutation';
import FollowRemove from './mutation/FollowRemoveMutation';

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
    likeCount: 0,
    isFollowing: false,
    followCount: 0,
  };

  componentDidMount(){
    const { query } = this.props;
    const { likes, likesFromMe, follows, followsFromMe } = query;
    return this.setState({
      likeCount: likes.count,
      isLiked: likesFromMe,
      isFollowing: followsFromMe,
      followCount: follows.count
    })

  }

  onClickLike = () => {
    this.setState({ isLiked: !this.state.isLiked }, () => {
      const { isLiked } = this.state;
      const { id } = this.props.match.params;
      if (isLiked) {
        return LikeAdd.commit({ articleId: id }, () => {
          return this.setState({ likeCount: this.state.likeCount + 1})
        }, () => {});
      }
      return LikeRemove.commit({ articleId: id }, () => {
        return this.setState({ likeCount: this.state.likeCount - 1})
      }, () => {});
    });
  };

  onClickFollow = () => {
    this.setState({ isFollowing: !this.state.isFollowing }, () => {
      const { isFollowing } = this.state;
      const { id } = this.props.match.params;
      if (isFollowing) {
        return FollowAdd.commit({ articleId: id }, () => {
          return this.setState({ followCount: this.state.followCount + 1})
        }, () => {});
      }
      return FollowRemove.commit({ articleId: id }, () => {
        return this.setState({ followCount: this.state.followCount - 1})
      }, () => {});
    });
  };

  render () {
    const { isLiked, isFollowing, likeCount, followCount } = this.state;
    console.log(followCount);
    console.log(this.props);
    return (
      <Content>
        <Header>
          <Title>
            {'TITULO'}
            <Chip
              avatar={isLiked ? <HeartIcon /> : <HeartBorderIcon />}
              label={likeCount}
              onClick={this.onClickLike}
            />
            <Chip
              avatar={ isFollowing ? <StarIcon /> : <StarBorderIcon />}
              label={followCount}
              onClick={this.onClickFollow}
            />
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
      likes {
        count
      }
      follows {
        count
      }
      likesFromMe(article: $id)
      followsFromMe(article: $id)
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
