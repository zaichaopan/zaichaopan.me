import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../actions/auth';

const propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

class Nav extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: this.props.auth.user,
      hideMobileNav: true
    };
  }

  toggleMobileNav () {
    this.setState((prevState, props) => ({
      hideMobileNav: !prevState.hideMobileNav
    }));
  }

  closeMobileNav () {
    if (!this.state.hideMobileNav) {
      this.setState({
        hideMobileNav: true
      });
    }
  }

  handleLogout () {
    this.props.logoutUser(() => this.props.history.push('/'));
  }

  render () {
    return (
      <div className="nav border-b border-grey-lighter">
        <ul className="list-reset flex h-16 items-center text-grey-darker font-thin px-6 text-sm justify-center md:justify-start">
          <li className="px-2 relative">
            <NavLink
              to="/"
              activeClassName="nav-link-active"
              className="font-thin text-grey-darker no-underline">Home
            </NavLink>
          </li>
          <li className="px-2 relative">
            <NavLink
              to="/about"
              activeClassName="font-bold"
              className="font-thin text-grey-darker no-underline">About
            </NavLink>
          </li>

          <li className="px-2 relative">
            <NavLink
              to="/work"
              activeClassName="font-bold"
              className="font-thin text-grey-darker no-underline">Work
            </NavLink>
          </li>

          <li className="px-2 relative">
            <NavLink
              to="/projects"
              activeClassName="font-bold"
              className="font-thin text-grey-darker no-underline">Projects
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

Nav.propTypes = propTypes;

const mapDispatchToProps = { logoutUser };
const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(withRouter(Nav));
