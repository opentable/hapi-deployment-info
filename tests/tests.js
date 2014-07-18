describe('deployment-info tests', function(){
    var should = require('should');

    it('should register the routes', function(){
        var p = require('../index.js'),
            r = [],
            plugin = {
              route: function(route) {
                  if(Array.isArray(route)){
                      route.forEach(function(ro){ r.push(ro); });
                  } else { r.push(route); }
              },
              log: function(){}
            };

        p.register(plugin, {}, function(){});
        r.length.should.eql(2);

        r[0].path.should.eql('/server');
        r[1].path.should.eql('/deployment-info');
    });
});