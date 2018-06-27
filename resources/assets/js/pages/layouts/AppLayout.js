import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SideNav from '../../components/SideNav';

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
                <img
                  className="rounded"
                  src="https://pbs.twimg.com/profile_images/1005856683493486593/DgOU6T4k_400x400.jpg"
                  alt="profile"
                  style={imgStyle}
                />
              </div>
              <h1 className="p-2 pt-6 tracking-wide text-xl font-serif">ZAI CHAO PAN</h1>
              <small className="font-light p-2 tracking-wide text-grey-darker">Full-stack Web Developer</small>
              <SideNav closeMobileNav={() => this.closeMobileNav()} />
            </div>
          </div>
        </div>

        <div className="right-panel flex flex-col w-full md:w-3/4 ml-auto">
          <div className="top-bar block md:hidden py-2 px-8 border-b border-grey-lighter h-16 flex items-center justify-between">
            <div className="top-bar-logo">
              <span className="text-grey-darker font-semibold">ZAI CHAO PAN</span>
            </div>
            <div className="flex items-center" onClick={() => this.toggleMobileNav()}>
              {
                this.state.hideMobileNav
                  ? (
                    <svg
                      className="fill-current w-4 h-4 cursor-pointer text-grey"
                      role="button"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                  )
                  : (
                    <svg
                      className="fill-current w-4 h-4 cursor-pointer text-grey"
                      role="button"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path
                        d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z">
                      </path>
                    </svg>)
              }
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
