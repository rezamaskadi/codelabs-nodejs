/**
 * Created by rakhmatullahyoga on 12/09/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let log = TOOLS.LOG;
    let authController = TOOLS.CONTROLLERS.AuthController;
    let profileController = TOOLS.CONTROLLERS.ProfileController;

    return {
        /**
         * Authenticate for other services by access token
         * @param payloadString {String} Payload from other services
         * @param next {Function} [callback] Callback function
         */
        decodeToken: function (payloadString, next) {
            log.info('Auth user: ' + payloadString);
            let body = JSON.parse(payloadString);
            if (body.accessToken) {
                authController.decodeToken(body, function (error, result) {
                    if (error) {
                        next(error, null);
                    } else {
                        profileController.getProfile(result, function (err, res) {
                            if (err) {
                                next(err, null);
                            } else {
                                if (res) {
                                    next(null, result);
                                } else {
                                    let error = {code: 401, message: 'You must complete profile data first'};
                                    next(error, null);
                                }
                            }
                        });
                    }
                });
            } else {
                let clientError = {
                    code: 400,
                    message: 'Access token not found'
                };
                next(clientError, null);
            }
        },

        /**
         * Authenticate for other services by access token
         * @param payloadString {String} Payload from other services
         * @param next {Function} [callback] Callback function
         */
        checkTokenForProfileCompletion: function (payloadString, next) {
            log.info('Auth user: ' + payloadString);
            let body = JSON.parse(payloadString);
            if (body.accessToken) {
                authController.decodeToken(body, next);
            } else {
                let clientError = {
                    code: 400,
                    message: 'Access token not found'
                };
                next(clientError, null);
            }
        }
    };
};
