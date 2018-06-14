import React, { Component } from 'react';
import { ReleasyProvider } from 'react-releasy';

import releasyConfig from './relay/config';
import AppRouter from './router/AppRouter';

class App extends Component {
  render() {
    return (
      <ReleasyProvider config={releasyConfig}>
        <AppRouter />
      </ReleasyProvider>
    );
  }
}

export default App;
