import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Sign from '../../components/sign/Sign';
import SignCancel from '../../components/sign/cancel/SignCancel';
import SignCancelCode from '../../components/sign/cancel/SignCancelCode';

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
            path={'/sign'}
            exact={true}
            render={props => <Sign {...props}/>}
          />
          <Route
            path={'/sign/cancel'}
            exact={true}
            render={props => <SignCancel {...props}/>}
          />
          <Route
            path={'/sign/cancel/:email/code'}
            exact={true}
            render={props => <SignCancelCode {...props}/>}
          />
        </Switch>
      </Wrapper>
    )
  }
}
