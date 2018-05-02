module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
        // path: '/Users/rewfergu/Dropbox/projects/rewferguson/src/projects'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typography',
    'gatsby-plugin-glamor',
    'gatsby-plugin-sass'
  ]
};
