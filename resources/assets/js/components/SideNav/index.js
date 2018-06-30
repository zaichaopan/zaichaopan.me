import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Email from '../Svg/Email'
import Github from '../Svg/Github'

const NavLinks = [
  { to: '/', text: 'home' },
  { to: '/work', text: 'work' },
  { to: '/projects', text: 'projects' }
]

const renderNavLinks = (closeMobileNav) => {
  return NavLinks.map(({ to, text }) => {
    return (
      <li
        key={text.split(' ').join('-')}
        className="p-2"
        onClick={() => closeMobileNav()}>
        <NavLink
          exact
          to={to}
          activeClassName="font-semibold"
          className="link text-xs uppercase tracking-wide no-underline">{text}
        </NavLink>
      </li>)
  })
}

const renderLink = (to, text, openInNewWindow) => {
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

const SideNav = ({ closeMobileNav }) => {
  return (
    <ul className="menu list-reset flex flex-col font-thin w-full text-center md:text-left">
      <li className="divider"></li>
      {renderNavLinks(closeMobileNav)}
      <li className="p-2">
        {renderLink('./files/resume.pdf', 'resume', true)}
      </li>
      <li className="p-2">
        {renderLink('mailto:zaichaopan@gmail.com', 'hire me', false)}
      </li>
      <li className="divider"></li>
      <li className="p-2">
        {renderLink('mailto:zaichaopan@gmail.com', <Email height="16" />, false)}
        {renderLink('https://github.com/zaichaopan', <Github height="16" />, true)}
      </li>
      <li className="divider"></li>
      <li>
        <p className="text-grey-dark font-hairline tracking-wide text-xs p-2">&copy; ZAI CHAO PAN</p>
      </li>
    </ul >
  )
}

SideNav.propTypes = {
  closeMobileNav: PropTypes.func.isRequired
}

export default SideNav
