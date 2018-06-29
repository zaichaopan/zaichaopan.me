import React from 'react'
import PropTypes from 'prop-types'

const Close = ({ height }) => {
  return (
    <svg
      className="fill-current w-4 h-4 cursor-pointer text-grey"
      role="button"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20">
      <path
        d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z">
      </path>
    </svg>
  )
}

Close.propTypes = {
  height: PropTypes.string.isRequired
}
export default Close
