import React from 'react';
import AppLayout from '../pages/layouts/AppLayout';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
const propTypes = {
  component: PropTypes.func.isRequired
};

const AppRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (<AppLayout>
        <Component {...props} />
      </AppLayout>);
    }
    }
  />
);

AppRoute.propTypes = propTypes;
AppRoute.displayName = 'App Route';

export default AppRoute;
