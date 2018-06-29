import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Email from '../SVG/Email'
import Github from '../SVG/Github'

const NavLinks = [
  { to: '/', text: 'home' },
  { to: '/work', text: 'work' },
  { to: '/projects', text: 'projects' }]

export default class SideNav extends Component {
  closeMobileNav () {
    this.props.closeMobileNav()
  }

  renderNavLinks () {
    return NavLinks.map(({ to, text }) => {
      return (
        <li
          key={text.split(' ').join('-')}
          className="p-2"
          onClick={() => this.closeMobileNav()}>
          <NavLink
            exact
            to={to}
            activeClassName="font-semibold"
            className="link text-xs uppercase tracking-wide no-underline">{text}
          </NavLink>
        </li>)
    })
  }

  renderLink (to, text, openInNewWindow) {
    let linkProps = openInNewWindow
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}

    return (
      <a
        href={to}
        className="'link text-xs uppercase tracking-wide no-underline"
        {...linkProps} >
        {text}
      </a>
    )
  }

  render () {
    return (
      <ul className="menu list-reset flex flex-col font-thin w-full">
        <li className="divider"></li>
        {this.renderNavLinks()}
        <li className="p-2">
          {this.renderLink('./files/resume.pdf', 'resume', true)}
        </li>
        <li className="p-2">
          {this.renderLink('mailto:zaichaopan@gmail.com', 'hire me', false)}
        </li>
        <li className="divider"></li>
        <li className="p-2">
          {this.renderLink('mailto:zaichaopan@gmail.com', <Email height="16" />, false)}
          {this.renderLink('https://github.com/zaichaopan', <Github height="16" />, true)}
        </li>
        <li className="divider"></li>
        <li>
          <p className="text-grey-dark font-hairline tracking-wide text-xs p-2">&copy; ZAI CHAO PAN</p>
        </li>
      </ul >
    )
  }
}

SideNav.propTypes = {
  closeMobileNav: PropTypes.func.isRequired
}
