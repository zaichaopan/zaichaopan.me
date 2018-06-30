import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Welcome from '../pages/Welcome'
import SignIn from '../pages/Auth/SignIn'
import Projects from '../pages/Projects'
import Work from '../pages/Work'
import NotFound from '../pages/Errors/404'
import AppRoute from './AppRoute'
import { setLoading } from '../actions/loading'
import { initAuthFromExistingToken } from '../actions/auth'

class App extends Component {
  componentDidMount () {
    this.props.initAuthFromExistingToken(() => this.props.setLoading(false))
  }

  render () {
    if (this.props.loading) {
      return (
        <div className="p-2">loading...</div>
      )
    }

    return (
      <Router>
        <div className="flex flex-col min-h-screen">
          <Switch>
            <AppRoute exact path="/" component={Welcome} />
            <Route path="/signin" component={SignIn} />
            <AppRoute path="/projects" component={Projects} />
            <AppRoute path="/work" component={Work} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  setLoading: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  initAuthFromExistingToken: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  setLoading,
  initAuthFromExistingToken
}

const mapStateToProps = ({ loading }) => ({ loading })

export default connect(mapStateToProps, mapDispatchToProps)(App)
