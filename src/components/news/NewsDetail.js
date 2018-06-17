import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { createFragmentContainer, graphql } from 'react-relay';

import { createQueryRenderer } from '../../relay/createQueryRender';
import { Content, ImageButton } from '../common';
import NewsAbstract from './NewsAbsctract';

const Wrapper = styled(Paper)`
  display: flex;
  min-height: 168px;
  color: #606060;
  background-color: #309dd1;
  justify-content: flex-start;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
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
  width: 100%;
  align-self: center;
  border-bottom: 1px solid #bbbaba;
`;

class NewsDetail extends React.Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render () {
    const { query } = this.props;
    const { title, abstract, tag, link, time, date, image } = query.new;
    return (
      <Content>
        <Wrapper>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ justifySelf: 'flex-start' }}>
              <ImageButton image={image} time={time} date={date} link={link}/>
            </div>
            <TitleContainer>
              <Title>
                {title}
              </Title>
              <Unit>
                {tag}
              </Unit>
            </TitleContainer>
            <div />
          </div>
          <TabContainer />
          {this.state.value === 0 && <NewsAbstract abstract={abstract}/>}
        </Wrapper>
      </Content>
    )
  }
}


const NewsDetailFragmentContainer = createFragmentContainer(NewsDetail, {
  query: graphql`
    fragment NewsDetail_query on Query @argumentDefinitions(id: { type: "ID!" }) {
      new(id: $id) {
        id
        title
        abstract
        tag
        link
        time
        date
        image
      }
    }
  `,
});

export default createQueryRenderer(NewsDetailFragmentContainer, {
  query: graphql`
    query NewsDetailQuery($id: ID!) {
      ...NewsDetail_query @arguments(id: $id)
    }
  `,
  queriesParams: ({ match: { params } }) => ({
    id: params.id,
  }),
});
