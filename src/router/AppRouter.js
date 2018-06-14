import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from '../screens/auth/Auth';

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
        render={() => <div> DASHBOARD </div>}
      />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
