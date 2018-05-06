/**
 * Created by rakhmatullahyoga on 11/07/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let welcomeService = TOOLS.SERVICES.WelcomeService;
    return {
        /**
         * Get message as a data for response
         * @param param {Object} An object that should contains
         * @param callback {Function} Callback function
         */
        welcome: function (param, callback) {
            welcomeService.welcome({}, callback);
        }
    };
};
