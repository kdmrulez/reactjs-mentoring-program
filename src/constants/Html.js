import React from 'react';
import PropTypes from 'prop-types';

const Html = ({ children, scripts }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <title>React mentoring program</title>
    </head>
    <body>
      <div
        id="app"
        dangerouslySetInnerHTML={{ __html: children }}
      />
      {scripts.map((item, index) => <script key={index} src={item} />)}
    </body>
  </html>
);

Html.propTypes = {
  children: PropTypes.node.isRequired,
  scripts: React.PropTypes.arrayOf(React.PropTypes.string),
};

Html.defaultProps = {
  scripts: [],
};

export default Html;
