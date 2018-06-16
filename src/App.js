import React, { Component } from 'react';
import AppRouter from './router/AppRouter';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class App extends Component {
  static childContextTypes = {
    showSnackbar: PropTypes.func,
  };

  getChildContext() {
    return {
      showSnackbar: this.handleSnackbar,
    };
  }

  handleSnackbar = ({ message, action = 'OK', duration = 4000 }) => {
    this.setState({
      snackbar: {
        message,
        action,
        duration,
      },
    });
  };

  handleSnackbarConfirm = () => {
    this.setState({
      snackbar: {
        ...this.state.snackbar,
        message: '',
      },
    });
  };

  state = {
    snackbar: {
      message: '',
      action: 'OK',
      duration: 8000,
    },
  };
  render() {
    const { snackbar } = this.state;
    return (
      <div>
        <AppRouter />
        <Snackbar
          open={!!snackbar.message}
          message={snackbar.message}
          action={
            <Button color="inherit" size="small" onClick={this.handleSnackbarConfirm }>
              {snackbar.action}
            </Button>}
          autoHideDuration={snackbar.duration}
          onClose={this.handleSnackbarConfirm}
        />
      </div>
    );
  }
}

export default App;
