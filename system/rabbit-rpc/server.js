/**
 * Created by rakhmatullahyoga on 12/09/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    console.time('Loading rabbit-rpc server');
    let fs = MODULES.FS;
    let logger = TOOLS.LOG;
    let path = MODULES.PATH;
    let rpcServer = MODULES.RABBIT_RPC_SERVER;

    TOOLS.INTERFACES.RABBIT = require(CONSTANTS.PATH.CLASS_LOADER)(TOOLS, MODULES, CONSTANTS, CONSTANTS.PATH.RABBIT_INTERFACES_PATH);

    fs.readdirSync(CONSTANTS.PATH.RABBIT_ROUTES).forEach(function (file) {
        if ((file.indexOf('.') !== 0) && (file.slice(-3) === '.js')) {
            require(path.join(CONSTANTS.PATH.RABBIT_ROUTES, file)).forEach(function (config) {
                let controller = config.controller;
                rpcServer.handleRoute(config.route, function (stringBody, callback) {
                    let cs = controller.split('.');
                    let controllerName = cs[0];
                    let controllerFunc = cs[1];

                    TOOLS.INTERFACES.RABBIT[controllerName][controllerFunc](stringBody, function (err, result) {
                        logger.info('incoming transmission at ' + config.route);
                        if (err) {
                            callback(JSON.stringify(err), null);
                        } else {
                            callback(null, JSON.stringify(result));
                        }
                    });
                });
            });
        }
    });
    rpcServer.start(process.env.RABBIT_URL, 'service_user', 10, function (err) {
        if (err) {
            logger.error(err);
        } else {
            console.timeEnd('Loading rabbit-rpc server');
            logger.info('Rabbit-RPC server initiated');
        }
    });
};
