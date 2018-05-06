/**
 * Created by Rizki Novrizal on 24/01/18.
 * Desc : Service for Rabbit MQ Producer(sender message)
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let connection = TOOLS.RABBITMQCONN;

    return {
        /**
         * Get exchange data via Rabbit RPC communication
         * @param ex {String} Rabbit MQ exchange name
         * @param type {String} Rabbit Exchange type
         * @param message {String} Rabbit MQ message
         * @param callback {Function} Callback function
         */
        startPublisher: function (ex, type, message, callback) {
            connection.createChannel(function (err, ch) {
                if (closeOnErr(err)) return;
                ch.on('error', function (err) {
                    console.error('[AMQP] channel error', err.message);
                });

                ch.on('close', function () {
                    console.log('[AMQP] channel closed');
                });

                ch.assertExchange(ex, type, {durable: false});
                ch.publish(ex, '', Buffer.from(message), function (err, success) {
                    if (err) {
                        console.error('[AMQP] publish : ', err);
                        connection.close();
                    } else {
                        console.log('User Service Succesfully sent message');
                        connection.close();
                        callback(null, success);
                    }
                });
                callback(null, null);
            });
        }
    };

    function closeOnErr (err) {
        if (!err) return false;
        console.error('[AMQP] error', err);
        connection.close();
        return true;
    }
};
