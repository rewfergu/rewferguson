import React from 'react';
import Link from 'gatsby-link';

import glamorous from 'glamorous';
const { Div, H1 } = glamorous;

const Header = () => (
  <Div
    css={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem'
    }}
  >
    <Div
      css={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <H1 css={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Test
        </Link>
      </H1>
    </Div>
  </Div>
);

export default Header;
