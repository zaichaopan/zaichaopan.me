import moment from 'moment'
import React from 'react'
import PackageList from './PackageList'

const url = 'https://npmsearch.com/query?q=zaichaopan&fields=name,description,keywords,modified'

const renderKeywordList = (words) => {
  return words
    .filter(word => word.toLowerCase() !== 'javascript')
    .map(word => {
      return (
        <span className="mr-2 rounded p-2 text-xs keyword" key={word}>
          {word}
        </span>
      )
    })
}

const formatResults = (results) => {
  results = results.filter(result => result.name[0].startsWith('@'))
    .map(result => {
      let description = result.description[0]
      if (description.endsWith('.')) {
        description = description.substring(0, description.length)
      }
      return {
        name: result.name[0].split('/')[1],
        description: result.description[0],
        keywords: result.keywords,
        language: 'Javascript',
        url: `http://npmjs.com/package/${result.name[0]}`,
        updated: moment(result.modified[0]).fromNow()
      }
    })

  return results
}

const renderMeta = (item) => {
  return (
    <div className="flex flex-col">
      <div className="keywords my-2">
        {renderKeywordList(item.keywords)}
      </div>

      <div className="flex mt-4 items-center">
        <div className="language text-xs pr-4 text-grey-darker">
          <span className="h-3 w-3 rounded-full inline-block javascript">
          </span> Javascript
        </div>
        <div className="text-xs text-grey-darker"> Updated {item.updated} </div>
      </div>
    </div>
  )
}

const Npm = () => {
  return (
    <div>
      <PackageList
        url={url}
        formatResults={formatResults}
        renderMeta={renderMeta} />
    </div >
  )
}

export default Npm
