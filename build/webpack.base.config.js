var path = require('path');
var root = path.resolve(__dirname, '../');

module.exports = {
    entry: {
        'main': root + '/app/index.js',
        jquery: ['jquery'],
        bootstrapCSS:['bootstrap/dist/css/bootstrap.min.css']
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf|woff2)(\?.*)?$/,
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
