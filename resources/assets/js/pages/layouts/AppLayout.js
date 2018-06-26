import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element.isRequired
};

let imgStyle = {
  width: '127px'
};

class AppLayout extends Component {
  constructor (props) {
    super(props);
    this.state = {
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

  render () {
    return (
      <div className="flex min-h-screen">
        <div className={`left-panel border-r border-grey-lighter w-3/4 md:w-1/4 flex align-items justify-center py-8 md:py-0 fixed h-full ${this.state.hideMobileNav ? 'mobile-hidden' : ''}`}>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mt-8">
              <div>
                <img src="https://pbs.twimg.com/profile_images/1005856683493486593/DgOU6T4k_400x400.jpg" alt="profile" style={imgStyle} className="rounded" />
              </div>
              <h1 className="p-2 pt-6 tracking-wide text-xl">ZAI CHAO PAN</h1>
              <small className="font-light p-2 tracking-wide text-grey-darker">Full-stack Web Developer </small>

              <ul className="list-reset flex flex-col font-thin w-full">
                <li className="divider"></li>
                <li className="p-2 text-sm">
                  <NavLink
                    to="/"
                    activeClassName="font-semibold"
                    className="text-sm no-underline">Home
                  </NavLink></li>
                <li className="p-2 text-sm">
                  <NavLink
                    to="/work"
                    activeClassName="font-semibold"
                    className="text-sm no-underline hover:underline">Work
                  </NavLink>
                </li>
                <li className="p-2 text-sm">
                  <NavLink
                    to="/projects"
                    activeClassName="font-semibold"
                    className="text-sm no-underline hover:underline">Projects
                  </NavLink>
                </li>

                <li className="p-2 text-sm">
                  <NavLink
                    to="/resume"
                    activeClassName="font-semibold"
                    className="text-sm no-underline hover:underline">Resume
                  </NavLink>
                </li>
                <li className="p-2 text-sm">Hire Me </li>
                <li className="divider"></li>
                <li>
                  <a href="mailto:zaichaopan@gmail.com" className="text-grey-darker">
                    <svg height="16" className="fill-current octicon octicon-mail" viewBox="0 0 14 16" version="1.1" width="28" aria-hidden="true"><path fillRule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></svg>
                    <a
                      className="text-grey-darker"
                      href="https://github.com/zaichaopan"
                      target="_blank"
                      rel="noopener noreferrer">
                      <svg height="16" className="fill-current octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                    </a>
                  </a>
                </li>
                <li className="divider"></li>
                <li><p className="text-grey-dark font-hairline tracking-wide text-xs p-2">&copy; ZAI CHAO PAN</p></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="right-panel flex flex-col w-full md:w-3/4 ml-auto">
          <div className="top-bar block md:hidden py-2 px-8 border-b border-grey-lighter h-16 flex items-center justify-between">

            <div className="top-bar-logo"><span className="text-grey-darker font-semibold">ZAI CHAO PAN</span></div>
            <div className="flex items-center" onClick={() => this.toggleMobileNav()}>
              <svg className="fill-current w-4 h-4 cursor-pointer text-grey" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
            </div>
          </div>
          {this.props.children}
        </div>
      </div >
    );
  }
}

AppLayout.propTypes = propTypes;

export default AppLayout;
