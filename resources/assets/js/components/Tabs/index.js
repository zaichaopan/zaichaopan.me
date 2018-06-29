import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const renderTabs = (tabs, selectTab, currentTab) => {
  return tabs.map(tab => {
    const classes = classNames(
      'relative',
      'h-10',
      'w-48',
      'flex',
      'justify-center',
      'items-center',
      {
        active: tab.id === currentTab.id
      })

    return (
      <li
        className={classes}
        key={tab.id}
        onClick={e => selectTab(tab)}>
        {
          tab.isHtml
            ? <div dangerouslySetInnerHTML={tab.markUp} />
            : <div className="uppercase text-grey-darker text-sm">{tab.name}</div>
        }
      </li>
    )
  })
}

const Tabs = ({ tabs, selectTab, currentTab }) => {
  return (
    <div className='nav-tab'>
      <ul className='tabs list-reset flex items-center'>
        {renderTabs(tabs, selectTab, currentTab)}
      </ul>
    </div >
  )
}

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectTab: PropTypes.func.isRequired,
  currentTab: PropTypes.object.isRequired
}
export default Tabs
