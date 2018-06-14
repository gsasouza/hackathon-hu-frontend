import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isLoggedIn } from '../security/security';
import Auth from '../screens/auth/Auth';
import Dashboard from '../screens/dashboard/Dashboard';

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
        exact={false}
        render={(props) => isLoggedIn() ? <Dashboard {...props} /> :<Redirect to={'/auth'}/> }
      />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
