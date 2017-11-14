var path = require('path');
module.exports = {
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
            test: /\.(js|png|jpeg)$/,
            exclude: /node_modules/
        }]
    }
}