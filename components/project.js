import styled from 'styled-components';

import ProjectTags from './projectTags';
import GitHubLink from './githubLink';
import ProjectLink from './projectLink';
import Img from './img';
import Images from './images';
import Section from './section';

import siteData from '../data/siteData';

const filterProjectData = (projects, project) => {
  if (!project) {
    return null;
  }

  const data = projects.filter(item => item.slug === project);

  if (data[0]) {
    return data[0];
  }

  return null;
};

function displayGallery(images = [], video = []) {
  if (images.length > 0 || video.length > 0) {
    return <Images gallery={images} videos={video} />;
  }

  return null;
}

const Project = props => {
  const projectData = props.projectData || {};
  const projectImages = projectData.images || [];
  const projectVideo = projectData.video || [];

  // console.log('project data', projectData);
  if (projectData) {
    return (
      <Section>
        {projectData.cover &&
          <Img
            src={`/static/images/${projectData.cover}`}
            alt="project image"
            style={{
              borderBottom: '3px solid rgba(0, 0, 0, 0.12941176470588237)',
              width: '100%'
            }}
          />}
        <ProjectContent>
          <h1>{projectData.name}</h1>
          <Description
            dangerouslySetInnerHTML={{ __html: projectData.description }}
          />
          {projectData.tags && <ProjectTags tags={projectData.tags} />}
          {projectData.github && <GitHubLink url={projectData.github} />}
          {projectData.link && <ProjectLink url={projectData.link} />}
          {displayGallery(projectImages, projectVideo)}
        </ProjectContent>
      </Section>
    );
  }

  return null;
};

export default Project;

const ProjectContent = styled.div`
  padding: 1rem;
`;

const Description = styled.section`
  margin-bottom: 1rem;
`;
