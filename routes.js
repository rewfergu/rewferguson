const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes());

// routes.add('a', '/work', 'work');
routes.add('b', '/work/:slug', 'work');
routes.add('c', '/about', 'about');
