import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';
import PublicIcon from '@material-ui/icons/Public';
import ListIcon from '@material-ui/icons/List';
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
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Pesquisas"/>
            </ListItem>
            { this.props.isAdmin && (
              <ListItem button onClick={() => this.props.history.push('/authors')}>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Gerenciar Pesquisadores"/>
              </ListItem>
            )}
            <ListItem button onClick={() => this.props.history.push('/actions')}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Ações"/>
            </ListItem>
            <ListItem button onClick={() => this.props.history.push('/news')}>
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText primary="Notícias"/>
            </ListItem>
          </StyledList>
        </Drawer>
      </DrawerContainer>

    );
  }
}

export default withRouter(Sidebar);
