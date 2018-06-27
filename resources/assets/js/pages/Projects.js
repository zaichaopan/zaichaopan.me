import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { getPureAxiosInstance } from '../helpers/axios';

class Projects extends Component {
  constructor (props) {
    super(props);

    this.state = {
      packagist: [],
      npmPackages: []
    };
  }

  componentDidMount () {
    this.fetchComposerPackages();
    this.fetchGithubRepos();
  }

  async fetchComposerPackages () {
    const url = 'https://packagist.org/search.json?q=zaichaopan';
    let { data: { results } } = await getPureAxiosInstance().get(url);
    results.forEach(result => {
      result.name = result.name.split('/')[1];
    });

    console.log(results);

    this.setState({ packagist: results });
  }

  async fetchGithubRepos () {
    const url = 'https://npmsearch.com/query?q=zaichaopan&fields=name,description,keywords,modified';
    let { data: { results } } = await getPureAxiosInstance().get(url);

    results = results.filter(result => {
      return result.name[0].startsWith('@');
    }).map(result => {
      return {
        name: result.name[0].split('/')[1],
        description: result.description[0],
        keywords: result.keywords,
        url: `http://npmjs.com/package/${result.name[0]}`
      };
    });

    this.setState({ npmPackages: results });
  }

  render () {
    const composerPackages = this.state.packagist.map(item => {
      return <div className="flex flex-col mb-4" key={item.name}>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <a
              href={item.url}
              className="text-xl text-grey-darkest uppercase font-bold no-underline hover:underline"
              target="_blank"
              rel="noopener noreferrer">{item.name}</a>
          </div>
          <p className="text-grey-dark py-2 font-thin text-sm">
            {item.description}.
          </p>
        </div>

        <div className="info flex mt-4 items-center">
          <div className="languages flex mr-4">
            <div className="language">
              <span className="h-3 w-3 rounded-full inline-block php"></span>
              <span className="ml-1 text-xs text-grey-darker">PHP</span>
            </div>
          </div>

          <div className="text-grey-darker flex items-center mr-4">
            <a href={item.repository}
              className="text-grey-darker no-underline flex items-center">
              <svg aria-label="star" className="fill-current octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
              <span className="ml-2 text-xs text-grey-dark">{item.favers > 0 ? item.favers : ''}</span>
            </a>
          </div>

          <div className="text-grey-darker flex items-center">
            <svg height="16" className="fill-current octicon octicon-cloud-download" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fillRule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"></path></svg>
          </div>

          <span className="ml-2 text-xs text-grey-dark">{item.downloads > 0 ? item.downloads : ''}</span>
        </div>

        <div className="divider"></div>
      </div>;
    });

    const npmPackages = this.state.npmPackages.map(item => {
      return (
        <div className="flex flex-col mb-4" key={item.name} >
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <a
                href={item.url}
                className="text-xl text-grey-darkest uppercase font-bold no-underline hover:underline"
                target="_blank"
                rel="noopener noreferrer">{item.name}</a>
            </div>
            <p className="text-grey-dark py-2 font-thin text-sm">
              {item.description}.
            </p>
          </div>

          <div className="languages flex mt-4">
            <div className="language text-sm pr-4">
              <span className="h-3 w-3 rounded-full inline-block javascript"></span> Javascript
            </div>
          </div>

          <div className="divider"></div>
          {/* keyword and time */}
        </div>
      );
    });

    return (
      <DocumentTitle title={`Projects - ${window.App.name}`}>
        <div className="w-4/5 mx-auto p-2 mx-auto flex flex-col mt-8">
          <div className="tab-nav">
            <ul className="tabs list-reset flex items-center border-b border-grey-light">
              <li className="relative h-10 w-48 flex justify-center items-center">
                <img className="w-6" src="https://packagist.org/bundles/packagistweb/img/logo-small.png" />
              </li>
              <li className="relative h-10 w-48 flex justify-center items-center active">
                <svg viewBox="0 0 18 7" height="18" className="fill-current"><path fill="#CB3837" d="M0 0v6h5v1h4V6h9V0"></path><path fill="#FFF" d="M1 1v4h2V2h1v3h1V1h1v5h2V2h1v2H8v1h2V1h1v4h2V2h1v3h1V2h1v3h1V1">
                </path>
                </svg>
              </li>
            </ul>
          </div>

          {composerPackages}

        </div>
      </DocumentTitle >
    );
  }
}

export default Projects;
