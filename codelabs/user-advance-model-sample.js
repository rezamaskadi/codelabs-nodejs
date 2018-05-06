'use strict';
module.exports = function (sequelize, DataTypes) {
    let jwt = require('jsonwebtoken');
    let Bcrypt = require('bcrypt');
    let randomString = require('randomstring');

    var User = sequelize.define('User', {
        email: {
            allowNull: {
                args: false,
                msg: 'Email address is required'
            },
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            },
            unique: {
                args: true,
                msg: 'Email address already in use!'
            }
        },
        password: {
            allowNull: {
                args: false,
                msg: 'Password is required'
            },
            type: DataTypes.STRING,
            set: function (value) {
                var password = Bcrypt.hashSync(value, Bcrypt.genSaltSync(10));
                this.setDataValue('hash', password);
            }
        },
        status: {
            allowNull: true,
            type: DataTypes.STRING
        }
    }, {
        paranoid: true
    });

    User.associate = function (models) {
    };

    User.prototype.validPassword = function (password) {
        return Bcrypt.compareSync(password, this.password);
    };

    User.prototype.getJWT = function () {
        return jwt.sign({
            id: this.id,
            confirm_status: this.confirm_status,
            email: this.email,
            role: this.role
        }, process.env.JWT_SECRET);
    };
    User.prototype.resetPassword = function () {
        return randomString.generate(8);
    };

    return User;
};
