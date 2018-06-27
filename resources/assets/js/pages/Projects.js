import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Tabs from '../components/Tabs';
import PackagistList from '../components/PackagistList';
import NpmList from '../components/NpmList';

class Projects extends Component {
  constructor (props) {
    super(props);
    this.state = {
      packagist: [],
      npmPackages: [],
      currentTab: this.getTabs()[0]
    };
  }

  getTabs () {
    return [
      {
        id: 'packagist',
        isHtml: true,
        markUp: {
          __html:
            '<img class="w-6" src="https://packagist.org/bundles/packagistweb/img/logo-small.png" />'
        }
      },
      {
        id: 'npm',
        isHtml: true,
        markUp: {
          __html: `<svg viewBox="0 0 18 7" height="18" className="fill-current">
          <path fill="#CB3837" d="M0 0v6h5v1h4V6h9V0"></path>
          <path fill="#FFF" d="M1 1v4h2V2h1v3h1V1h1v5h2V2h1v2H8v1h2V1h1v4h2V2h1v3h1V2h1v3h1V1"></path>
          </svg>`}
      }
    ];
  }

  handleTabSelected (tab) {
    this.setState({ currentTab: tab });
  }

  render () {
    return (
      <DocumentTitle title={`Projects - ${window.App.name}`}>
        <div className="w-4/5 mx-auto p-2 mx-auto flex flex-col mt-8">
          <Tabs
            tabs={this.getTabs()}
            selectTab={tab => this.handleTabSelected(tab)}
            currentTab={this.state.currentTab}
          />

          {this.state.currentTab.id === 'packagist' && <PackagistList />}
          {this.state.currentTab.id === 'npm' && <NpmList />}

        </div>
      </DocumentTitle >
    );
  }
}

export default Projects;