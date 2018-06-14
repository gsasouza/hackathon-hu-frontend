import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isLoggedIn } from '../security/security';
import Auth from '../screens/auth/Auth';


console.log(isLoggedIn())

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path={'/auth'}
        exact={false}
        render={props => <Auth {...props}/>}
      />
      <Route
        path={'/'}
        exact={true}
        render={() => isLoggedIn() ? <div> DASHBOARD </div> :<Redirect to={'/auth'}/> }
      />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
