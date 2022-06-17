// ============================================================================================= //
//                                         BANNER PLUGIN                                         //
// ============================================================================================= //

const path = require('path');
const { version } = require(path.resolve(process.cwd(), 'src/lasco/package.json'));
const year = new Date().getFullYear();
const month = ('0' + (new Date().getMonth() + 1)).slice(-2);
const day = ('0' + new Date().getDate()).slice(-2);
const webpack = require('webpack');

let time = `${new Date().getHours()}${new Date().getMinutes()}${new Date().getSeconds()}${new Date().getMilliseconds()}`,
    build = `${year}${month}${day}${time}`;

const banner = `/*!
 * Lasco v${version}
 * Build: ${build}
 */`;

class BannerPlugin extends webpack.BannerPlugin {
    constructor() {
        super({
            raw: true,
            banner: banner
        });
    }
}

module.exports = BannerPlugin;
