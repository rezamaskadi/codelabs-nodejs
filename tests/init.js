describe('Initiate application', function () {
    it('Setup controllers, services and express server as global variables', function (done) {
        require('dotenv').load();
        // mute logger
        console.time = function () { };
        console.timeEnd = function () { };
        console.info = function () { };

        global.constants = require('../configs/constants');
        global.modules = require('../configs/modules');
        require('../configs/tools')(global.modules, global.constants, function (err, tools) {
            if (err) {
                done(err);
            } else {
                global.controllers = tools.CONTROLLERS;
                global.services = tools.SERVICES;
                require(global.constants.PATH.EXPRESS_SERVER)(tools, global.modules, global.constants).then(function (server) {
                    global.express_server = server;
                    done();
                });
            }
        });
    });
});
