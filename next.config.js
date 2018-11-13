const withCSS = require('@zeit/next-css');
const siteData = require('./data/siteData');
// const withMDX = require('@zeit/next-mdx')();

/* Without CSS Modules, with PostCSS */
module.exports = withCSS();

module.exports.exportPathMap = async function(defaultPathMap) {
  const pathMap = {
    '/': { page: '/' },
    '/about': { page: '/about' }
  };
  siteData.forEach(project => {
    pathMap['/work/' + project.slug] = { page: '/work' };
  });

  return pathMap;
};
