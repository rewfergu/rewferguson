import React from 'react';
import { css } from 'glamor';
import Link from 'gatsby-link';
import JournalFooter from '../../components/JournalFooter';
import JournalStyles from '../../components/JournalStyles';
import ProjectOverviewCard from '../../components/ProjectOverviewCard';

// import './_style.scss';
// import './_project.scss';

export default ({ data }) => {
  const activeProjects = data.activeProjects.edges;
  const holdProjects = data.holdProjects.edges;
  const archiveProjects = data.archiveProjects.edges;

  return (
    <div className={journal}>
      <header id="masthead" className="journal__header" role="banner">
        <h1 className={JournalStyles.journal__title}>
          <Link to="/projects">Journal</Link>
        </h1>
      </header>

      <div className={JournalStyles.journal__content}>
        <section className={projectCategory} id="active">
          <header
            className={`${JournalStyles.projectCategory__list} ${
              JournalStyles.projectList
            }`}
          >
            <h1 className={JournalStyles.projectCategory__list}>
              Active Projects
            </h1>
            <nav>
              <ul {...listReset}>
                {activeProjects.map(project => {
                  return (
                    <li key={project.node.folder}>
                      <a
                        {...projectList__links}
                        href={`/projects/${project.node.folder}/`}
                      >
                        {project.node.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </header>
          <div {...projectCategory__content}>
            {activeProjects.map(project => {
              return (
                <ProjectOverviewCard
                  key={project.node.folder}
                  name={project.node.name}
                  image={project.node.image}
                  description={project.node.description}
                  link={project.node.link}
                  tags={project.node.tags}
                  folder={project.node.folder}
                />
              );
            })}
          </div>
        </section>
        <section className={`${projectCategory}`} id="hold">
          <header
            className={`${
              JournalStyles.projectCategory__list
            } ${projectCategory__heading__hold} ${JournalStyles.projectList}`}
          >
            <h1 className={JournalStyles.projectCategory__heading}>
              On Hold Projects
            </h1>
            <nav>
              <ul {...listReset}>
                {holdProjects.map(project => {
                  return (
                    <li key={project.node.folder}>
                      <a
                        {...projectList__links}
                        href={`/projects/${project.node.folder}/`}
                      >
                        {project.node.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </header>
          <div
            className={`${projectCategory__content} ${projectCategory__content__hold}`}
          >
            {holdProjects.map(project => {
              return (
                <ProjectOverviewCard
                  key={project.node.folder}
                  name={project.node.name}
                  image={project.node.image}
                  description={project.node.description}
                  link={project.node.link}
                  tags={project.node.tags}
                  folder={project.node.folder}
                />
              );
            })}
          </div>
        </section>
        <section className={projectCategory} id="archive">
          <header
            className={`${
              JournalStyles.projectCategory__list
            } ${projectCategory__heading__archive} ${
              JournalStyles.projectList
            }`}
          >
            <h1 className={JournalStyles.projectCategory__heading}>
              Archived Projects
            </h1>
            <nav>
              <ul {...listReset}>
                {archiveProjects.map(project => {
                  return (
                    <li key={project.node.folder}>
                      <a
                        {...projectList__links}
                        href={`/projects/${project.node.folder}/`}
                      >
                        {project.node.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </header>
          <div
            className={`${projectCategory__content} ${projectCategory__content__archive}`}
          >
            {archiveProjects.map(project => {
              return (
                <ProjectOverviewCard
                  key={project.node.folder}
                  name={project.node.name}
                  image={project.node.image}
                  description={project.node.description}
                  link={project.node.link}
                  tags={project.node.tags}
                  folder={project.node.folder}
                />
              );
            })}
          </div>
        </section>
      </div>
      <JournalFooter />
    </div>
  );
};

export const query = graphql`
  query AllProjectsQuery {
    activeProjects: allSiteJson(filter: { status: { eq: 1 } }) {
      edges {
        node {
          name
          folder
          status
          image
          description
          tags
          github
          link
        }
      }
    }
    holdProjects: allSiteJson(filter: { status: { eq: 2 } }) {
      edges {
        node {
          name
          folder
          status
          image
          description
          tags
          github
          link
        }
      }
    }
    archiveProjects: allSiteJson(filter: { status: { eq: 3 } }) {
      edges {
        node {
          name
          folder
          status
          image
          description
          tags
          github
          link
        }
      }
    }
  }
`;

const journal = css({
  background: '#ccc'
});

const journal__sidebar = css({
  flex: '1 1 100%',
  order: 2,
  '@media(min-width: 1100px)': {
    flex: '0 0 300px',
    order: 1
  }
});

const journal__main = css({
  flex: '1 1 800px',
  order: 1,
  background: 'white'
});

const projectCategory = css({
  width: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
  fontFamily: 'sans-serif'
});

const projectCategory__content = css({
  width: 'auto',
  columnGap: '1rem',
  overflow: 'hidden',
  order: 1,
  background: '#ccc',

  '@media (min-width: 748px)': {
    flex: '1 1 400px',
    order: 2,
    columnCount: 1,
    padding: '1rem'
  },

  '@media (min-width: 65em)': {
    columnCount: 2
  },

  '@media (min-width: 75em)': {
    columnCount: 3
  }
});

const projectCategory__content__hold = css({
  background: 'hsla(0, 0%, 0%, .1)'
});

const projectCategory__content__archive = css({
  background: 'hsla(0, 0%, 0%, .2)'
});

// const projectCategory__heading = css({
//   background: 'hsla(0, 50%, 35%, 1)',
//   flex: '1 1 100%',
//   order: 2,
//   '@media(min-width: 748px)': {
//     flex: '0 0 300px',
//     order: 1
//   },
//   ' h1': {
//     fontSize: '1.5rem',
//     fontFamily: 'proxima-nova'
//   }
// });

const projectCategory__heading__hold = css({
  background: 'hsla(0, 50%, 25%, 1) !important'
});

const projectCategory__heading__archive = css({
  background: 'hsla(0, 50%, 15%, 1) !important'
});

const listReset = css({
  listStyle: 'none',
  margin: 0,
  padding: 0
});

// const projectList = css({
//   padding: '1rem 2rem 1rem 1rem',
//   width: '100%',
//   background: 'hsla(0, 50%, 35%, 1)',
//   color: '#fff',
//   textTransform: 'uppercase',
//   boxSizing: 'border-box',

//   h1: {
//     marginTop: 0,
//     color: '#fff',
//     marginBottom: '1.5rem'
//   }
// });

const projectList__links = css({
  color: '#fff',
  textDecoration: 'none',
  ':hover, :focus': {
    textDecoration: 'underline'
  }
});
