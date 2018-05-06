/**
 * Created by rakhmatullahyoga on 11/07/17.
 */

'use strict';

module.exports = [
    {
        method: 'get',
        endpoint: '/',
        fileField: null,
        fileObjArray: 'none',
        handlers: [
            'WelcomeInterface.welcome'
        ]
    }
];
