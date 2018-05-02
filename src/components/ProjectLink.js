import react from 'react';
import { css } from 'glamor';
import { withPrefix } from 'gatsby-link';

const ProjectLink = props => (
  <a href={props.url} {...linkStyle}>
    <svg>
      <use xlinkHref={withPrefix('icons.svg#icon-link')} />
    </svg>
    {props.url}
  </a>
);

export default ProjectLink;

const linkStyle = css({
  display: 'flex',
  color: '#862d2d',
  marginBottom: '1rem',
  ' svg': {
    fill: '#862d2d',
    height: '1.3rem',
    width: '1.3rem',
    display: 'block',
    marginRight: '0.5rem'
  }
});
