import moment from 'moment';
import React, { Component } from 'react';
import { getPureAxiosInstance } from '../helpers/axios';

const url = 'https://npmsearch.com/query?q=zaichaopan&fields=name,description,keywords,modified';

class Projects extends Component {
  constructor (props) {
    super(props);
    this.state = {
      npmPackages: []
    };
  }

  componentDidMount () {
    this.fetchNpmPackages();
  }

  async fetchNpmPackages () {
    let { data: { results } } = await getPureAxiosInstance().get(url);
    results = results.filter(result => result.name[0].startsWith('@'))
      .map(result => {
        return {
          name: result.name[0].split('/')[1],
          description: result.description[0],
          keywords: result.keywords,
          url: `http://npmjs.com/package/${result.name[0]}`,
          updated: moment(result.modified[0]).fromNow()
        };
      });

    this.setState({ npmPackages: results });
  }

  generateKeywordList (words) {
    words = words.filter(word => word !== 'javascript');

    return words.map(word => {
      return (
        <span className="mr-2 rounded p-2 text-xs keyword" key={word}>
          {word}
        </span>
      );
    });
  }

  generatePackageList () {
    return this.state.npmPackages.map(item => {
      return (
        <div className="flex flex-col mb-4" key={item.name} >
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <a
                href={item.url}
                className="text-xl text-grey-darkest uppercase no-underline hover:underline"
                target="_blank"
                rel="noopener noreferrer">{item.name}
              </a>
            </div>
            <p className="text-grey-darker py-2 text-sm">
              {item.description}.
            </p>
          </div>

          <div className="keywords my-2">
            {this.generateKeywordList(item.keywords)}
          </div>

          <div className="flex mt-4 items-center">
            <div className="language text-xs pr-4 text-grey-darker">
              <span className="h-3 w-3 rounded-full inline-block javascript">
              </span> Javascript
            </div>
            <div className="text-xs text-grey-darker">
                            Updated {item.updated}
            </div>
          </div>

          <div className="divider"></div>
        </div>
      );
    });
  }

  render () {
    const packageList = this.generatePackageList();

    return (
      <div>{packageList}</div>
    );
  }
}

export default Projects;
