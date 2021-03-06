import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isLoggedIn } from '../security/security';
import Auth from '../screens/auth/Auth';
import Dashboard from '../screens/dashboard/Dashboard';
import Feed from '../screens/feed/Feed';
import Home from '../screens/public/Home';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path={'/auth'}
        exact={false}
        render={props => <Auth {...props}/>}
      />
      <Route
        path={'/sign'}
        exact={false}
        render={(props) => <Feed {...props} /> }
      />
      <Route
        path={'/'}
        exact={false}
        render={(props) => isLoggedIn() ? <Dashboard {...props} />: <Home {...props} /> }
      />

    </Switch>
  </BrowserRouter>
);

export default AppRouter;
