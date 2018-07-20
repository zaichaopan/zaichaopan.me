import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

class Work extends Component {
  render () {
    return (
      <DocumentTitle title={`Work - ${window.App.name}`}>
        <div className="work w-full p-8 md:w-4/5 mx-auto md:p-2 mx-auto flex flex-col mt-8 pt-20 md:pt-8">
          <h1 className="mb-4 work__headline font-bold tracking-wide-extra">Work</h1>
          <div>
            <div className="flex justify-between py-1  flex-wrap">
              <h2 className="tracking-wide text-sm text-grey-darker font-bold">
                Full Stack developer @Seabreeze Connect Inc
              </h2>
              <div className="text-xs text-grey-dark">Vancouver, BC</div>
            </div>
            <div className="flex text-xs text-grey-darker justify-between items-center mb-3">
              Sept 2016 - June 2018
            </div>

            <div className="text-grey-darker text-sm">
              <p className="pb-2">Seabreeze is a travel tech startup based out of &nbsp;
                <a
                  href="http://venturelabs.ca/companies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-grey-darker">SFU VentureLabs Tech Accelerator</a>.
                The very first web product launched -
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
                <em>As a full-stack web developer</em>, I converted wireframes, graphic design and mock-ups into fully-functional web applications. I also maintained functionality, fixed bug and wrote automated tests. <strong>My responsibilities including</strong>:
              </p>

              <ul className="mt-3 tracking-wide">
                <li className="font-light">
                  Full stack development
                </li>
                <li className="font-light">
                  Transform wireframes and mock-ups into working software
                </li>
                <li className="font-light">
                  Deliver applications that support business requirements
                </li>
                <li className="font-light">
                  Work with project manager to plan product features and requirements
                </li>
                <li className="font-light">
                  TroubleShoot, debug software, resolve bugs
                </li>
                <li className="font-light">
                  Write automated tests to improve code quality
                </li>
                <li className="font-light">
                  Pair with other team members on new features, refactoring and code review
                </li>
                <li className="font-light">
                  Research and employ new web-based technologies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default Work
