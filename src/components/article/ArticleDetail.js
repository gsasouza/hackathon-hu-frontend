import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { createFragmentContainer, graphql } from 'react-relay';
import HeartBorderIcon from '@material-ui/icons/FavoriteBorder';
import HeartIcon from '@material-ui/icons/Favorite';
import ChipMUI from '@material-ui/core/Chip';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { createQueryRenderer } from '../../relay/createQueryRender';
import { Content } from '../common';
import LikeAdd from './mutation/LikeAddMutation';
import LikeRemove from './mutation/LikeRemoveMutation';
import FollowAdd from './mutation/FollowAddMutation';
import FollowRemove from './mutation/FollowRemoveMutation';

const Chip = styled(ChipMUI)`
  margin: 10px;
  background-color: rgba(255, 255, 255, 0) !important; 
`;

const Wrapper = styled(Paper)`
  display: flex;
  flex-direction: column
`;

const Title = styled.div`
  align-self: center;
  justify-content: center;
  font-size: 40px;
  margin: 10px;
`;

const Unit = styled.div`
  align-self: center;
  justify-content: center;
  font-size: 25px;
  margin: 10px;
`;

const TabContainer = styled.div`
  padding-top: 20px;
  width: 100%;
  align-self: center;
  border-bottom: 1px solid #bbbaba;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Header = styled.div`
  display: flex;
  min-height: 168px;
  color: #606060;
  justify-content: space-between;
  flex-direction: row;
`;


class ArticleDetail extends React.Component {

  state = {
    isLiked: false,
    likeCount: 0,
    isFollowing: false,
    followCount: 0,
    value: 0,
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

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render () {
    const { isLiked, likeCount } = this.state;
    const { query } = this.props;
    console.log(query)
    const { title, category } = query.article;
    return (
      <Content>
        <Wrapper>
          <Header>
            <div style={{ margin: '20px', padding: '0 37px'}} />
            <TitleContainer>
              <Title>
                {title}
              </Title>
              <Unit>
                {category}
              </Unit>
            </TitleContainer>
            <ActionContainer>
              <Chip
                avatar={isLiked ? <HeartIcon /> : <HeartBorderIcon />}
                label={likeCount}
                onClick={this.onClickLike}
              />
            </ActionContainer>
          </Header>
          <TabContainer>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Discussão" />
            </Tabs>
          </TabContainer>
          {this.state.value === 0 && <div>Item Two</div>}
        </Wrapper>
      </Content>
    )
  }
}


const ArticleDetailFragmentContainer = createFragmentContainer(ArticleDetail, {
  query: graphql`
    fragment ArticleDetail_query on Query @argumentDefinitions(id: { type: "ID!" }) {
      article(id: $id) {
        title
        category
      }
      likes(article: $id) {
        count
      }
      follows(article: $id) {
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
