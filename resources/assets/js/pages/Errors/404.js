import React from 'react'

const NotFound = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-1 items-center">
        <h1 className="py-8">Sorry, that page isn’t here.</h1>
        <p className="text-grey-dark">
                    You didn’t do anything wrong. We may have moved the page you’re looking for somewhere else.
        </p>
      </div>
    </div>
  )
}

export default NotFound
