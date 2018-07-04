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
              <h2 className="tracking-wide text-sm text-grey-darker font-bold">Seabreeze Connect Inc</h2>
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
              The newly launched platform -
                <a href="https://citybulb.me"
                  className="text-grey-darker"
                  target="_blank"
                  rel="noopener noreferrer">Citybulb
                </a> takes the same connecting travelers concept and extends it to various types of visitors, including business, leisure, students, etc.
              </p>

              <p className="mt-2">
                <em className="underline">As a full-stack web developer</em>, I converted wireframes, graphic design and mock-ups into fully-functional web applications. I also maintained functionality, fixed bug and wrote automated tests.
              </p>

              <ul className="mt-3 tracking-wide">
                <li className="py-1">Implement application features, transform wireframes and mock-ups into working software
                </li>
                <li className="py-1">Work with project manager and other stakeholders to develop and plan technical strategies and deliver applications that support business requirements</li>
                <li className="py-1">TroubleShoot, debug software, resolve bugs and write automated tests to improve code quality</li>
                <li className="py-1">Pair with other team members on new features, refactoring and code review</li>
                <li className="py-1">Research and employ new web-based technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default Work
