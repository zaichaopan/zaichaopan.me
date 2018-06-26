import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../../components/Nav';
const propTypes = {
  children: PropTypes.element.isRequired
};

const AppLayout = ({ children, ...rest }) => {
  let imgStyle = {
    width: '127px'
  };

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <div className="w-full md:w-2/5 bg-grey-lightest flex align-items justify-center py-8 md:py-0">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center m-auto">
            <div>
              <img src="https://pbs.twimg.com/profile_images/1005856683493486593/DgOU6T4k_400x400.jpg" alt="profile" style={imgStyle} className="rounded" />
            </div>

            <h1 className="font-light p-2 pt-6 tracking-wide">ZAI CHAO PAN</h1>
            <small className="font-light p-2 tracking-wide text-grey-darker">Full-stack Web Developer </small>

            <div className="p-4">
              <a href="mailto:zaichaopan@gmail.com" className="text-grey-darker">
                <svg height="16" className="fill-current octicon octicon-mail" viewBox="0 0 14 16" version="1.1" width="28" aria-hidden="true"><path fillRule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></svg>
              </a>

              <a
                className="text-grey-darker"
                href="https://github.com/zaichaopan"
                target="_blank"
                rel="noopener noreferrer">
                <svg height="16" className="fill-current octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
              </a>
            </div>
          </div>

          <div className="mt-auto hidden lg:block text-center py-8">
            <p className="text-grey-dark font-hairline tracking-wide text-xs p-2">COPYRIGHT &copy; ZAI CHAO PAN</p>
            <p className="text-grey-dark font-hairline tracking-wide text-xs py-1">MADE WITH LARAVEL</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full md:w-3/5">
        <Nav />
        {children}
      </div>
    </div>
  );
};

AppLayout.propTypes = propTypes;

export default AppLayout;
