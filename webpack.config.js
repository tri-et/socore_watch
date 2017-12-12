var path = require('path');
var webpack = require('webpack');
module.exports = {
    plugins:[
        new webpack.ProgressPlugin({
        })
    ],
    entry: "./assets/js/App.js",
    output: {
        path: path.resolve(__dirname, "./assets/temp/js"),
        filename: "App.js"
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            test: /\.js$/,
            exclude: /node_modules|vue/
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: /node_modules/
        }]
    },
    resolve: { alias: { vue: 'vue/dist/vue.js' } }
}