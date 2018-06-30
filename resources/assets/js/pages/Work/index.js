import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

class Work extends Component {
  render () {
    return (
      <DocumentTitle title={`Work - ${window.App.name}`}>
        <div className="work w-full p-8 md:w-4/5 mx-auto md:p-2 mx-auto flex flex-col mt-8 pt-20 md:pt-8">
          <h1 className="mb-4 work__headline font-bold tracking-wide-extra">Work</h1>
          <div>
            <div className="flex justify-between py-2">
              <h2 className="tracking-wide text-sm text-grey-darker font-bold">Seabreeze Connect Inc &middot; Full Stack Developer</h2>
              <div className="text-xs text-grey-dark">Sept 2016 - June 2018</div>
            </div>

            <div className="text-grey-darker text-sm">
              <p className="pb-1">Seabreeze is a travel tech startup based out of &nbsp;
                <a
                  href="http://venturelabs.ca/companies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-grey-darker">SFU VentureLabs Tech Accelerator</a>.
              </p>

              <p className="pb-1">The very first web product launched -
                <a
                  href="https://seabreezeconnect.com"
                  className="text-grey-darker"
                  target="_blank"
                  rel="noopener noreferrer">Seabreezeconnect
                </a> connects like-minded cruise travelers to enrich their cruise vacation experiences.
              </p>

              <p className="pb-1">The newly launched platform -
                <a href="https://citybulb.me"
                  className="text-grey-darker"
                  target="_blank"
                  rel="noopener noreferrer">Citybulb
                </a> takes the same connecting travelers concept and extends it to various types of visitors, including business, leisure, students, etc.
              </p>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default Work
