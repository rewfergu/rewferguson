const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }

  if (node.internal.type === `SiteJson`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        allSiteJson {
          edges {
            node {
              name
              folder
              status
              description
              tags
              image
              github
              link
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
            folder: `/${node.fields.slug.split('/')[2]}/`,
            folderName: node.fields.slug.split('/')[2]
          }
        });
      });

      result.data.allSiteJson.edges.forEach(({ node }) => {
        createPage({
          path: `/projects/${node.folder}/`,
          component: path.resolve(`./src/templates/project-index.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            name: node.name,
            folder: `/${node.folder}/`,
            status: node.status,
            image: node.image,
            description: node.description,
            tags: node.tags,
            github: node.github,
            link: node.link
          }
        });
      });
      resolve();
    });
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /bad-module/,
      loader: 'null-loader'
    });
  }
};
