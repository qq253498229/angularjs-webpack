var path = require('path');
var root = path.resolve(__dirname, '../');

module.exports = {
    entry: {
        'main': root + '/app/index.js',
        jquery: ['jquery'],
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.json']
    }

};
