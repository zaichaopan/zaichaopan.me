import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import DocumentTitle from 'react-document-title'
import classNames from 'classnames'
import { signInUser } from '../../actions/auth'
import { getIntendedUrl } from '../../helpers/auth'
import { destructServerErrors, hasError, getError } from '../../helpers/error'

const propTypes = {
  signInUser: PropTypes.func.isRequired,
  googleSignIn: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

class SignIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: ''
    }
  }

  signInSuccess () {
    getIntendedUrl().then(url => this.props.history.push(url))
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.signInUser(this.state)
      .then(response => this.signInSuccess())
      .catch(error => this.setState({ errors: destructServerErrors(error) }))
  }

  handleInputChange (e) {
    this.setState({
      [e.target.name]: e.target.value,
      errors: {
        ...this.state.errors,
        ...{ [e.target.name]: '' }
      }
    })
  }

  handleGoogleSignInSuccess (credentials) {
    this.props.googleSignIn(credentials)
      .then(response => this.signInSuccess())
      .catch(error => this.setState({ errors: destructServerErrors(error) }))
  }

  renderLoginError () {
    if (hasError(this.state.errors, 'email')) {
      return <p className="text-red text-xs pt-2">{getError(this.state.errors, 'email')}</p>
    }
  }

  getEmailInputClasses () {
    return classNames(
      'appearance-none',
      'border',
      'w-full',
      'py-2',
      'px-3',
      'text-grey-darker',
      {
        'border-red': hasError(this.state.errors, 'email')
      }
    )
  }

  render () {
    return (
      <DocumentTitle title={`Sign in - ${window.App.name}`}>
        <div className="flex justify-center items-center w-full py-4 flex-col min-h-screen">

          <div className="bg-white border-grey-light w-3/4 sm:w-1/2 lg:w-2/5 xl:w-1/4 px-8 py-4">
            <form
              onSubmit={e => this.handleSubmit(e)}
              method="POST">
              <div className="mb-1 input-group">
                <input
                  value={this.state.email}
                  onChange={e => this.handleInputChange(e)}
                  id="email"
                  type="email"
                  name="email"
                  className={this.getEmailInputClasses()}
                  placeholder="Email address"
                  required
                  autoFocus
                />
                <label
                  className="block text-grey-darker text-xs font-bold"
                  htmlFor="email"> Email address
                </label>

                {this.renderLoginError()}

              </div>

              <div className="mb-6 input-group">
                <input
                  value={this.state.password}
                  onChange={e => this.handleInputChange(e)}
                  type="password"
                  id="password"
                  name="password"
                  className="appearance-none border w-full py-2 px-3 text-grey-darker"
                  placeholder="Password"
                  required />

                <label
                  className="block text-grey-darker text-xs font-bold"
                  htmlFor="password">Password
                </label>
              </div>

              <div className="mb-2">
                <button
                  type="submit"
                  className="border font-light tracking-wide uppercase text-xs p-3 text-white w-full bg-black hover:bg-grey-darkest">Sign in</button>
              </div>
            </form>

          </div>
        </div>
      </DocumentTitle>
    )
  }
}

SignIn.propTypes = propTypes

const mapDispatchToProps = {
  signInUser
}

export default connect(null, mapDispatchToProps)(withRouter(SignIn))
