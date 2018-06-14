import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { Content } from '../common';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  padding: 20px;
`;

export default class Article extends React.Component{
  render () {
    console.log(this.props);
    return (
      <Content>
        <Header>
          <Typography variant="headline" component="h3">
            Pesquisas
          </Typography>
          <Button variant="contained" color="primary" style={{ marginRight: '40px' }} onClick={() => this.props.history.push('/articles/add')}>
            Adicionar Pesquisa
          </Button>
        </Header>
        <Divider />
        TESTE
      </Content>
    )
  }
}
