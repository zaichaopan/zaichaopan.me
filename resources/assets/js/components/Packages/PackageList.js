import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getPureAxiosInstance } from '../../helpers/axios'
import Loader from '../Loader/index'

class PackageList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      packages: []
    }
  }

  componentDidMount () {
    this.fetchPackages()
  }

  async fetchPackages () {
    let { data: { results } } = await getPureAxiosInstance().get(this.props.url)
    this.setState({
      loading: false,
      packages: this.props.formatResults(results)
    })
  }

  renderPackageList () {
    return this.state.packages.map(item => {
      return (
        <div className="flex flex-col mb-4" key={item.name}>
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <a
                href={item.url}
                className="text-xl text-grey-darkest uppercase no-underline hover:underline"
                target="_blank"
                rel="noopener noreferrer">{item.name}
              </a>
            </div>
            <p className="text-grey-darker py-2 text-sm"> {item.description}. </p>
          </div>

          {this.props.renderMeta(item)}

          <div className="divider"></div>
        </div>
      )
    })
  }

  render () {
    return (
      <div>
        {this.state.loading ? <Loader /> : this.renderPackageList()}
      </div>
    )
  }
}

PackageList.propTypes = {
  formatResults: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  renderMeta: PropTypes.func.isRequired
}

export default PackageList
