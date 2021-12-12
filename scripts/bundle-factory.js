// ============================================================================================= //
//                                        BUNDLE FACTORY                                         //
// ============================================================================================= //

const path = require('path');

const PATH = {
    DIST_FOLDER: path.resolve(process.cwd(), 'dist')
};

const FILES = {
    APP: [
        './styles.scss'
    ]
};

module.exports = {
    PATH,
    FILES
};
