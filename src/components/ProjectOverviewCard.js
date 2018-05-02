import React from 'react';
import Link from 'gatsby-link';
import ProjectTags from './ProjectTags';
import GitHubLink from './GitHubLink';
import ProjectLink from './ProjectLink';
import { css } from 'glamor';

export default props => (
  <section {...project}>
    <h1
      className={
        props.image ? `${project__title}` : `${project__title} ${emphasis}`
      }
    >
      {props.name}
    </h1>
    {props.image && <img {...project__img} src={props.image} />}
    <p>{props.description}</p>
    {props.github && <GitHubLink url={props.github} />}
    {props.link && <ProjectLink url={props.link} />}
    {props.tags && <ProjectTags tags={props.tags} />}
    <Link to={`/projects/${props.folder}/`}>More</Link>
  </section>
);

const project = css({
  maxWidth: '800px',
  display: 'inline-block',
  width: '100%',
  transition: 'all .5s',
  background: 'white',
  boxSizing: 'border-box',
  breakInside: 'avoid',
  padding: '1rem',

  '@media(min-width: 40em)': {
    padding: '2rem 2rem 1rem',
    margin: '0 auto 1rem'
  },

  p: {
    display: ' block',
    borderRadius: '5px',
    background: 'rgba(255, 255, 255, .3)',
    margin: '1rem 0',

    img: {
      maxWidth: '100%',
      boxSizing: 'border-box'
    }
  }
});

const project__title = css({
  fontSize: '1.5rem',
  textTransform: 'uppercase',
  marginTop: 0,
  color: '#353535',
  marginBottom: '0.5rem',

  a: {
    color: '#353535',
    textDecoration: 'none'
  }
});

const emphasis = css({
  borderBottom: '1px solid #ccc',
  marginBottom: '1rem'
});

const project__img = css({
  maxWidth: '100%',
  width: '100%',
  border: 'none',
  padding: 0
});
