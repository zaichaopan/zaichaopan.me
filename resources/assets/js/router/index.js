import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import SignIn from '../pages/auth/SignIn';
import Projects from '../pages/Projects';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import NotFound from '../pages/404';
import PropTypes from 'prop-types';
import Work from '../pages/Work';
import { connect } from 'react-redux';
import { setLoading } from '../actions/loading';
import { initAuthFromExistingToken } from '../actions/auth';
import AppRoute from './AppRoute';

const propTypes = {
  setLoading: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  initAuthFromExistingToken: PropTypes.func.isRequired
};

class App extends Component {
  componentDidMount () {
    this.props.initAuthFromExistingToken(() => this.props.setLoading(false));
  }

  render () {
    if (this.props.loading) {
      return (
        <div className="p-2">loading...</div>
      );
    }

    return (
      <Router>
        <div className="flex flex-col min-h-screen">
          <Switch>
            <AppRoute exact path="/" component={Welcome} />
            <AppRoute path="/signin" component={SignIn} />
            <AppRoute path="/forgot-password" component={ForgotPassword} />
            <AppRoute path="/password/reset/:token" component={ResetPassword} />
            <AppRoute path="/projects" component={Projects} />
            <AppRoute path="/work" component={Work} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = propTypes;

const mapDispatchToProps = {
  setLoading,
  initAuthFromExistingToken
};

const mapStateToProps = ({ loading }) => ({ loading });

export default connect(mapStateToProps, mapDispatchToProps)(App);
