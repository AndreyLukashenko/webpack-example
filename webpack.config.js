
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var webpack = require('webpack');

module.exports = {
    entry: './app.js',

    output: {
        path: path.join(__dirname, './public/dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.js', 'index.js']
    },

    devtool: 'source-map',

    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ]
    },

    plugins: [
      new WebpackNotifierPlugin(),
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery"
      }),
    ]
};
