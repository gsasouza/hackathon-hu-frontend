import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Particles from 'react-particles-js';

import Login from '../../components/login/Login';
import SignUp from '../../components/signup/SignUp';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #dbdbdb;
`;


export default class Auth extends React.Component {
  render() {
    return (
      <Wrapper>
        <Switch>
          <Route
            path={'/auth'}
            exact={true}
            render={props => <Login {...props}/>}
          />
          <Route
            path={'/auth/signup'}
            exact={true}
            render={props => <SignUp {...props}/>}
          />
        </Switch>
      </Wrapper>
    )
  }
}
