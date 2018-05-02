import React from 'react';
import Link, { withPrefix } from 'gatsby-link';
import Nav from '../components/Nav';
import Helmet from 'react-helmet';

import { rhythm } from 'typography';
import { css } from 'glamor';
import '../../static/style.css';

class IndexPage extends React.Component {
  render() {
    return (
      <div className={wrapper}>
        <Helmet>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.min.js" />
          <script src={withPrefix('p5-sketch.js')} />
        </Helmet>
        <div className="home">
          <Nav />
        </div>
      </div>
    );
  }
}

export default IndexPage;

const wrapper = css({
  maxHeight: '100vh',
  ' header': {
    position: 'fixed'
  }
});
