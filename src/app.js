const Hapi = require('@hapi/hapi');
const Blankie = require('blankie');
const Scooter = require('@hapi/scooter');
const logging = require('./plugins/logging');
const routes = require('./routes');

const server = Hapi.server({
  port: 5000,
  host: 'localhost',
  debug: false,
  routes: {
    cors: true,
  },
});

const init = async () => {
  await server.register(logging);
  await server.register([Scooter, {
    plugin: Blankie,
    options: {},
  }]);

  server.route(routes);

  await server.start();
};

module.exports = init;
