const withCSS = require('@zeit/next-css');
const siteData = require('./data/siteData');

module.exports = withCSS();

module.exports.exportPathMap = async function(defaultPathMap) {
  const pathMap = {
    '/': { page: '/' },
    '/about': { page: '/about' },
    '/work': { page: '/work' }
  };
  siteData.forEach(project => {
    pathMap['/work/' + project.slug] = { page: '/work' };
  });

  return pathMap;
};
