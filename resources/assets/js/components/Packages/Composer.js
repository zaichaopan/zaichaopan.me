import React from 'react'
import PackageList from './PackageList'
import StarSvg from '../Svg/Star'
import DownloadSvg from '../Svg/Download'

const url = 'https://packagist.org/search.json?q=zaichaopan'

const formatResults = results => {
  return results.map(result => {
    return {
      name: result.name.split('/')[1],
      description: result.description,
      favers: result.favers,
      url: result.repository,
      language: 'PHP',
      downloads: result.downloads
    }
  })
}

const renderMeta = item => {
  return (
    <div className="flex items-center">
      <div className="language mr-4">
        <span className={`h-3 w-3 rounded-full inline-block ${item.language.toLowerCase()}`}></span>
        <span className="ml-1 text-xs text-grey-darker">{item.language}</span>
      </div>
      <div className="text-grey-darker flex items-center mr-4">
        <a
          href={item.url}
          className="text-grey-darker no-underline flex items-center">
          <StarSvg height="16" />
          <span className="ml-2 text-xs text-grey-dark">{item.favers > 0 ? item.favers : ''}</span>
        </a>
      </div>

      <div className="text-grey-darker flex items-center">
        <DownloadSvg height="16" />
      </div>
      <span className="ml-2 text-xs text-grey-dark">{item.downloads > 0 ? item.downloads : ''}</span>
    </div>
  )
}

const Composer = () => {
  return (
    <div>
      <PackageList
        url={url}
        formatResults={formatResults}
        renderMeta={renderMeta} />
    </div>
  )
}

export default Composer
