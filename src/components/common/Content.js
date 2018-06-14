import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

import { DRAWER_WIDTH, HEADER_HEIGHT } from '../../screens/dashboard/components/consts';


const Container = styled.div`
  margin-top: ${(HEADER_HEIGHT + 50)}px;
  margin-bottom: 50px;
  margin-left: ${(DRAWER_WIDTH + 50)}px;
  margin-right: 50px;
  width: 100%
  height: 100%
`;

export default class Content extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Container>
        <Paper>
        {children}
        </Paper>
      </Container>
    )
  }
}
