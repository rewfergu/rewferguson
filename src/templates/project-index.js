import React from 'react';
import Link from 'gatsby-link';
import ProjectTags from '../components/ProjectTags';
import GitHubLink from '../components/GitHubLink';
import ProjectLink from '../components/ProjectLink';
import JournalFooter from '../components/JournalFooter';
import JournalStyles from '../components/JournalStyles';

import { css } from 'glamor';

// import '../../static/prism';
// import '../../static/prism.css';
import codepen from '../../static/codepen.js';

function printCategoryTitle(status) {
  if (status === 1) {
    return (
      <Link to="/projects" className={JournalStyles.projectCategory__heading}>
        <h1>Active Projects</h1>
      </Link>
    );
  }

  if (status === 2) {
    return (
      <Link
        to="/projects#hold"
        className={JournalStyles.projectCategory__heading}
      >
        <h1>On Hold Projects</h1>
      </Link>
    );
  }

  return (
    <Link
      to="/projects#achive"
      className={JournalStyles.projectCategory__heading}
    >
      <h1>Archived Projects</h1>
    </Link>
  );
}

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    codepen();
  }

  render() {
    const project = this.props.data.siteJson;
    let pages;
    if (this.props.data.allMarkdownRemark) {
      pages = this.props.data.allMarkdownRemark.edges;
    }
    return (
      <div className={wrapper}>
        <header id="masthead" className="journal__header" role="banner">
          <h1 className={JournalStyles.journal__title}>
            <Link to="/projects">Journal</Link>
          </h1>
        </header>

        <main className={JournalStyles.journal__content}>
          <header
            className={`${JournalStyles.projectCategory__list} ${
              JournalStyles.projectList
            }`}
          >
            {printCategoryTitle(
              this.props.data.projectCategory.edges[0].node.status
            )}
            <nav>
              <ul {...listReset}>
                {this.props.data.projectCategory.edges.map(projectCat => {
                  return (
                    <li key={projectCat.node.folder}>
                      <a
                        className={
                          projectCat.node.name === project.name
                            ? `${projectList__links} ${current}`
                            : `${projectList__links}`
                        }
                        href={`/projects/${projectCat.node.folder}/`}
                      >
                        {projectCat.node.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </header>

          <section className={project__content}>
            <h1
              className={
                project.image ? projectTitle : `${projectTitle} ${underline}`
              }
            >
              {project.name}
            </h1>

            {project.image && (
              <img src={project.image} alt="project cover image" />
            )}

            <p>{project.description}</p>

            {project.tags && <ProjectTags tags={project.tags} />}
            {project.github && <GitHubLink url={project.github} />}
            {project.link && <ProjectLink url={project.link} />}

            <section>
              {pages &&
                pages.map(page => {
                  return (
                    <article
                      key={page.node.fields.slug}
                      className={projectArticle}
                    >
                      <Link
                        to={page.node.fields.slug}
                        className={article__title}
                      >
                        <h2>{page.node.frontmatter.title}</h2>
                      </Link>
                      <div className={article__meta}>
                        {page.node.frontmatter.date}
                      </div>
                      <div
                        dangerouslySetInnerHTML={{ __html: page.node.html }}
                      />
                    </article>
                  );
                })}
            </section>
          </section>
        </main>

        <JournalFooter />
      </div>
    );
  }
}

export default ProjectIndex;

export const query = graphql`
  query ProjectIndexQuery($name: String!, $folder: String!, $status: Int!) {
    siteJson(name: { eq: $name }) {
      name
      folder
      status
      image
      description
      tags
      github
      link
    }
    projectCategory: allSiteJson(filter: { status: { eq: $status } }) {
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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: $folder } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          fields {
            slug
          }
          excerpt
          html
        }
      }
    }
  }
`;

const wrapper = css({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
});

const listReset = css({
  listStyle: 'none',
  margin: 0,
  padding: 0
});

const project__content = css({
  width: 'auto',
  maxWidth: '50rem',
  columnGap: '1rem',
  overflow: 'hidden',
  order: 1,
  background: 'white',
  padding: '2rem 1rem',

  '@media (min-width: 748px)': {
    flex: '1 1 400px',
    order: 2,
    columnCount: 1,
    padding: '1rem'
  }
});

const projectList__links = css({
  color: 'rgba(255, 255, 255, 0.7)',
  textDecoration: 'none',
  ':hover, :focus': {
    textDecoration: 'underline'
  }
});

const current = css({
  color: 'white',
  fontWeight: 800
});

const projectTitle = css({
  marginTop: '1rem',
  fontSize: '1.5rem',
  textTransform: 'uppercase'
});

const underline = css({
  borderBottom: '1px solid #ccc',
  marginBottom: '1rem'
});

const projectArticle = css({
  margin: '3rem 0'
});

const article__title = css({
  display: 'block',
  fontWeight: 700,
  borderBottom: '1px dashed #ccc',
  marginBottom: 0,
  textTransform: 'uppercase',
  color: '#862d2d',
  textDecoration: 'none',
  ' h2': {
    margin: 0,
    fontSize: '1.3rem'
  }
});

const article__meta = css({
  fontSize: '0.75rem',
  color: '#cacaca',
  marginBottom: '1rem'
});
