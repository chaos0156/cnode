const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AutoPrefixer = require('autoprefixer');
const dirs = require('./dirs');

module.exports = {
    entry: {
        bundle: ['./src/index.ts'],
    },
    resolve: {
        mainFields: ['module', 'main'],
        mainFiles: ['index'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@': dirs.SRC,
            '@app': dirs.SRC_MODULES_APP,
            '@base': dirs.SRC_MODULES_BASE,
            '@card': dirs.SRC_MODULES_CARD,
            '@core': dirs.SRC_MODULES_CORE,
            '@service': dirs.SRC_MODULES_SERVICE,
            '@types': dirs.SRC_MODULES_TYPES,
        },
    },
    stats: {
        children: false,
        modules: false,
    },
    module: {
        rules: [
            {
                test: /\.(jsx?|tsx?)$/,
                include: [dirs.NODE_MODULES, dirs.SRC],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            configFile: dirs.BABEL_CONFIG,
                        },
                    },
                    {
                        loader: 'source-map-loader',
                        options: {
                            enforce: 'pre',
                        },
                    },
                ],
            },
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [AutoPrefixer],
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            relativeUrls: false,
                        },
                    },
                ],
            },
        ],
    },
};
