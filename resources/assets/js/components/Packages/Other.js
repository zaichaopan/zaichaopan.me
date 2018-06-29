import React, { Component } from 'react'

const otherProjectList = [
  {
    id: 'laravel-react-spa',
    name: 'Laravel React Spa',
    language: 'PHP',
    description: 'A Laravel-React SPA starter project template.',
    url: 'https://github.com/zaichaopan/laravel-react-spa',
    keywords: ['laravel', 'react', 'redux', 'spa', 'jwt']
  },
  {
    id: 'airbnb-map-search',
    name: 'Airbnb Map Search',
    language: 'Javascript',
    description: 'Airbnb Map Search Page Rebuilt with Vue.',
    url: 'https://github.com/zaichaopan/airbnb-map-search',
    keywords: ['vue', 'google map api', 'airbnb']
  }
]

const renderKeywordList = (words) => {
  return words.map(word => {
    return (
      <span className="mr-2 rounded p-2 text-xs keyword" key={word}>
        {word}
      </span>
    )
  })
}

const renderOtherProjectList = () => {
  return otherProjectList.map(item => {
    return (
      <div className="flex flex-col mb-4" key={item.id} >
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
          {renderKeywordList(item.keywords)}
        </div>

        <div className="flex mt-4 items-center">
          <div className="language text-xs pr-4 text-grey-darker flex items-center">
            <span className={`h-3 w-3 rounded-full inline-block ${item.language.toLocaleLowerCase()}`}>
            </span> <span className="pl-1">{item.language}</span>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    )
  })
}

const OtherProjectList = () => {
  return (
    <div className="flex flex-col">{renderOtherProjectList()} </div>
  )
}

export default OtherProjectList
