import React, { Component } from 'react';
import { getPureAxiosInstance } from '../helpers/axios';

const url = 'https://packagist.org/search.json?q=zaichaopan';

class PackagistList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      packagist: []
    };
  }

  componentDidMount () {
    this.fetchComposerPackages();
  }

  async fetchComposerPackages () {
    let { data: { results } } = await getPureAxiosInstance().get(url);
    results.forEach(result => {
      result.name = result.name.split('/')[1];
    });

    this.setState({ packagist: results });
  }

  generatePackageList () {
    return this.state.packagist.map(item => {
      return (
        <div className="flex flex-col mb-4" key={item.name}>
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <a
                href={item.url}
                className="text-xl text-grey-darkest uppercase no-underline hover:underline"
                target="_blank"
                rel="noopener noreferrer">{item.name}
              </a>
            </div>
            <p className="text-grey-darker py-2 text-sm"> {item.description}. </p>
          </div>

          <div className="info flex mt-4 items-center">
            <div className="languages flex mr-4">
              <div className="language">
                <span className="h-3 w-3 rounded-full inline-block php"></span>
                <span className="ml-1 text-xs text-grey-darker">PHP</span>
              </div>
            </div>

            <div className="text-grey-darker flex items-center mr-4">
              <a
                href={item.repository}
                className="text-grey-darker no-underline flex items-center">
                <svg
                  aria-label="star"
                  className="fill-current octicon octicon-star"
                  viewBox="0 0 14 16"
                  version="1.1"
                  width="14"
                  height="16"
                  role="img">
                  <path
                    fillRule="evenodd"
                    d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z">
                  </path>
                </svg>
                <span className="ml-2 text-xs text-grey-dark">{item.favers > 0 ? item.favers : ''}</span>
              </a>
            </div>

            <div className="text-grey-darker flex items-center">
              <svg
                height="16"
                className="fill-current octicon octicon-cloud-download"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                ria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z">
                </path>
              </svg>
            </div>

            <span className="ml-2 text-xs text-grey-dark">{item.downloads > 0 ? item.downloads : ''}</span>
          </div>

          <div className="divider"></div>
        </div>
      );
    });
  }

  render () {
    const packageList = this.generatePackageList();

    return (
      <div> {packageList} </div>
    );
  }
}

export default PackagistList;
