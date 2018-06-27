import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class Work extends Component {
  render () {
    return (
      <DocumentTitle title={`Work - ${window.App.name}`}>
        <div className="container p-2 mx-auto flex flex-col">
          <h1>Work</h1>
        </div>
      </DocumentTitle>
    );
  }
}

export default Work;
