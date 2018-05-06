/**
 * Created by rakhmatullahyoga on 07/09/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, callback) {
    console.time('Loading rabbit rpc client');
    MODULES.RABBIT_RPC_CLIENT.setup(process.env.RABBIT_URL, function (err) {
        if (err) {
            callback(err, null);
        } else {
            console.timeEnd('Loading rabbit rpc client');
            callback(null, TOOLS);
        }
    });
};
