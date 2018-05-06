/**
 * Created by rakhmatullahyoga on 10/07/17.
 */

'use strict';

let path = require('path');

module.exports = {
    // Application's directories
    PATH: {
        APPLICATION_MODULES: path.join(__dirname, '/modules'),
        APPLICATION_TOOLS: path.join(__dirname, '/tools'),
        CONTROLLERS_PATH: path.join(__dirname, '/../application/controllers'),
        CLASS_LOADER: path.join(__dirname, '/../system/classloader'),
        EXPRESS_INTERFACES_PATH: path.join(__dirname, '/../protocols/express/interfaces'),
        EXPRESS_SERVER: path.join(__dirname, '/../system/express/server'),
        LOG_DEFAULT_PATH: path.join(__dirname, '/../logs/logs.log'),
        LOG_EXCEPTIONS_PATH: path.join(__dirname, '/../logs/exceptions.log'),
        MODELS_LOADER: path.join(__dirname, '/../database/sequelize/models/index'),
        PUBLIC_FILE_PATH: 'public',
        RABBIT_CLIENT: path.join(__dirname, '/../system/rabbit-rpc/client'),
        RABBIT_MQ: path.join(__dirname, '/../system/rabbit-mq/server'),
        RABBIT_INTERFACES_PATH: path.join(__dirname, '/../protocols/rabbit-rpc/interfaces'),
        RABBIT_ROUTES: path.join(__dirname, '/../protocols/rabbit-rpc/routes'),
        RABBIT_SERVER: path.join(__dirname, '/../system/rabbit-rpc/server'),
        ROUTERS_LOADER: path.join(__dirname, '/../system/express/router'),
        ROUTERS_PATH: path.join(__dirname, '/../protocols/express/routers'),
        SCHEMA_LOADER: path.join(__dirname, '/../database/mongoose/index'),
        SERVICES_PATH: path.join(__dirname, '/../application/services')
    },
    // Application's constant variables
    VARIABLE: {
    }
};
