/**
 * Created by rakhmatullahyoga on 06/07/17.
 */

'use strict';

module.exports = function (MODULES, CONSTANTS, callback) {
    function loadToolsAndDatabase (callback) {
        console.time('Loading app tools and database');
        // Define parameter for initialization
        let TOOLS = {};

        // Initialize application logger
        let logOpts = {
            transports: [
                new (MODULES.WINSTON.transports.Console)({colorize: true}),
                new (MODULES.WINSTON.transports.File)({
                    filename: CONSTANTS.PATH.LOG_DEFAULT_PATH,
                    handleExceptions: true,
                    colorize: true
                })
            ],
            exceptionHandlers: [
                new (MODULES.WINSTON.transports.Console)({colorize: true}),
                new (MODULES.WINSTON.transports.File)({
                    filename: CONSTANTS.PATH.LOG_EXCEPTIONS_PATH,
                    handleExceptions: true,
                    colorize: true
                })
            ]
        };
        TOOLS.LOG = new (MODULES.WINSTON.Logger)(logOpts);

        // Initialize multipart/form-data handler
        let storage = MODULES.MULTER.diskStorage({
            destination: './public/',
            filename: function (req, file, cb) {
                MODULES.CRYPTO.pseudoRandomBytes(16, function (err, raw) {
                    cb(err, err ? undefined : raw.toString('hex') + MODULES.PATH.extname(file.originalname));
                });
            }
        });

        TOOLS.MULTER = MODULES.MULTER({storage: storage});

        // Initialize nodemailer email transporter
        // TOOLS.MAIL_TRANSPORTER = MODULES.NODE_MAILER.createTransport({
        //     service: process.env.MAIL_SERVICE,
        //     auth: {
        //         user: process.env.MAIL_USER,
        //         pass: process.env.MAIL_PASSWORD
        //     }
        // });

        // Initialize mongoose (Mongoose)
        // TOOLS.SCHEMA = require(CONSTANTS.PATH.SCHEMA_LOADER)(MODULES);

        /** Initialize passport.js strategies **/
        // Local strategy, using credentials from database
        MODULES.PASSPORT.use(new MODULES.PASSPORT_LOCAL.Strategy({
            usernameField: 'email',
            passwordField: 'password'
        }, function (email, password, done) {
            // do login with our controllers
            done(null, {email: email, password: password});
        }));

        // Initialize models (Sequelize)
        TOOLS.MODELS = require(CONSTANTS.PATH.MODELS_LOADER)(MODULES);
        console.timeEnd('Loading app tools and database');
        callback(null, TOOLS);
        // Facebook token strategy, using data obtained from facebook access (and refresh) token
        // MODULES.PASSPORT.use(new MODULES.PASSPORT_FACEBOOK({
        //     clientID: process.env.FACEBOOK_APP_ID,
        //     clientSecret: process.env.FACEBOOK_APP_SECRET
        // }, function (accessToken, refreshToken, profile, done) {
        //     // do login/register with our controllers
        //     done(null, profile);
        // }));
        // Google token strategy, using data obtained from google access (and refresh) token
        // MODULES.PASSPORT.use(new MODULES.PASSPORT_GOOGLE.Strategy({
        //     clientID: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET
        // }, function (accessToken, refreshToken, profile, done) {
        //     // do login/register with our controllers
        //     done(null, profile);
        // }));

        // Initialize Rabbit RPC Client
        // require(CONSTANTS.PATH.RABBIT_CLIENT)(TOOLS, MODULES, callback);
    }

    function loadRabbitMQ (tools, callback) {
        // Initialize Rabbit MQ Client
        // require(CONSTANTS.PATH.RABBIT_MQ)(tools, MODULES, callback);
    }

    function loadApplicationLayer (tools, callback) {
        console.time('Loading services, controllers and interfaces');
        // Initialize services
        tools.SERVICES = require(CONSTANTS.PATH.CLASS_LOADER)(tools, MODULES, CONSTANTS, CONSTANTS.PATH.SERVICES_PATH);

        // Initialize interfaces
        tools.CONTROLLERS = require(CONSTANTS.PATH.CLASS_LOADER)(tools, MODULES, CONSTANTS, CONSTANTS.PATH.CONTROLLERS_PATH);

        // Initialize interfaces
        tools.INTERFACES = {};

        console.timeEnd('Loading services, controllers and interfaces');
        callback(null, tools);
    }

    MODULES.ASYNC.waterfall([
        loadToolsAndDatabase,
        // loadRabbitMQ,
        loadApplicationLayer
    ], function (err, result) {
        if (err) {
            throw err;
        } else {
            callback(null, result);
        }
    });
};
