import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { withRouter } from 'react-router-dom'

import { HEADER_HEIGHT, DRAWER_WIDTH } from './consts';

const StyledList = styled(List)`
  width: ${DRAWER_WIDTH}px;
`;

const DrawerContainer = styled.div`
  margin-top: 60px;
`;

const Spacer = styled.div`
  height: ${HEADER_HEIGHT}px;
`;

class Sidebar extends React.Component {
  render() {
    return (
      <DrawerContainer>
        <Drawer variant={'permanent'}>
          <Spacer/>
          <Divider/>
          <StyledList>
            <ListItem button onClick={() => this.props.history.push('/articles')}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Pesquisas"/>
            </ListItem>
          </StyledList>
        </Drawer>
      </DrawerContainer>

    );
  }
}

export default withRouter(Sidebar);
