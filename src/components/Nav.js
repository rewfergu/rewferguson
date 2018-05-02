import React from 'react';
import Link, { withPrefix } from 'gatsby-link';

import { css } from 'glamor';

export default () => (
  <header {...header}>
    <h1 {...heading}>
      <span>Robert</span> Ferguson
    </h1>
    <nav {...nav}>
      <ul>
        <li>
          <Link to="work">
            <svg>
              <use xlinkHref={withPrefix('icons.svg#icon-images')} />
            </svg>
            Work
          </Link>
        </li>
        <li>
          <Link to="projects">
            <svg>
              <use xlinkHref={withPrefix('icons.svg#icon-book')} />
            </svg>
            Journal
          </Link>
        </li>
        <li>
          <a href="https://github.com/rewfergu">
            <svg>
              <use xlinkHref={withPrefix('icons.svg#icon-github')} />
            </svg>
            Github
          </a>
        </li>
        <li>
          <a href="http://codepen.io/rewfergu">
            <svg>
              <use xlinkHref={withPrefix('icons.svg#icon-codepen')} />
            </svg>
            Codepen
          </a>
        </li>
        <li>
          <a href="http://www.linkedin.com/in/rewferguson">
            <svg>
              <use xlinkHref={withPrefix('icons.svg#icon-linkedin')} />
            </svg>
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://twitter.com/rewfergu">
            <svg>
              <use xlinkHref={withPrefix('icons.svg#icon-twitter')} />
            </svg>
            Twitter
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

const header = css({
  height: '100vh',
  textTransform: 'uppercase',
  padding: '1.5rem',
  // position: 'fixed',
  left: 0,
  top: 0,
  boxSizing: 'border-box',
  '@media (max-width: 30em)': {
    width: '100vw'
  }
});

const heading = css({
  background: '#862d2d',
  color: 'white',
  fontWeight: '800',
  marginTop: 0,
  padding: '1.5rem 1rem 3rem',
  fontSize: '2rem',
  fontFamily: 'proxima-nova, sans-serif',
  ' span': {
    display: 'block',
    fontSize: '2.73rem',
    lineHeight: '1.4rem'
  }
});

const nav = css({
  fontSize: '1.5rem',
  fontWeight: 800,
  ' ul': {
    margin: 0,
    padding: 0,
    marginLeft: '1rem',
    listStyle: 'none',
    ' li': {
      margin: 0,
      padding: 0,
      marginBottom: '.5rem',
      ' a': {
        color: '#862d2d',
        textDecoration: 'none',
        display: 'flex',
        ':hover, :focus': {
          color: '#222',
          ' svg': {
            fill: '#222'
          }
        },
        ' svg': {
          fill: '#862d2d',
          height: '1.5rem',
          width: '1.5rem',
          display: 'block',
          marginRight: '1rem'
        }
      }
    }
  }
});
