import React from 'react'
import PropTypes from 'prop-types'

const Star = ({ height }) => {
  return (
    <svg
      aria-label="star"
      className="fill-current octicon octicon-star"
      viewBox="0 0 14 16"
      version="1.1"
      width="14"
      height={height}
      role="img">
      <path
        fillRule="evenodd"
        d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z">
      </path>
    </svg>
  )
}

Star.propTypes = {
  height: PropTypes.string.isRequired
}
export default Star
