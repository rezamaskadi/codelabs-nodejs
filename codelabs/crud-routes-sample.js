'use strict';

module.exports = [
    // add routes get list here 
    {
        method: 'get',
        endpoint: '/global',
        handlers: [
            'CRUDInterface.getList'
        ]
    },
    // add routes get by id here
    {
        method: 'get',
        endpoint: '/global/:id',
        handlers: [
            'CRUDInterface.getOne'
        ]
    },
    // add routes create data here here
    {
        method: 'post',
        endpoint: '/global',
        handlers: [
            'CRUDInterface.create'
        ]
    },
    // add routes update data here
    {
        method: 'put',
        endpoint: '/global/:id',
        handlers: [
            'CRUDInterface.update'
        ]
    },
    // add routes delete data here
    {
        method: 'delete',
        endpoint: '/global/:id',
        handlers: [
            'CRUDInterface.delete'
        ]
    }
];
