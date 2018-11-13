import React from 'react';
import styled from 'styled-components';
import LinkSvg from '../images/link.svg';

const ProjectLink = props => (
  <A href={props.url}>
    <LinkSvg />
    {props.url}
  </A>
);

export default ProjectLink;

const A = styled.a`
  display: flex;
  color: #1e325a;
  margin-bottom: 1rem;
  svg {
    fill: #1e325a;
    height: 1.3rem;
    width: 1.3rem;
    display: block;
    margin-right: 0.5rem;
  }
`;
