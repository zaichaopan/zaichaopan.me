import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class Work extends Component {
  render () {
    return (
      <DocumentTitle title={`Work - ${window.App.name}`}>
        <div className="w-full p-8 md:w-4/5 mx-auto md:p-2 mx-auto flex flex-col mt-8 pt-20 md:pt-8">
          <h1>Work</h1>
        </div>
      </DocumentTitle>
    );
  }
}

export default Work;
