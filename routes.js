var hapiExtension = require("../tktbot-web/plugins/bot/hapi-extensions");

exports.default = function(server){
    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('api index');
        }
    });

}