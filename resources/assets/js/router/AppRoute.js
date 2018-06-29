import React from 'react'
import AppLayout from '../pages/layouts/AppLayout'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

const AppRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (<AppLayout>
        <Component {...props} />
      </AppLayout>)
    }
    }
  />
)

AppRoute.propTypes = {
  component: PropTypes.func.isRequired
}

AppRoute.displayName = 'App Route'

export default AppRoute
