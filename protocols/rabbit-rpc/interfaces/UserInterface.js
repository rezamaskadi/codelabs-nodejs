'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let log = TOOLS.LOG;
    let userController = TOOLS.CONTROLLERS.UserController;

    return {
        /**
         * Get user contact information
         * @param payloadString {String} Payload from other services
         * @param next {Function} [callback] Callback function
         */
        getContact: function (payloadString, next) {
            log.info('Get contact: ' + payloadString);
            let body = JSON.parse(payloadString);
            if (body.userId) {
                userController.getUserById(body, next);
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
