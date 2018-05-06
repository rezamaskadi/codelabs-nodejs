module.exports = function (MODULES) {
    let fs = MODULES.FS;
    let path = MODULES.PATH;
    let Sequelize = MODULES.SEQUELIZE;
    let basename = path.basename(module.filename);
    let db = {};

    let sequelize = new Sequelize(process.env.MYSQL_URL, {logging: true});

    fs.readdirSync(__dirname).filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    }).forEach(function (file) {
        let model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

    Object.keys(db).forEach(function (modelName) {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
    return db;
};
