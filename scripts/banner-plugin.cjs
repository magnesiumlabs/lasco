// ============================================================================================= //
//                                         BANNER PLUGIN                                         //
// ============================================================================================= //

const path = require('path');
const { version } = require(path.resolve(process.cwd(), 'package.json'));
const webpack = require('webpack');

const banner = `/*! Lasco v${version} */`;

class BannerPlugin extends webpack.BannerPlugin {
    constructor() {
        super({
            raw: true,
            banner: banner
        });
    }
}

module.exports = BannerPlugin;
