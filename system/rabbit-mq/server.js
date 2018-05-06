/* eslint-disable no-trailing-spaces */
/**
 * Created by Rizki Novrizal
 * Time : 22/01/18.
 * Modul konfigurasi Rabbit MQ(amqp)
 */

'use strict';

module.exports = function (TOOLS, MODULES, callback) {
    console.time('Loading rabbit-mq server');
    MODULES.AMQPLIB.connect(process.env.RABBIT_MQ_URL, function (err, conn) {
        if (err) {
            console.error('[AMQP]', err.message);
            callback(err, null);
        } else {
            conn.on('error', function (err) {
                if (err.message !== 'Connection closing') {
                    console.error('[AMQP] conn error', err.message);
                    setTimeout(function () { conn.close(); process.exit(0); }, 500);
                }
            });
            conn.on('close', function () {
                console.error('[AMQP] reconnecting');
            });
            console.log('[AMQP] connected');
            console.log('[AMQP] Running...');
            TOOLS.RABBITMQCONN = conn;
            console.timeEnd('Loading rabbit-mq server');
            callback(null, TOOLS);
        }
    });
};
