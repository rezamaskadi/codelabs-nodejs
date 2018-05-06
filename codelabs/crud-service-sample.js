'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    
    // deklarasikan tool models here
    let models = TOOLS.MODELS;

    var CRUDService = {

        //add CRUDService GET all here

        findAll: function (modelName, cb) {
            models[modelName].findAndCountAll().nodeify(cb);
        },

        //add CRUDService GET by id here

        findById: function (modelName, id, cb) {
            models[modelName].findById(id).nodeify(cb);
        },

        //add CRUDService POST here

        create: function (modelName, opts, cb) {
            models[modelName].create(opts).nodeify(cb);
        },

        //add CRUDService UPDATE by id here

        update: function (modelName, id, opts, cb) {
            var whereOpts = { where: { id: id } };
            models[modelName].update(opts, whereOpts).nodeify(cb);
        },

        //add CRUDService DELETE by id here

        destroy: function (modelName, opts, cb) {
            var whereOpts = { where: { id: opts } };
            models[modelName].destroy(whereOpts).nodeify(cb);
        },
        

        // service lain dengan option yang dibutuhkan
        findAllWithoutCount: function (modelName, cb) {
            models[modelName].findAll().nodeify(cb);
        },

        findOneData: function (modelName, opts, cb) {
            models[modelName].findOne({ where: opts }).nodeify(cb);
        },
       
        updateWithCustomOpts: function (modelName, whereOpts, opts, cb) {
            models[modelName].update(opts, whereOpts).nodeify(cb);
        },

        softDelete: function (modelName, whereOpts, cb) {
            models[modelName].destroy(whereOpts).nodeify(cb);
        },

        destroyWithOpts: function (modelName, opts, cb) {
            var whereOpts = { where: opts };
            models[modelName].destroy(whereOpts).nodeify(cb);
        },

        findAllWithOpts: function (modelName, opts, cb) {
            models[modelName].findAll({ where: opts }).nodeify(cb);
        },


        findAllWithCustomOpts: function (modelName, opts, cb) {
            models[modelName].findAndCountAll(opts).nodeify(cb);
        },

        findAllWithCustomOptsNoCount: function (modelName, opts, cb) {
            models[modelName].findAll(opts).nodeify(cb);
        },

        
        findOneWithCustomOpts: function (modelName, opts, cb) {
            models[modelName].findOne(opts).nodeify(cb);
        },

        sum: function (modelName, field, opts, cb) {
            models[modelName].sum(field, { where: opts }).nodeify(cb);
        },

        count: function (modelName, opts, cb) {
            models[modelName].count(opts).nodeify(cb);
        },

        insertBulk: function (modelName, opts, cb) {
            models[modelName].bulkCreate(opts).nodeify(cb);
        },

        findOne: function (modelName, opts, cb) {
            models[modelName].findOne(opts).nodeify(cb);
        },

        findAllOpts: function (modelName, opts, cb) {
            models[modelName].findAll(opts).nodeify(cb);
        },
    };

    return CRUDService;
};
