/**
 * Created by rakhmatullahyoga on 05/07/17.
 */

'use strict';

module.exports = {
    ASYNC: require('async'),
    BCRYPT: require('bcrypt'),
    BODY_PARSER: require('body-parser'),
    CORS: require('cors'),
    CRYPTO: require('crypto'),
    EXPRESS: require('express'),
    EXPRESS_LOGGER: require('express-request-logger'),
    FS: require('fs'),
    HTTP: require('http'),
    JWT: require('jsonwebtoken'),
    METHOD_OVERRIDE: require('method-override'),
    MONGOOSE: require('mongoose'),
    MONGOOSE_DELETE: require('mongoose-delete'),
    MONGOOSE_PAGINATE: require('mongoose-paginate'),
    MONGOOSE_UNIQUE: require('mongoose-unique-validator'),
    MULTER: require('multer'),
    NODE_MAILER: require('nodemailer'),
    PASSPORT: require('passport'),
    PASSPORT_FACEBOOK: require('passport-facebook-token'),
    PASSPORT_GOOGLE: require('passport-google-token'),
    PASSPORT_LOCAL: require('passport-local'),
    PATH: require('path'),
    RABBIT_RPC_CLIENT: require('gits-rabbit-rpc'),
    RABBIT_RPC_SERVER: require('gits-rabbit-rpc-server'),
    RANDOM_STRING: require('randomstring'),
    UNDERSCORE: require('underscore'),
    WINSTON: require('winston'),
    SEQUELIZE: require('sequelize'),
    AMQPLIB: require('amqplib/callback_api'),
    JOI: require('joi'),
    FILTER_WORD: require('bad-words'),
    HTTPREQ: require('httpreq')
};
