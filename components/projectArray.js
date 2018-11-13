import Section from './section';
import Img from './img';
import styled from 'styled-components';
import { Link } from '../routes';

import siteData from '../data/siteData';

const data = siteData.filter(item => item.featured);

const ProjectArray = props => {
  return (
    <Section style={{ padding: '2rem' }}>
      <h1
        style={{
          textTransform: 'uppercase',
          borderBottom: '1px dashed #ccc',
          paddingBottom: '0.5rem',
          color: '#7e7e7e'
        }}
      >
        Work
      </h1>
      <ProjectList>
        {data.map(item => (
          <ProjectWrap>
            <Link route={`/work/${item.slug}`}>
              <a
                onClick={() => {
                  console.log('project array has been clicked');
                  props.selectProject(item.slug);
                }}
              >
                <Img src={`/static/images/${item.cover}`} alt="project image" />
                <ProjectName>
                  {item.name}
                </ProjectName>
              </a>
            </Link>
          </ProjectWrap>
        ))}
      </ProjectList>
    </Section>
  );
};

export default ProjectArray;

const ProjectList = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  columns: 2;
  column-gap: 1.5rem;
  list-style: none;

  @media (min-width: 500px) {
    columns: 3;
  }
`;

const ProjectWrap = styled.li`
  margin-bottom: 1.5rem;
  background: #f1f1f1;
  /* border: 4px solid #f1f1f1; */
  box-sizing: border-box;
  break-inside: avoid;
  transition: all 0.3s;
  border-bottom: 2px solid #ccc;

  &:hover {
    background: white;
    /* box-shadow: 0 0 5px rgba(0,0,0,0.3); */
  }

  img {
    padding: 4px 4px 0;
    display: block;
    box-sizing: border-box;
  }

  a {
    display: block;
    text-decoration: none;
    &:hover {
      color: #de3115;
    }
  }
`;

const ProjectName = styled.div`
  padding: 5px;
`;
