import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Tabs extends Component {
  selectTab (tab) {
    this.props.selectTab(tab)
  }

  renderTabs () {
    return this.props.tabs.map(tab => {
      const classes = classNames(
        'relative',
        'h-10',
        'w-48',
        'flex',
        'justify-center',
        'items-center',
        {
          active: tab.id === this.props.currentTab.id
        })

      return (
        <li
          className={classes}
          key={tab.id}
          onClick={e => this.selectTab(tab)}>
          {
            tab.isHtml
              ? <div dangerouslySetInnerHTML={tab.markUp} />
              : <div className="uppercase text-grey-darker text-sm">{tab.name}</div>
          }
        </li>
      )
    })
  }

  render () {
    return (
      <div className='nav-tab'>
        <ul className='tabs list-reset flex items-center'>
          {this.renderTabs()}
        </ul>
      </div >
    )
  }
}

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectTab: PropTypes.func.isRequired,
  currentTab: PropTypes.object.isRequired
}
