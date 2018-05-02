import React from 'react';
import Link from 'gatsby-link';

import { css } from 'glamor';

export default () => (
  <footer id="colophon" className={journal__footer} role="contentinfo">
    <ul>
      <li>
        <Link to="/">Robert Ferguson</Link>
      </li>
      <li>
        <Link to="/work">Work</Link>
      </li>
      <li>
        <a href="https://github.com/rewfergu">Github</a>
      </li>
      <li>
        <a href="http://codepen.io/rewfergu">Codepen</a>
      </li>
      <li>
        <a href="http://www.linkedin.com/in/rewferguson">LinkedIn</a>
      </li>
      <li>
        <a href="https://twitter.com/rewfergu">Twitter</a>
      </li>
    </ul>
  </footer>
);

const journal__footer = css({
  padding: '1rem',
  background: '#222',
  textTransform: 'uppercase',
  fontWeight: 800,
  ' ul': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    ' li': {
      display: 'block',
      padding: 0,
      paddingRight: '1rem',
      fontSize: '1.3rem',
      '&:first-child': {
        fontSize: '2.125rem'
      },
      '@media screen and (min-width: 40em)': {
        display: 'inline-block',
        '&:first-child': {
          paddingRight: '2rem'
        }
      },
      ' a': {
        color: '#fff',
        textDecoration: 'none',
        '&:hover, &:focus': {
          textDecoration: 'underline'
        }
      }
    }
  }
});
