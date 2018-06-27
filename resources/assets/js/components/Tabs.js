import React, { Component } from 'react';

import PropTypes from 'prop-types';

const propTypes = {
  tabs: PropTypes.array.isRequired,
  selectTab: PropTypes.func.isRequired,
  currentTab: PropTypes.object.isRequired
};

class Tabs extends Component {
  selectTab (tab) {
    this.props.selectTab(tab);
  }

  render () {
    const tabNav = this.props.tabs.map(tab => {
      return (
        <li
          className={`relative h-10 w-48 flex justify-center items-center ${tab.id === this.props.currentTab.id ? 'active' : ''}`}
          key={tab.id}
          onClick={e => this.selectTab(tab)}>
          {tab.isHtml
            ? (<div dangerouslySetInnerHTML={tab.markUp} />)
            : <div className="uppercase text-grey-darker text-sm">{tab.name}</div>}
        </li>
      );
    });

    return (
      <div className="tab-nav">
        <ul className="tabs list-reset flex items-center border-b border-grey-light">
          {tabNav}
        </ul>
      </div>
    );
  }
}

Tabs.propTypes = propTypes;
export default Tabs;
