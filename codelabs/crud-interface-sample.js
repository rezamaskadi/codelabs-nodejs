/**
 * Created by rakhmatullahyoga on 29/09/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    
    // Deklarasikan crud controller disini
    const crudController = TOOLS.CONTROLLERS.CRUDController;

    return {

        // add interface get list here
        getList: function (previousData, req, res, next) {
            var model = req.query.model;
            if (!model) {
                let error = {code: 400, message: 'Please input models'};
                next(error, null);
            } else {
                crudController.getList(model, next);
            }
        },

        // add interface get one data by id here
        getOne: function (previousData, req, res, next) {
            var model = req.query.model;
            if (!model) {
                let error = {code: 400, message: 'Please input models'};
                next(error, null);
            } else {
                var id = req.params.id;
                crudController.getOne(model, id, next);
            }
        },

        // add interface post/create here
        create: function (previousData, req, res, next) {
            var model = req.query.model;
            if (!model) {
                let error = {code: 400, message: 'Please input models'};
                next(error, null);
            } else {
                var data = req.body;
                crudController.create(model, data, next);
            }
        },

        // add interface update here
        update: function (previousData, req, res, next) {
            var model = req.query.model;
            if (!model) {
                let error = {code: 400, message: 'Please input models'};
                next(error, null);
            } else {
                var id = req.params.id;
                var data = req.body;
                crudController.update(model, id, data, next);
            }
        },

        // add interface delete here
        delete: function (previousData, req, res, next) {
            var model = req.query.model;
            if (!model) {
                let error = {code: 400, message: 'Please input models'};
                next(error, null);
            } else {
                var id = req.params.id;
                crudController.delete(model, id, next);
            }
        }
    };
};
