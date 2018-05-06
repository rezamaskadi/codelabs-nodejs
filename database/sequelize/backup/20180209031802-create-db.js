'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },
            phone: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },
            hash: {
                allowNull: false,
                type: Sequelize.STRING
            },
            username: {
                type: Sequelize.STRING
            },
            confirm_status: {
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }).then(function () {
            return queryInterface.createTable('interests', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                user_id: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                    references: { model: 'Users', key: 'id' }
                },
                interest: {
                    allowNull: true,
                    type: Sequelize.STRING
                }
            });
        }).then(function () {
            return queryInterface.createTable('work_experiences', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                user_id: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                    references: { model: 'Users', key: 'id' }
                },
                company: {
                    allowNull: true,
                    type: Sequelize.STRING
                },
                department: {
                    allowNull: true,
                    type: Sequelize.STRING
                },
                position: {
                    allowNull: true,
                    type: Sequelize.STRING
                },
                start_date: {
                    allowNull: true,
                    type: Sequelize.DATEONLY
                },
                end_date: {
                    allowNull: true,
                    type: Sequelize.DATEONLY
                }
            });
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('interests')
            .then(function () {
                return queryInterface.dropTable('work_experiences');
            })
            .then(function () {
                return queryInterface.dropTable('users');
            });
    }
};
