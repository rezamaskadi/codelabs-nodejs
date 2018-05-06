/**
 * Created by rakhmatullahyoga on 28/07/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    return {
        /**
         * Get return data for testing
         * @param params {Object} Any JSON Object
         * @param callback {Function} Callback function
         */
        welcome: function (params, callback) {
            callback(
                null, 
                {
                    message: 'Welcome To GITS Academy!',
                    nama: 'PUT YOUR NAME HERE',
                }
            );
        }
    };
};
