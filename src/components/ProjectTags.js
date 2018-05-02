import react from 'react';

import { css } from 'glamor';

const ProjectTags = props => (
  <ul {...tags}>
    {props.tags.map(tag => (
      <li key={tag} {...tagStyle}>
        {tag}
      </li>
    ))}
  </ul>
);

export default ProjectTags;

const tags = css({
  listStyle: 'none',
  margin: '0 0 1rem',
  paddingLeft: 0
});

const tagStyle = css({
  display: 'inline-block',
  padding: '0.33333rem 0.5rem',
  borderRadius: 0,
  fontSize: '0.8rem',
  lineHeight: 1,
  whiteSpace: 'nowrap',
  cursor: 'default',
  background: '#efefef',
  borderRadius: '5px',
  marginBottom: '5px',
  marginRight: '5px'
});
