import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { DRAWER_WIDTH } from './consts';

const StyledAppBar = styled(AppBar)`
  width: calc(100% - ${DRAWER_WIDTH}px) !important;
  background-color: rgb(74, 141, 119) !important;
`;

export default class Dashboard extends React.Component {

  render() {

    return (
      <StyledAppBar position="absolute">
        <Toolbar>
          <Typography variant="title" color="inherit" >
            Hackathon-HU 8
          </Typography>
        </Toolbar>
      </StyledAppBar>
    )
  }
}
