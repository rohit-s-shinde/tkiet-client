'use strict';
// Server
const Hapi = require('hapi');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.register({
  register: require('./src')
});
/*server.register({
  register: require('./back-end'),
  routes: { prefix: '/api' }
});*/

server.register({
  register: require('good'),
  options: {
    ops: { interval: 600000 },
    reporters: {
      console: [ { module: 'good-console'}, 'stdout' ]
    }
  }
}, (err) => {
    if (err) throw err;
});



server.start((err) => {
  if (err) throw err;
  console.log('✅  Server is listening on ' + server.info.uri.toLowerCase());
});
