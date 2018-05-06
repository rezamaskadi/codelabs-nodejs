/**
 * Created by rakhmatullahyoga on 29/09/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let rabbitClient = MODULES.RABBIT_RPC_CLIENT;

    return {
        /**
         * Get exchange data via Rabbit RPC communication
         * @param exchangeName {String} Rabbit RPC exchange name
         * @param routingKey {String} Rabbit RPC routing key
         * @param jsonBody {String} Rabbit RPC payload in a JSON string format
         * @param callback {Function} Callback function
         */
        getExchange: function (exchangeName, routingKey, jsonBody, callback) {
            rabbitClient.callExchange(exchangeName, routingKey, jsonBody, null, callback);
        }
    };
};
