import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import SideNav from '../../components/SideNav'
import HamburgerSvg from '../../components/Svg/Hamburger'
import CloseSvg from '../../components/Svg/Close'

class AppLayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hideMobileNav: true
    }
  }

  toggleMobileNav () {
    this.setState((prevState, props) => ({
      hideMobileNav: !prevState.hideMobileNav
    }))
  }

  closeMobileNav () {
    if (!this.state.hideMobileNav) {
      this.setState({
        hideMobileNav: true
      })
    }
  }

  render () {
    const classes = classNames(
      'left-panel',
      'w-full',
      'overflow-y-auto',
      'lg:overflow-y-hidden',
      'lg:w-1/4',
      'lg:py-8',
      { 'mobile-hidden': this.state.hideMobileNav }
    )

    return (
      <div className="flex min-h-screen">
        <div id="left-panel" className={classes}>
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center mt-8">
              <div className="hidden lg:flex flex-col items-center">
                <img
                  className="rounded-full"
                  src="https://pbs.twimg.com/profile_images/1018989386149449729/XPqSPLsQ_400x400.jpg"
                  alt="profile"
                />
                <h1 className="p-2 pt-6 tracking-wide text-xl font-serif">ZAI CHAO PAN</h1>
                <small className="font-light p-2 tracking-wide text-grey-darker">Full-stack Web Developer</small>
              </div>

              <SideNav closeMobileNav={() => this.closeMobileNav()} />
            </div>
          </div>
        </div>

        <div className="right-panel flex flex-col w-full lg:w-3/4 ml-auto">
          <div className="top-bar block lg:hidden py-2 px-8 border-b border-grey-lighter h-16 flex items-center justify-between fixed bg-white w-full z-10">
            <div className="top-bar-logo flex">
              <a href="/" className="flex no-underline">
                <img className="rounded-full w-12 h-12"
                  src="https://pbs.twimg.com/profile_images/1018989386149449729/XPqSPLsQ_400x400.jpg" />
                <span className="px-2 text-grey-darker font-serif self-center text-sm">ZAI CHAO PAN</span>
              </a>
            </div>
            <div
              className="flex items-center"
              onClick={() => this.toggleMobileNav()}>
              <span className="text-xs font-light text-grey-dark px-2">menu</span>
              {this.state.hideMobileNav ? <HamburgerSvg /> : <CloseSvg />}
            </div>
          </div>
          {this.props.children}
        </div>
      </div >
    )
  }
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default AppLayout
