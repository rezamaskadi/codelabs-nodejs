/**
 * Created by rakhmatullahyoga on 12/09/17.
 */

'use strict';

module.exports = [
    {
        route: 'user.api.auth',
        controller: 'AuthInterface.decodeToken'
    },
    {
        route: 'user.api.profile',
        controller: 'AuthInterface.checkTokenForProfileCompletion'
    }
];
