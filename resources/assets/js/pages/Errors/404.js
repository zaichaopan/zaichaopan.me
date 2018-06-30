import React from 'react'

const NotFound = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <a
        href="/"
        className="px-2 pt-6 flex items-center uppercase text-xs text-grey-darker no-underline self-start">
        <svg
          height="16"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"> </path>
          <path d="M0-.5h24v24H0z" fill="none"> </path>
        </svg>Back
      </a>

      <div className="flex flex-col items-center m-auto">
        <h1 className="text-base uppercase tracking-wide-extra">Not Found</h1>
        <p className="text-grey-dark font-thin py-4 text-sm"> You didn’t do anything wrong. We may have moved the page you’re looking for somewhere else. </p>
      </div>

    </div>
  )
}

export default NotFound
