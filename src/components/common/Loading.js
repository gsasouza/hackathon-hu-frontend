import React from 'react';

import { CircularProgress, Dialog } from '@material-ui/core';

const Loading = ({ fullScreen, wrappedInDialog }) => {
  const progress = <CircularProgress size={80} thickness={5} />;

  if (fullScreen) {
    return (
      <div style={styles.container}>
        {progress}
      </div>
    );
  }

  return progress;
};

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export default Loading;
