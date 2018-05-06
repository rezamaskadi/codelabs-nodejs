'use strict';

module.exports = function (MODULES) {
    let fs = MODULES.FS;
    let path = MODULES.PATH;
    let mongoose = MODULES.MONGOOSE;
    let basename = path.basename(module.filename);
    let schema = {};

    mongoose.connect(process.env.MONGO_URL, {useMongoClient: true});

    fs.readdirSync(__dirname).filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    }).forEach(function (file) {
        schema[file.replace(/\.js$/, '')] = mongoose.model(file.replace(/\.js$/, ''), require(path.join(__dirname, file))(MODULES));
    });
    return schema;
};
