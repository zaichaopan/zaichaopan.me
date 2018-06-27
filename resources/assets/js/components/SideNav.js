import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  closeMobileNav: PropTypes.func.isRequired
};

class SideNav extends Component {
  closeMobileNav () {
    this.props.closeMobileNav();
  }

  render () {
    return (
      <ul className="list-reset flex flex-col font-thin w-full">
        <li className="divider"></li>
        <li
          className="p-2 text-sm"
          onClick={() => this.closeMobileNav()}>
          <NavLink
            exact
            to="/"
            activeClassName="font-semibold"
            className="text-sm no-underline hover:underline">Home
          </NavLink></li>
        <li className="p-2 text-sm" onClick={() => this.closeMobileNav()}>
          <NavLink
            to="/work"
            activeClassName="font-semibold"
            className="text-sm no-underline hover:underline">Work
          </NavLink>
        </li>
        <li className="p-2 text-sm" onClick={() => this.closeMobileNav()}>
          <NavLink
            to="/projects"
            activeClassName="font-semibold"
            className="text-sm no-underline hover:underline">Projects
          </NavLink>
        </li>
        <li
          className="p-2 text-sm"
          onClick={() => this.closeMobileNav()}>
          <a
            className="text-sm no-underline hover:underline"
            href="./files/resume.pdf"
            target="_blank"
            rel="noopener noreferrer">Resume </a>
        </li>
        <li
          className="p-2 text-sm"
          onClick={() => this.closeMobileNav()}>Hire Me
        </li>
        <li className="divider"></li>
        <li>
          <a
            href="mailto:zaichaopan@gmail.com"
            className="text-grey-darker">
            <svg
              height="16"
              className="fill-current octicon octicon-mail"
              viewBox="0 0 14 16"
              version="1.1"
              width="28"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z">
              </path>
            </svg>
          </a>
          <a
            className="text-grey-darker"
            href="https://github.com/zaichaopan"
            target="_blank"
            rel="noopener noreferrer">
            <svg height="16"
              className="fill-current octicon octicon-mark-github"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z">
              </path>
            </svg>
          </a>
        </li>
        <li className="divider"></li>
        <li>
          <p className="text-grey-dark font-hairline tracking-wide text-xs p-2">&copy; ZAI CHAO PAN</p>
        </li>
      </ul>
    );
  }
}

SideNav.propTypes = propTypes;

export default SideNav;