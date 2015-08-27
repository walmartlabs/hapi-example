var Hapi = require('hapi');
var walmart = require('walmart')(process.env.WALMART_API_KEY);

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/api/product/{id}',
  handler: function (request, reply) {
    walmart.getItem(request.params.id).then(function(result){
      reply(result);
    })
  }
});

server.route({
  method: 'GET',
  path: '/api/upc/{id}',
  handler: function (request, reply) {
    walmart.getItemByUPC(request.params.upc).then(function(result){
      reply(result);
    })
  }
});

server.register(require('inert'), function (err) {
  server.route({
    method: 'GET',
    path: '/',
    handler: {
      file: 'public/index.html'
    }
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public'
      }
    }
  });
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
