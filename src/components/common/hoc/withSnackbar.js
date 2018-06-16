import hoistStatics from 'hoist-non-react-statics';
import * as React from 'react';
import PropTypes from 'prop-types';

export default function withSnackbar(WrappedComponent) {
  const ConnectedSnackbar = (props, context) => {
    return <WrappedComponent {...props} showSnackbar={context.showSnackbar} />;
  };

  ConnectedSnackbar.contextTypes = {
    showSnackbar: PropTypes.func,
  };

  return hoistStatics(ConnectedSnackbar, WrappedComponent);
}
