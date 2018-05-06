/**
 * Created by rakhmatullahyoga on 17/08/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS, FILE_PATH) {
    let fs = MODULES.FS;
    let path = MODULES.PATH;
    let log = TOOLS.LOG;
    let classes = {};

    /**
     * Import classes recursively from a directory, return a list of class
     * @param dirPath Directory of the classes
     */
    function readRecursive (dirPath) {
        fs.readdirSync(dirPath).forEach(function (file) {
            let currentPath = dirPath + '/' + file;
            if (fs.statSync(currentPath).isDirectory()) {
                readRecursive(currentPath);
            } else {
                if ((file.indexOf('.') !== 0) && (file.slice(-3) === '.js')) {
                    let className = file.replace(/\.js$/, '');
                    classes[className] = require(path.join(dirPath, className))(TOOLS, MODULES, CONSTANTS);
                } else {
                    log.warn(`file '${currentPath + '/' + file}' is not supported for basic application class`);
                }
            }
        });
    }

    readRecursive(FILE_PATH);
    return classes;
};
