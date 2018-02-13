var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './App/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader'},
            { test: /\.css$/, use: ['style-loader', 'css-loader']}

        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'App/index.html'
    })]
};