import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby-link';

import { css } from 'glamor';
import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: ['proxima-nova', 'sans-serif'],
  bodyFontFamily: ['Georgia', 'serif']
});

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div className={page}>
    <Helmet>
      <title>Robert Ferguson</title>
      <link rel="stylesheet" href="https://use.typekit.net/lnr0psk.css" />
      <link rel="stylesheet" href={withPrefix('prism.css')} />
      <script src={withPrefix('prism.js')} />
    </Helmet>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

const page = css({
  minHeight: '100vh'
});
