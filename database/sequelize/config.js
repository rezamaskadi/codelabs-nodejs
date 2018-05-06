'use strict';
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    'development': {
        'url': process.env.MYSQL_URL
    }
};
