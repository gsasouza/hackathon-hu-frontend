import React from 'react';
import styled from 'styled-components';
import BackGroundImage from '../../assets/Science.png';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button';

import LoginForm from './LoginForm';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledCard = styled(Card)`
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Content = styled(CardContent)`
  width: 100%;
  height: 100%
`;

const Actions = styled(CardActions)`
  align-self: flex-end;
  margin: 10px;
`;

export default class Login extends React.Component {

  handleSignUp = () => this.props.history.push('/auth/signup');

  render() {
    console.log(this.props);
    return (
      <StyledCard>
        <CardHeader
          title={'Login'}
        />
        <Content>
          <LoginForm />
        </Content>
        <Actions>
          <Button variant="contained" color="secondary" onClick={this.handleSignUp}>
            Cadastrar
          </Button>
          <Button variant="contained" color="primary">
            Entrar
          </Button>
        </Actions>
      </StyledCard>
    )
  }
}
