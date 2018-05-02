import React from 'react';
import Link, { withPrefix } from 'gatsby-link';
import { css } from 'glamor';
import Helmet from 'react-helmet';

import JournalFooter from '../components/JournalFooter';
import JournalStyles from '../components/JournalStyles';

import codepen from '../../static/codepen.js';

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    codepen();
  }

  render() {
    const post = this.props.data.markdownRemark;
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
            {this.props.data.projectInfo && (
              <Link
                to={`/projects/${
                  this.props.data.projectInfo.edges[0].node.folder
                }`}
                className={JournalStyles.projectCategory__heading}
              >
                <h1>{this.props.data.projectInfo.edges[0].node.name}</h1>
              </Link>
            )}
            <nav>
              <ul {...listReset}>
                {this.props.data.currentProject.edges.map(project => {
                  return (
                    <li key={project.node.fields.slug}>
                      <Link
                        className={
                          project.node.frontmatter.title ===
                          post.frontmatter.title
                            ? `${projectList__links} ${current}`
                            : `${projectList__links}`
                        }
                        to={project.node.fields.slug}
                      >
                        {project.node.frontmatter.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </header>

          <section className={post__content}>
            <h1 className={post__title}>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </section>
        </main>

        <JournalFooter />
      </div>
    );
  }
}

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($slug: String!, $folder: String!, $folderName: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    projectInfo: allSiteJson(filter: { folder: { eq: $folderName } }) {
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
    currentProject: allMarkdownRemark(
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

const single = css({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '2rem 2rem 1rem',
  width: '100%',
  height: ' 100%',
  background: 'white',
  boxSizing: 'border-box'
});

const post__title = css({
  fontWeight: 700,
  fontSize: '1.5rem',
  marginTop: '1rem',
  borderBottom: '1px dashed #ccc',
  textTransform: 'uppercase',
  ' a': {
    textDecoration: 'none'
  }
});

const post__content = css({
  width: 'auto',
  maxWidth: '50rem',
  columnGap: '1rem',
  overflow: 'hidden',
  order: 1,
  background: 'white',
  padding: '2rem 1rem',
  flexGrow: 1,
  '@media (min-width: 748px)': {
    flex: '1 1 400px',
    order: 2,
    columnCount: 1,
    padding: '1rem'
  }
});

const post__meta = css({
  fontSize: '.75rem',
  color: '#cacaca'
});

const listReset = css({
  listStyle: 'none',
  margin: 0,
  padding: 0
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
