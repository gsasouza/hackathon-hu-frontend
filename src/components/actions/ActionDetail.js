import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createFragmentContainer, graphql } from 'react-relay';

import { createQueryRenderer } from '../../relay/createQueryRender';
import { Content } from '../common';

import ActionDescription from './ActionDescription';

const Wrapper = styled(Paper)`
  display: flex;
  min-height: 168px;
  color: #606060;
  background-color: #309dd1;
  flex-direction: column;
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

class ActionDetail extends React.Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render () {
    const { query } = this.props;
    const { description, title, unit } = query.action;
    return (
      <Content>
        <Wrapper>
          <Title>
            {title}
          </Title>
          <Unit>
            {unit}
          </Unit>
          <TabContainer>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Descrição" />
            </Tabs>
          </TabContainer>
          {this.state.value === 0 && <ActionDescription description={description}/>}
        </Wrapper>

      </Content>
    )
  }
}


const ActionDetailFragmentContainer = createFragmentContainer(ActionDetail, {
  query: graphql`
    fragment ActionDetail_query on Query @argumentDefinitions(id: { type: "ID!" }) {
      action(id: $id) {
        title
        unit
        description
      }
    }
  `,
});

export default createQueryRenderer(ActionDetailFragmentContainer, {
  query: graphql`
    query ActionDetailQuery($id: ID!) {
      ...ActionDetail_query @arguments(id: $id)
    }
  `,
  queriesParams: ({ match: { params } }) => ({
    id: params.id,
  }),
});
