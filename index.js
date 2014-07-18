var hostname = require('os').hostname();

exports.register = function(plugin, options, next){
    plugin.log(["debug", "deployment-info"], "registering deployment-info route");
    plugin.route([
        {
            method: "GET",
            path: "/server",
            config: {
                handler: function(request, reply) {
                    reply({ host: hostname }).code(200);
                }
            }
        },
        {
            method: "GET",
            path: "/deployment-info",
            config: {
                handler: function(request, reply) {
                    reply(options).code(200);
                }
            }
        }
    ]);

    next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};