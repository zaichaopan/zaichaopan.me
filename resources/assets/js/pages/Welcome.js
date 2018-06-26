import React from 'react';
import DocumentTitle from 'react-document-title';
const Welcome = () => {
  return (
    <DocumentTitle title={`Welcome - ${window.App.name}`}>
      <div className="profile flex flex-col flex-1 p-8 font-hairline font-xs text-grey-darker mx-auto mt-8">

        <p className="leading-normal my-4">I am a full-stack&nbsp;
          <strong>web developer</strong> based in Vancouver. I have a diverse set of skills in both backend and front end development, from&nbsp;
          <strong>PHP</strong>,&nbsp;
          <strong>Laravel</strong>,&nbsp;
          <strong>JavaScript</strong>,&nbsp;
          <strong>MySQL</strong>,
          <strong>Vue</strong>,
          <strong>React </strong>to&nbsp;
          <strong>HTML</strong>,&nbsp;
          <strong>Sass</strong> and&nbsp;
          <strong>CSS</strong>.
        </p>

        <p className="leading-normal my-4">
          I enjoy learning different frameworks, libraries and languages to keep up with what&#39;s happening in web development. When I&#39;m not working,  I&#39;m usually experimenting with new technologies, and finding new and clever ways to improve the quality and architecture of my code.
        </p>

        <p className="leading-normal my-4">I&#39;m also a big fan of open source software. Sharing code and knowledge is beneficial to all involved. You can find my open-source projects in
          <strong>&nbsp;
            <a
              className="text-grey-darkest"
              href="https://github.com/zaichaopan"
              target="_blank"
              rel="noopener noreferrer">github</a>
          </strong>,
          <strong>&nbsp;
            <a
              className="text-grey-darkest"
              href="https://packagist.org/users/zaichaopan/packages/"
              target="_blank"
              rel="noopener noreferrer">packagist</a></strong> and
          <strong>&nbsp;
            <a
              className="text-grey-darkest"
              href="https://www.npmjs.com/settings/zaichaopan/packages"
              target="_blank"
              rel="noopener noreferrer">npm</a></strong>.</p>

        <p className="tracking-wide leading-normal my-4">Thanks for stopping by!</p>
      </div>
    </DocumentTitle>
  );
};

export default Welcome;
