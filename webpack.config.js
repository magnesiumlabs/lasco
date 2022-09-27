// ============================================================================================= //
//                                            WEBPACK                                            //
// ============================================================================================= //

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { PATH, FILES } = require(path.resolve(__dirname, 'scripts/bundle-factory'));
const BannerPlugin = require(path.resolve(__dirname, 'scripts/banner-plugin'));

module.exports = {
    mode: 'production',
    entry: {
        'lasco': FILES.APP,
        'lasco.min': FILES.APP
    },

    output: {
        filename: '[name].js',
        path: PATH.DIST_FOLDER
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },

                    {
                        loader: 'css-loader'
                    },

                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer'),
                                    require('postcss-sort-media-queries')
                                ]
                            }
                        }
                    },

                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                outputStyle: 'expanded'
                            }
                        }
                    }
                ]
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                include: /\.min.css/
            })
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new BannerPlugin
    ],

    performance: {
        hints: false
    }
};
